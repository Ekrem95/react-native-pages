import React from 'react';
import { Text, View, Image, Button,
         TextInput, ScrollView, TouchableHighlight
       } from 'react-native';
import axios from 'axios';

export default class Pictures extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      text: '',
    };
  }

  static navigationOptions = {
    title: 'Pictures',
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

  render() {
    return (
      <View>
        <ScrollView style={{ backgroundColor: '#fff', }}>
          { this.state.content &&
            this.state.content.map(res => {
              return (
                <View style={styles.view} key={res._id}>
                  <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Details', { post: res })}
                    underlayColor='rgba(255,255,255,0.1)'
                    >
                  <Image
                    style={{ width: 350, height: 350, }}
                    source={{ uri: res.src }}
                    resizeMode="cover"
                  />
                  </TouchableHighlight>
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
    backgroundColor: '#fff',
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
};
