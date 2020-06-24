import React, { useState } from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Dialog, {DialogFooter, DialogButton, DialogContent, DialogTitle} from 'react-native-popup-dialog';

import {StyleSheet, View, Image, TextInput, Text, ImageBackground, Button, TouchableOpacity, ButtonProperties, Alert, TouchableWithoutFeedback, ToastAndroid, ActionSheetIOS, Keyboard} from 'react-native'

export default function LoginPage({navigation}) {

    const [state, setState] = useState(
        {Visible1: false}
        )
    const validation = yup.object({

       
        email : yup
            .string()
            .required()
            .email(),

        password: yup
            .string()
            .required()
            .min(4)



    });


    

    const onpressSubmit = () => {
        setState({Visible1: false});
        ToastAndroid.show("Email sent", ToastAndroid.SHORT);
        

    }

    return(
        <TouchableWithoutFeedback onPress={() => {console.log('KeyBoard Dissmissed'); Keyboard.dismiss();}}>
        <ImageBackground source ={require('./images/bg1.jpg')} style={styles.bgImageStyle}> 
            {/*<View style={{marginTop:30,paddingBottom:0, justifyContent: 'center', alignContent:'flex-start'}}>
                    <Text style={{fontSize:25, color:'white'}}>Login</Text>
                </View>
            */}
             <Formik
             initialValues= {{email: "", password: ""}}
             validationSchema={validation}
             onSubmit={(values, actions) => {
                actions.resetForm();
                console.log(values);
                navigation.navigate('offerlistpage');
                ToastAndroid.show("Login Successful", ToastAndroid.SHORT);

             }}
            >
                {(props) => (


            <View style = {styles.container}>
                
           
                <View style = {styles.SectionStyle}>
                    <Image source = {require('./images/user.png')}  style = {styles.imageStyle} />
                    <TextInput 
                    style = {{flex: 1, fontSize: 12, fontWeight:'bold'}}
                    placeholder="User Name/ Email"
                    placeholderTextColor='white'
                    underlineColorAndroid = "transparent"
                    onChangeText = {props.handleChange('email')}
                    value={props.values.email}
                    />

                </View>
                <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                
                <View style = {styles.SectionStyle}>
                    <Image source = {require('./images/password111.png')}  style = {styles.imageStyle} />
                    <TextInput 
                    style = {{flex: 1, fontSize: 12, fontWeight:'bold'}}
                    placeholder="Password"
                    placeholderTextColor='white'
                    underlineColorAndroid = "transparent"
                    onChangeText = {props.handleChange('password')}
                    value={props.values.password}
                    />
                    
                </View>
                <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>

                <View style={{flexDirection: 'column'}}>

                    <View style={{  width: 100,padding: 10, width: 150}}>
                        
                        <Button
                            title="Login"
                            color="#F30B0B" 
                            //onPress={() => {navigation.navigate('offerlistpage')}}
                            onPress={props.handleSubmit}
                        />
                    </View>
                    <View style={{  width: 100, padding: 10,width: 150}}>
                        
                        <Button
                            title="Sign Up"
                            color="#000" 
                            onPress={() => {navigation.navigate('signuppage')}}
                            
                        />
                    </View>
                    <Text style={{alignSelf: 'center'}} onPress={()=>setState({Visible1: true})}>Forget password</Text>
                   
                       
                </View>

                
                
          


            </View>
            
            )}

        </Formik>
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Dialog
                visible={state.Visible1}
                dialogTitle={
                    <DialogTitle title="Reset Password"/>
                }
                footer={
                    <DialogFooter>
                        <DialogButton
                        text="Cancel"
                        onPress={() => {setState({Visible1: false})}}
                        />
                        <DialogButton
                        text="Submit"
                        onPress={() => {
                            
                                setState({Visible1: false});
                                ToastAndroid.show("A password reset email sent", ToastAndroid.SHORT);
                                
                        
                            
                        }}
                        />
                    
                    </DialogFooter>
                    
                }

                >
                    <DialogContent style={{width: 400}}>
                    <View style = {styles.SectionStyle}>
                        <TextInput 
                            style = {{flex: 1, fontSize: 12, fontWeight:'bold', padding: 5}}
                            placeholder="Enter Email"
                          
                            underlineColorAndroid = "transparent"
                            
                        />
                    </View>
                    </DialogContent>
                </Dialog>
            </View>
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
      errorText: {
        color: 'red',
        alignSelf: 'flex-end'
    }


}); 