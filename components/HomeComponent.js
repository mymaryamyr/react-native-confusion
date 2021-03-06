import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders'

function RenderItem(props) {
    const item = props.item;

    if(item!=null) {
        return(
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
                <Card.Image source={require('./images/uthappizza.png')} />
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>)
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {
        return(
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter((item) => item.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter((item) => item.featured)[0]}
                />
                <RenderItem
                    item={this.state.leaders.filter((item) => item.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;