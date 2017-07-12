import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
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

  render() {
    const { navigate } = this.props.navigation;
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
  },
};
