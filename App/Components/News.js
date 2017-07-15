import React from 'react';
import { Text, View, Image, Button, ScrollView, Dimensions, Linking } from 'react-native';

export default class News extends React.Component {
  render() {
    const article = this.props.navigation.state.params.article;
    const { width } = Dimensions.get('window');
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <ScrollView>
        <View
              style={{
                width: width - 10,
                marginTop: 16,
                backgroundColor: '#fff',
                borderRadius: 5,
              }}
              >
            <Text
              style={{
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 10,
              width: width - 20,
              fontSize: 16,
              display: 'flex',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>{article.title}
            </Text>
            <Image
                  style={{ width: width - 10, height: width - 10, }}
                  source={{ uri: article.media[0]['media-metadata'][0].url }}
                  resizeMode="cover"
                 />
           <Text
             style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              marginBottom: 10,
              width: width - 20,
              fontSize: 14,
              display: 'flex',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>{article.abstract}
           </Text>
           <View
             style={{
              paddingBottom: 20,
              paddingTop: 10,
              width: width - 20,
              marginLeft: 5,
            }}
             >
           <Button
             title="Open Article"
             onPress={() => Linking.openURL(article.url)}
           />
         </View>
          </View>
          </ScrollView>
      </View>
    );
  }
}
