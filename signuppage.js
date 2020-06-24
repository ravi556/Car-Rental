import React, { useState } from 'react'
import {StyleSheet, View, Keyboard, Image, TextInput, Text, ImageBackground, Button, TouchableOpacity,TouchableWithoutFeedback, ButtonProperties, Alert, Picker, ToastAndroid} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Formik} from 'formik'
import * as yup from 'yup'


export default function SingupPage({navigation}) {

    const [salute, setSalute] = useState("select")
   
    
    const validation = yup.object({

        firstname: yup
            .string()
            .required()
            .min(4),

        lastname: yup
            .string()
            .required()
            .min(4),

        email : yup
            .string()
            .required()
            .email(),

        password: yup
            .string()
            .required()
            .min(4)



    });
    
    
     

    


    return(
        <TouchableWithoutFeedback onPress={() => {console.log('KeyBoard Dissmissed'); Keyboard.dismiss();}}>
        <ImageBackground source ={require('./images/highway1.jpg')} style={styles.bgImageStyle} >
            
            {/*<View style={{marginTop:30,paddingBottom:0, justifyContent: 'center', alignContent:'flex-start'}}>
                    <Text style={{fontSize:25, color:'white'}}>Sign Up</Text>
                </View>
            */}
            <Formik
             initialValues= {{email: "", password: "", firstname: "", lastname: "", salutation: ""}}
             validationSchema={validation}
             onSubmit={(values, actions) => {
                actions.resetForm();
                console.log(values);
                navigation.navigate('loginpage');
                ToastAndroid.show("Sign Up Successful", ToastAndroid.SHORT)

             }}
            >
                {(props) => (

                        <View style = {styles.container}>
                                        
                        <View style={{alignSelf:'flex-start', marginStart: 10}}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', textAlign:'left', justifyContent:'flex-end'}}>Login Data</Text>
                        </View>

                        <View style = {styles.SectionStyle}>
                            <Image source = {require('./images/email11.webp')}  style = {styles.imageStyle} />
                            <TextInput 
                            style = {{flex: 1, fontSize: 12, fontWeight:'bold', color: '#ffffff'}}
                            placeholder="Email"
                            placeholderTextColor='white'
                            keyboardType="email-address"
                            underlineColorAndroid = "transparent"
                            onChangeText = {props.handleChange('email')}
                            value={props.values.email}
                            />
                            

                        </View>
                        <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>

                        <View style = {styles.SectionStyle}>
                            <Image source = {require('./images/password111.png')}  style = {styles.imageStyle} />
                            <TextInput 
                            style = {{flex: 1, fontSize: 12, fontWeight:'bold', color: '#ffffff'}}
                            placeholder="Password"
                            
                            placeholderTextColor='white'
                            underlineColorAndroid = "transparent"
                            keyboardType="visible-password"
                            onChangeText = {props.handleChange('password')}
                            value={props.values.password}
                            />
                            
                        </View>
                        <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                        <View style={{    alignSelf:'flex-start', marginStart: 10}}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold', textAlign:'left', justifyContent:'flex-end'}}>Personal Informations</Text>
                        </View>
                        <View style = {styles.SectionStyle}>
                            <Image source = {require('./images/ic_person.png')}  style = {styles.imageStyle} />
                            <View style={{flex: 1, height: 40, marginBottom:10, color: '#ffffff'}}>
                            <Picker
                                selectedValue={salute}
                                
                                style={{color: "#ffffff"}}
                                
                                onValueChange={(itemValue, itemIndex) => setSalute(itemValue)}
                                
                                >
                                    <Picker.Item value="Solutation*" label="Salutation*" fontSize={12} />
                                    <Picker.Item value="Mr" label="Mr" />
                                    <Picker.Item value="Mrs" label="Mrs"/>
                                    <Picker.Item value="Ms" label="Ms"/>
                                    
                            </Picker>
                            </View>
                            
                        </View>


                        <View style = {styles.SectionStyle}>
                            <Image source = {require('./images/user.png')}  style = {styles.imageStyle} />
                            <TextInput 
                            style = {{flex: 1, fontSize: 12, fontWeight:'bold', color: '#ffffff'}}
                            placeholder="First Name"
                            placeholderTextColor='white'
                            underlineColorAndroid = "transparent"
                            onChangeText = {props.handleChange('firstname')}
                            value={props.touched.firstname && props.values.firstname}
                            />
                            
                        </View>
                        <Text style={styles.errorText}>{props.touched.firstname &&  props.errors.firstname}</Text>

                        <View style = {styles.SectionStyle}>
                            <Image source = {require('./images/user.png')}  style = {styles.imageStyle} />
                            <TextInput 
                            style = {{flex: 1, fontSize: 12, fontWeight:'bold', color: '#ffffff'}}
                            placeholder="Last Name"
                            placeholderTextColor='white'
                            
                            underlineColorAndroid = "transparent"
                            onChangeText = {props.handleChange('lastname')}
                            value={props.touched.lastname && props.values.lastname}
                            />
                            
                        </View>
                        <Text style={styles.errorText}>{props.touched.lastname && props.errors.lastname}</Text>


                        <View style={{  width: 150, borderRadius: 10, backgroundColor: 'gray', borderWidth: 2}}>
                            
                            <Button
                                title="Sign Up"
                                color="#F30B0B" 
                                //onPress={() => {navigation.navigate('loginpage')}}
                                onPress= {props.handleSubmit}
                            />
                        </View>

                        </View>

                )}
            </Formik>
            
            
            
                
            
        </ImageBackground>
        </TouchableWithoutFeedback>
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
          
      },
      picker: {
          color:'#ffffff'
      },
      errorText: {
          color: 'red',
          alignSelf: 'flex-end'
      }


}); 