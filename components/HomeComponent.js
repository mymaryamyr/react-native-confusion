import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Home extends Component {

    render() {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Component</Text>
            </View>
        );
    }
}

export default Home;