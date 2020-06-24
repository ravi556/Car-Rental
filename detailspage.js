import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert, ImageBackground  } from 'react-native';
import {images} from './global'


export default function DetailsPage({navigation}) {
    
    
   

    return(
        
        
        <ImageBackground source ={require('./images/bg1.jpg')} style={styles.bgImageStyle} resizeMode="cover" >
            <View style={{flex: 1,}}>
            
            
                <View style={{flex: 2,justifyContent: "center",alignItems: 'center'}}>
                    <Image source={images.carimage[navigation.getParam('carimage')]} style={styles.imagestyle} resizeMode='contain'/>
                </View>
                <View style={{flex: 4}}>
                    <View style={{flex: 2,  justifyContent: 'center', alignItems: "center"}}>
                        <Text style={styles.text1}>{navigation.getParam('carname')}</Text>
                        <Text style={styles.text2}>Coundown Until Vehical Selection</Text>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row'}}>
                        <View style={styles.countStyle1}>
                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 2, justifyContent: "center", alignItems:"center"}}>
                                    <Text style={{fontSize: 80}}>00</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
                                    <Text>Hours</Text>
                                </View>    
                                
                                
                            </TouchableOpacity>
                        </View>
                        <View style={styles.countStyle2}>
                            <TouchableOpacity style={{flex: 1}} >
                                <View style={{flex: 2, justifyContent: "center", alignItems:"center"}}>
                                    <Text style={{fontSize: 80}}>09</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
                                    <Text>Minutes</Text>
                                </View>    
                                
                                
                            </TouchableOpacity>
                        </View>
                        <View style={styles.countStyle3}>
                            <TouchableOpacity style={{flex: 1}}>
                                <View style={{flex: 2, justifyContent: "center", alignItems:"center"}}>
                                    <Text style={{fontSize: 80}}>49</Text>
                                </View>
                                <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
                                    <Text>Seconds</Text>
                                </View>    
                                
                                
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 4,}}>
                        <View style={{flex: 1, backgroundColor:'gray', flexDirection: 'row', margin: 10}}>
                            <View style={{flex:1,justifyContent: "center", alignItems: "center",padding:8}}>
                                <Image source={require('./images/location_ic.jpg')} style={{height:50, width:50}} resizeMode='cover'/>

                            </View>
                            <View style={{flex:5, flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', margin:15}}>
                                <View style={{flex: 4}}><Text style={{fontSize: 18, color: "#000"}}>Pickup Station</Text></View>

                                <View style={{flex: 3}}><Text style={{fontSize: 12,marginTop:5, color: "#000"}}>10/05/2020 08:00 AM</Text></View>
                                <View style={{flex: 4}}><Text style={{fontSize: 14,color: "#000"}}>car rent office civil line allahabad </Text></View>
                            </View>

                        </View>
                        <View style={{flex: 1, backgroundColor:'gray', flexDirection: 'row', margin: 10}}>
                            <View style={{flex:1,justifyContent: "center", alignItems: "center",padding:8}}>
                                <Image source={require('./images/location_ic.jpg')} style={{height:50, width:50}} resizeMode='cover'/>

                            </View>
                            <View style={{flex:5, flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', margin:15}}>
                                <View style={{flex: 4}}><Text style={{fontSize: 18,color: "#000"}}>Return Station</Text></View>
                                <View style={{flex: 3}}><Text style={{fontSize: 12,marginTop:5, color: "#000"}}>15/05/2020 08:00 AM</Text></View>
                                <View style={{flex: 4}}><Text style={{fontSize: 14, color: "#000"}}>car rent office civil line allahabad </Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}


const styles= StyleSheet.create({
    imagestyle: {
        height:280,
        width:400,
        marginTop:10,
        
    },
    text1: {
        fontSize: 25,
        color: '#000',
        

    },
    text2 : {
        fontSize: 15,
        color: '#000',
        marginVertical: 10,

    },
    bgImageStyle: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'cover',
        

    
      },
    countStyle1: {
        flex: 1,
        backgroundColor: 'gray',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    countStyle2: {
        flex: 1,
        backgroundColor: 'gray',
        margin:10
    },
    countStyle3: {
        flex: 1,
        backgroundColor: 'gray',
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    locationStyle: 
        {flex:1,justifyContent: "center", alignItems: "center",padding:8, margin: 10}
    

})