import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity, Image, Modal } from 'react-native'

export default class Inputs extends Component {


constructor (props){
 super(props);
 this.state ={
   word1: "null ",
   word2: "null " };
 }

 sum = () => {
 var a= (this.state.word1);
 var b= (this.state.word2);
 var r=a+b;
 alert(r);
}

render() {
 return (
 <View >
 <Text style={styles.headertxt}>Word Calculator</Text>
 <TextInput style = {styles.input} placeholder = "  Enter the first word" placeholderTextColor = "black" onChangeText={word1=>this.setState({word1})} />
 <TextInput style = {styles.input} placeholder = "  Enter the second word" placeholderTextColor = "black" onChangeText={word2=>this.setState({word2})} />


<View style={styles.container}>
<TouchableOpacity onPress={this.sum}>
 <Text style = {styles.button}> Calculate! </Text>
 </TouchableOpacity>
 <View>
 </View>
 </View>
 </View>
 )
 }
}

const styles = StyleSheet.create({
container: {
paddingTop: 150,
flexDirection:'row',
justifyContent: 'center',
 },
 input: {
 margin: 25,
 height: 65,
 borderColor: "#EB984E",
 borderWidth: 5,
 fontSize:25,
 },

 button: {
 borderColor: 'green',
 fontSize:30,
 margin: 0,
 borderRadius: 9,
backgroundColor: "#EB984E",
 width: 170,
height: 50,
textAlign:'center'
 },

 headertxt:{
   margin:70,
 color: "#BA4A00" ,
 fontSize:40,
 textAlign:'center'
 }
})
