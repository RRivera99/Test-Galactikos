import React from 'react';
import { Card } from '@rneui/themed';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const goalIcon ='https://i.pinimg.com/originals/66/c0/2a/66c02a87060ac06d01d2b4d5def3800c.png'

const shotIcon = 'https://icon-library.com/images/soccer_icon_glyph-20-512_121295.png'

const yellow_cardIcon ='https://i.pinimg.com/originals/4e/40/34/4e4034197399997c66c3f94164d759de.png'


export const CardItem = ({props}) => {

const {teamName, goals, shots, yellow_cards, goals_score, shots_score,yellow_cards_score,total_score, image} = props
    

  return (
    <Card containerStyle={{borderRadius: 15, width: windowWidth*0.8, height: windowHeight * 0.6, marginVertical:25}}>

        <View style={styles.container}>
            {image && <Image style={styles.image} source={{uri:image}}/> }
            <Text style={[styles.textBlack,{fontSize:30}]}>{teamName}</Text>
        </View>

        <View style={styles.containerInfo}>
            <Text style={{color:'black'}}>Goals = {goals}</Text>
            <Text style={{color:'black'}}>Shots = {shots}</Text>
            <Text style={{color:'black'}}>Y C = {yellow_cards}</Text>
        </View>

        <View style={styles.containerPoints}>
            <Text style={[styles.points,{color:'green'}]}>+30</Text>
            <Text style={[styles.points,{color:'green'}]}>+5</Text>
            <Text style={[styles.points,{color:'red'}]}>-5</Text>
        </View>

        <View style={styles.containerIcons}>
            <View style={styles.containerScores}>
            <Image style={styles.icon} source={{uri:goalIcon}}/>
            <Image style={styles.icon} source={{uri:shotIcon}}/>
            <Image style={styles.icon} source={{uri:yellow_cardIcon}}/>
            </View>
            
            <View style={[styles.containerScores,{paddingRight:7}]}>
            <Text style={styles.text1}>{goals_score}</Text>
            <Text style={styles.text1}>{shots_score}</Text>
            <Text style={styles.text1}>{yellow_cards_score}</Text>
            </View>     
        </View>

        <View style={styles.containerTotalScore}>
            <View>
                <Text style={[styles.textBlack,{fontSize:20}]}>Total Score:</Text>
            </View>
            <View>
                <Text style={[styles.textBlack,{fontSize:50, paddingRight:20}]}>{total_score}</Text>
            </View>
        </View>
        
    </Card>
  )
}
const styles = StyleSheet.create({
    textBlack:{
        color:'black', 
        fontWeight:'bold'

    },
    points:{
            fontSize:17,
            fontWeight:'bold', 
            paddingHorizontal:8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 75,
        alignItems: 'center'
    },
    icon: {
        width:40,
        height:40,
        borderRadius:2,
    },
    contIcon:{
        alignItems:'center', 
        width:windowWidth *0.23,
        justifyContent:'space-around',
        paddingHorizontal:15,
        backgroundColor:'yellow'
    },
    text1: {
        fontSize:30,
        color: 'black',
        marginHorizontal:10
    },
    container: {
        backgroundColor:'#318787',
        padding:10,
        alignItems:'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius:15
    },
   
    containerInfo:{
        flexDirection:'row', 
        justifyContent:'space-around',
        backgroundColor:'#8ecdc4',
        padding:5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius:15 
        },

    containerPoints:{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginLeft:15,
            paddingTop:30,
        },

    containerIcons:{
        flexDirection:'row',
        justifyContent:'space-around', 
        alignContent:'space-around',
        paddingVertical:5, 
        height:windowHeight*0.13, 
        flexWrap:'wrap', 
        height:windowHeight*0.15
    },
    containerScores:{
        flexDirection:'row',
        width:windowWidth*0.67, 
        justifyContent:'space-around', 
        marginHorizontal:'auto'
    },
    containerTotalScore:{
        flexDirection:'row', 
        justifyContent:'space-around', 
        marginTop:15, 
        alignItems:'center', 
        backgroundColor:'#8ecdc4', 
        borderRadius:15
    }
    
})