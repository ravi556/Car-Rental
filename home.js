import React from 'react'
import {StyleSheet, View, Image, TextInput, Text, ImageBackground, Button, TouchableOpacity, ButtonProperties, Alert} from 'react-native'
import DetailsPage from './detailspage'

export default function HomePage({navigation}) {
    return(
      
            
        


        <ImageBackground source ={require('./assets/bgcarImage.jpg')} style={styles.bgImageStyle} blurRadius={0}>
            
            

            <View style = {styles.container}>
                
                
                <View style={{flex: 1,justifyContent: "center", alignItems: "center",}}>
                    <Text style={{fontSize: 68, fontWeight: 'bold', margin: 10, color: "gray", fontFamily: 'sans-serif-medium'}}>Welcome</Text>
                    <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10, color: "gray"}}>Car Rental App</Text>
                </View>
                <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignItems:'flex-end'}}>

                    <View style={{  width: 100,padding: 10, width: 150}}>
                        
                        <Button
                            title="Login"
                            color="#F30B0B"
 
                            onPress={() => {navigation.navigate('loginpage')}}
                        />
                    </View>
                    <View style={{  width: 100, padding: 10,width: 150}}>
                        
                        <Button
                            title="Sign Up"
                            color="#000" 
                            onPress={() => {navigation.navigate('signuppage')}}
                        />
                    </View>     
                </View>
                <View style={{justifyContent: "center", alignItems:"center"}}>
                    <Text style={{padding:10, margin:10}}>-----------------------     OR     -----------------------</Text>
                
                    <Text style={{marginBottom:30, justifyContent: "center", alignItems:"center"}} onPress={()=> Alert.alert('Facbook button click')}>Login with facebook</Text>
                   

                </View>

                
                

            </View>
            
            
            
            
        </ImageBackground>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        margin: 10,
   
        
       
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        
        borderWidth: 2,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },

    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
    
        resizeMode: "stretch",
        alignItems: "center"
    },

    bgImageStyle: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'cover',

    
      },
      buttonstyle: {
          flex: 1,
          color:'white'
          
      }


}); 