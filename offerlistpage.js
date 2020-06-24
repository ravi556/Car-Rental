import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert, ImageBackground  } from 'react-native';
import {images} from './global'
import DetailsPage from './detailspage';







export default function OfferListPage({navigation}) {



  const [car, setCar] = useState([
    {carname:'ACURA',carimage:'1', mileage:'Unlimited Mileage Include', prize: '$68.00', key:'1'},
    {carname:'ALFA ROMEO',carimage:'2', mileage:'Unlimited Mileage Include', prize: '$88.00', key:'2'},
    {carname:'ASTON MARTIN',carimage:'3', mileage:'Unlimited Mileage Include', prize: '$91.00', key:'3'},
    {carname:'AUDI',carimage:'4', mileage:'Unlimited Mileage Include', prize: '$70.00', key:'4'},
    {carname:'BENTEY',carimage:'5', mileage:'Unlimited Mileage Include', prize: '$100.00', key:'5'},
    {carname:'BMW',carimage:'6', mileage:'Unlimited Mileage Include', prize: '$40.00', key:'6'},
    
    {carname:'BUGATTI',carimage:'7', mileage:'Unlimited Mileage Include', prize: '$66.00', key:'9'},
    {carname:'CAMARO',carimage:'8', mileage:'Unlimited Mileage Include', prize: '$43.00', key:'10'},
    {carname:'CHRYSLER',carimage:'9', mileage:'Unlimited Mileage Include', prize: '$126.00', key:'11'},
    {carname:'CITROEN',carimage:'10', mileage:'Unlimited Mileage Include', prize: '$116.00', key:'12'},
    {carname:'ISUZU',carimage:'11', mileage:'Unlimited Mileage Include', prize: '$69.00', key:'13'},
    {carname:'LAMBORGHINI',carimage:'12', mileage:'Unlimited Mileage Include', prize: '$76.00', key:'14'},
    {carname:'MITSUBISHI',carimage:'13', mileage:'Unlimited Mileage Include', prize: '$93.00', key:'15'},
    {carname:'MUSTANG',carimage:'14', mileage:'Unlimited Mileage Include', prize: '$101.00', key:'16'},
      
  ]);


  
  return(
    <View style={{flex: 1}}>
      <ImageBackground source={require('./images/highway1.jpg')} style={{flex: 1}} resizeMode='cover'>
          
       

        <View style={{flex:1, flexDirection:'column'}}>
          
          <View style={{flex:15, marginBottom:20}}>
            <FlatList
            data={car}
            renderItem={({item})=>(
              <View style={{flex:1, marginVertical:10}}>
                <TouchableOpacity  style={{flexDirection: 'row', height:140, marginLeft:10, marginRight:10}} onPress={ () => {navigation.navigate('detailspage', item)}}>
                  <View style={{flex:2, backgroundColor: '#704A8BCC', alignItems:'center', justifyContent:'center', borderTopStartRadius:10, borderBottomStartRadius:10}}>
                    <Image source={images.carimage[item.carimage]} resizeMode='contain' style={{height:105,width:150, margin: 10}}/>
                    
                  </View>
                <View style={{flex:3, backgroundColor: '#704A8BCC', alignItems:'center', justifyContent:'center', borderBottomEndRadius:10, borderTopEndRadius:10}}>
                  <View style={{flex:1, justifyContent: 'flex-start', alignSelf: 'flex-start',paddingTop:15}}>
                              <Text style={styles.textstyle1}>{item.carname}</Text>
                              <Text style={styles.textstyle2}>{item.mileage}</Text>
                              <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.textstyle3}>{item.prize}</Text>
                                  <Text style={styles.textstyle4}>Total {item.prize}</Text>
                              </View>
                  </View>  
                </View>
                </TouchableOpacity> 
              </View>
            )}
            >

            </FlatList>
          </View>
        


        


        </View>
      </ImageBackground>
    </View>
   
      
    
  );      
  
}



const styles = StyleSheet.create({
 

  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    
    padding:10,
    margin: 20,
    fontSize: 18,
  
    backgroundColor: "red",

  },
  blue: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 100,
    marginHorizontal:10,
    paddingHorizontal: 10,
    backgroundColor: "blue",

  },
  black: {
    width: 100,
    height: 100,
    backgroundColor: "black",

  },
  input: {
    width: 200,
    borderColor: "green",
    borderRadius: 1,
    borderWidth: 2,
    padding: 10,
    margin: 40,
  },
  picker: {
    padding: 10,
    
    color: 'red',
    marginTop: 30,
    marginLeft:30,
    marginRight: 20,

  },
  textstyle1: {
      fontSize: 15,
      padding: 8,
      color:'white'

  },
  textstyle2: {
      fontSize: 11,
      paddingLeft: 8,
      paddingRight:8,
      paddingBottom:3,
      paddingTop:3,
      color:'#ffffff',


  },
  textstyle3: {
      fontSize: 12,
      padding: 8,
      color:'gold'

  },
  textstyle4: {
      color:'#ffffff',
      fontSize: 11,
      padding: 8,

  }
});
