import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Image} from 'react-native';
import OfferListPage from './offerlistpage';
import LoginPage from './loginpage';
import SignUpPage from './signuppage';
import Navigator from './homestack';
import DetailsPage from './detailspage';
import {images} from './global';


export default function App() {
  

const person = {
    1:require("./images/alfa-romeo-2.png"),
    2:require("./images/alfa-romeo-7.png"),
    3:require("./images/alfa-romeo-12.png")
    

}
 

   
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
