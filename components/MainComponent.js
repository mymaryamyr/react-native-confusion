import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Home from './HomeComponent'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';

// Home 
const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
    return(
        <HomeNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"        
                },
                drawerBackgroundColor: '#D1C4E9'
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
            <HomeNavigator.Screen
                name="Contact Us"
                component={ContactUs}
            />   
            <HomeNavigator.Screen
                name="About Us"
                component={AboutUs}
            />          
        </HomeNavigator.Navigator>
    )
}

// Contact 
const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"        
                },
                drawerBackgroundColor: '#D1C4E9'
            }}
        >
            <ContactNavigator.Screen
                name="Contact Us"
                component={ContactUs}
                options={{ headerTitle: "Contact Us"}}
            />           
        </ContactNavigator.Navigator>
    )
}

// Menu 
const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return(
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"        
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />         
        </MenuNavigator.Navigator>
    );
}

// About 
const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return(
        <AboutNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"        
                },
                drawerBackgroundColor: '#D1C4E9'
            }}
        >
            <AboutNavigator.Screen
                name="About Us"
                component={AboutUs}
            />           
        </AboutNavigator.Navigator>
    )
}

// Drawer 
const Drawer = createDrawerNavigator();

function MainNavigator() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
            <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
            <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
            <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
        </Drawer.Navigator>
    )
}

class Main extends Component {

  render() {
 
    return (
        <NavigationContainer>
            <MainNavigator />       
        </NavigationContainer>
    );
  }
}
  
export default Main;