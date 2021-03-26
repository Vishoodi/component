import React from 'react';
import {Text, View,SafeAreaView ,Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {styles} from "./styles";
import { AntDesign } from '@expo/vector-icons';
const {width,height}=Dimensions.get("screen");

export default function Card({image,title,description,onPress}) {
    return(    
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <View style={[{flexDirection:"row"}]}>
                    <View style={styles.cardImage}>
                        <Image source={image} style={styles.image}/>
                    </View>
                    <View style={styles.cardTxt}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <View style={styles.allowIcon}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>  
    )
}