import React from 'react';
import { Text, View, Image, Button,
         TextInput, ScrollView, TouchableHighlight, Dimensions
       } from 'react-native';
import request from 'superagent';

export default class Details extends React.Component {
  constructor() {
    super();
    this.sendComment = this.sendComment.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  sendComment() {
    if (this.state.text.length > 1) {
      const comment = this.state.text;
      const comments = this.state.comments;
      comments.push(comment);

      this.setState({
        comments,
      });

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

      this.clearText('textInput');
    }
  }

  render() {
    const res = this.props.navigation.state.params.post;
    const { width } = Dimensions.get('window');
    return (
      <View
        style={styles.view}
      >
        <ScrollView>
          <Image
            style={{ width: width, height: width, alignSelf: 'center' }}
            source={{ uri: res.src }}
            resizeMode="cover"
          />
          <TextInput
            ref={'textInput'}
            style={ styles.TextInput }
            placeholder="Type here to comment"
            onChangeText={(text) => this.setState({
              text, id: res._id, comments: res.comments,
            })}
          />
          <View
            style={{
              width: 90,
              alignSelf: 'center',
            }}
          >
          <Button
            title="Send"
            onPress={this.sendComment}
          />
          </View>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  view: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
  TextInput: {
    flex: 1,
    height: 40,
    width: 260,
    alignSelf: 'center',
    paddingLeft: 5,
  },
};
