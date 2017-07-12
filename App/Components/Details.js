import React from 'react';
import { Text, View, Image, Button,
         TextInput, ScrollView
       } from 'react-native';
import axios from 'axios';
import request from 'superagent';

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      text: '',
    };
    this.sendComment = this.sendComment.bind(this);
  }

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
      console.log('Click');
      // request
      //   .post('https://react-eko.herokuapp.com/p/d')
      //   .type('form')
      //   .send({ box: comment }) // sends a JSON post body
      //   .set('Accept', 'application/json')
      //   .end(function (err, res) {
      //   // Calling the end function will send the request
      // });
    }
  }

  render() {
    return (
      <View>
        <ScrollView
          style={{
            paddingTop: 40,
          }}
        >
          {
            this.state.content &&
            this.state.content.map(res => {
              return (
                <View
                  style={styles.view}
                  key={res._id}>
                  <Text
                    style={styles.text}
                    >{res.title}</Text>
                  <Image
                    style={{ width: 350, height: 350, }}
                    source={{ uri: res.src }}
                  />
                  <TextInput
                    style={{ height: 40, width: 260 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}
                  />
                  <Button
                    title="Send"
                    onPress={this.sendComment}
                  />
                  {res.comments &&
                    res.comments.map((comment, i) => {
                      return (
                        <Text
                          key={i}
                          style={styles.text}
                          >{comment}</Text>
                      );
                    })
                  }
                </View>
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
