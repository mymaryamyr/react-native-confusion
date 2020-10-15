import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'

function RenderDish(props) {
    const { dish } = props

    if(dish != null) {
        return(
            <Card>
                <Card.title>{dish.name}</Card.title>
                <Card.Image source={require('./images/uthappizza.png')} />
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return(<View><Text>No Dish Selected Yet!</Text></View>)
    }
}

export default RenderDish;