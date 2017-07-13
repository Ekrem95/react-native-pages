import React from 'react';
import { Text, View, Image, Button,
         TextInput, ScrollView, TouchableHighlight
       } from 'react-native';
import axios from 'axios';
import request from 'superagent';

export default class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      text: '',
    };
    this.sendComment = this.sendComment.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentWillMount() {
    axios.get('https://react-eko.herokuapp.com/api/posts')
      .then(res => {
        //console.log(res.data);
        this.setState({
          content: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  sendComment() {
    if (this.state.text.length > 1) {
      const comment = this.state.text;

      const data = this.state.content;
      for (let i = 0; i < data.length; i++) {
        if (data[i]._id == this.state.id) {
          data[i].comments.push(comment);
        }
      }

      this.setState({ content: data });

      request
        .post('https://react-eko.herokuapp.com/p/d')
        .type('form')
        .send({
          box: comment,
          id: this.state.id,
        }) // sends a JSON post body
        .set('Accept', 'application/json')
        .end(function (err, res) {
        // Calling the end function will send the request
      });
    }
  }

  render() {
    return (

      <View>
        <ScrollView>
          {
            this.state.content &&
            this.state.content.map(res => {
              return (
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('Details', { post: res })}
                  key={res._id}
                  underlayColor='rgba(255,255,255,0.1)'
                  >
                  <View style={styles.view}>
                    <Image
                      style={{ width: 350, height: 350, }}
                      source={{ uri: res.src }}
                      onPress={() => this.props.navigation.navigate('Details', { post: res })}
                    />
                  </View>
                </TouchableHighlight>
            );
            })
          }
        </ScrollView>
      </View>

    );
  }
}

const styles = {
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#eee',
    marginBottom: 20,
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
};
