import React from 'react';
import {Text, Image,TouchableOpacity,StyleSheet,Dimensions,Modal} from 'react-native';
const {width,height}=Dimensions.get("screen");
import { styles } from "./styles";

export default function Application({item,onPress}) {
    return(  
            <TouchableOpacity onPress={onPress} style={styles.listCard}> 
                <Image style={styles.image} source={item.image} resizeMode="contain"/>     
                <Text style={styles.title}>{item.title.split(' ')[0]}</Text> 
                <Text style={styles.title}>{item.title.split(' ')[1]}</Text>      
            </TouchableOpacity>           
    )
}