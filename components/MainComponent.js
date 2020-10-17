import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Home from './HomeComponent'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

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
        </HomeNavigator.Navigator>
    )
}
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

const Drawer = createDrawerNavigator();

function MainNavigator() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
            <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
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