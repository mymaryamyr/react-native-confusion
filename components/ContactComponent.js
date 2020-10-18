import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'

function ContactUs() {

    return(
        <Card>
            <Card.Title>Contact Information</Card.Title>
            <Text style={{lineHeight: 30}}>
                {`121, Clear Water Bay Road\nClear Water Bay, Kowloon\nHONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net`}
            </Text>
        </Card>
    );
    
}

export default ContactUs;
