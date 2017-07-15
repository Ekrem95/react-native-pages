import React from 'react';
import { Text, View, Image, Button, ScrollView, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

export default class Scenes extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentWillMount() {
    let url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json';
    url += '?api-key=' + API_KEY;
    axios.get(url)
      .then(res => {
        this.setState({
          news: res.data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  static navigationOptions = {
    title: 'Scenes',
  };
  render() {
    const news = this.state.news;
    return (
      <View>
        <ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Lucy' })}
          title="Go to Lucy's profile"
        />
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}
          >
          <ScrollView horizontal={true}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Map')}
            underlayColor='rgba(255,255,255,0.1)'
            >
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ><Image
                style={{ width: 300, height: 300, }}
                source={{ uri: 'http://romaniatourism.com/romania-maps/europe-map.gif' }}
                resizeMode="cover"
               />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='rgba(255,255,255,0.1)'
            >
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'pink',
                margin: 10,
              }}
              ></View>
          </TouchableHighlight>
          </ScrollView>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Text
              style={{ fontSize: 20 }}
              >Popular News</Text>
            { news &&
              news.map(article => {
                if (article.media[0]) {
                  return (
                    <TouchableHighlight
                      onPress={() => this.props.navigation.navigate('News', { article })}
                      key={article.id}
                      >
                  <View
                        style={{
                          width: 300,
                          margin: 16,
                          backgroundColor: '#fff',
                          borderRadius: 5,
                        }}
                        >

                      <Image
                            style={{ width: 300, height: 300, }}
                            source={{ uri: article.media[0]['media-metadata'][0].url }}
                            resizeMode="cover"
                           />
                           <Text
                             style={{
                            marginLeft: 20,
                            marginTop: 10,
                            marginBottom: 10,
                            width: 260,
                            fontSize: 16,
                            display: 'flex',
                            justifyContent: 'center',
                            // alignItems: 'center',
                          }}
                             >{article.title}</Text>
                    </View>
                </TouchableHighlight>
                  );
                };
              })}
        </View>
      </ScrollView>
      </View>
    );
  }
}
