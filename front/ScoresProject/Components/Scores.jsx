import React, {useEffect, useState} from "react";
import axios from "axios";
import { Text, StyleSheet, FlatList, View, StatusBar} from "react-native";
import { CardItem } from "./Card";





const Scores = () => {
    const [teamScores, setTeamScores] = useState([]);

    

    const getScores = async () => {
        try {
            const response = await axios.get('http://localhost:3001/Scores')// en esta línea para que me funcione en el emulador cambié localhosto:3001 por IP de mi pc
            const {data} = response
            const sortedData = data.slice().sort((a, b) => b.total_score - a.total_score);
            setTeamScores(sortedData);
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {            
        getScores()
    },[] )
        
    
       

    
    return (
        <View style={styles.view}>
            <StatusBar
        animated={true}
        backgroundColor="#78152A"
            />
            <Text style={styles.title}>
                Team Scores
            </Text>    
            <FlatList
            contentContainerStyle={styles.flatlist}
            data={teamScores}
            keyExtractor={item => item.teamName}
            renderItem={({item}) =>(
                <CardItem props={item}>
                    
                </CardItem>)}
            >

            </FlatList>
        
        </View>
            
        
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: '100%',
        backgroundColor: '#B0D7D1'
    },
    
    
    title: {
        width:'100%',
        backgroundColor: '#78152A',
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        paddingBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        shadowColor: 'black'
    },
    flatlist:{
        alignItems:'center',
        paddingBottom:20
    }
        })

export default Scores