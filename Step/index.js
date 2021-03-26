import React, { useState } from 'react';
import {Text, View,SafeAreaView ,Image,TouchableOpacity} from 'react-native';
import {styles} from "./styles";
import { AntDesign } from '@expo/vector-icons';

const Step =({item,list,onPress})=>{
    const [index,setTouch]=useState(0);

    // const _onPressedPrev =()=>{
    //     console.log("id1 "+item.id)
    //     setTouch(item.id-1)
    //     console.log("index pre "+index)
    // }

    const _onPressedNext =()=>{
        console.log(123)
    }

    return(   
        <View style={styles.step}>  
            <View style={styles.topTxtContainer}>
                <Text style={styles.heading}>{item.step}</Text> 
            </View>   
            <View style={styles.stepImage}>
                {item.id===1? 
                <View style={styles.arrowIcon}></View>
                :
                <TouchableOpacity  style={styles.arrowIcon}>
                    <AntDesign name="left" size={19.8} color="black"  />
                </TouchableOpacity>}
                <View style={styles.imageView}>
                    <Image source={item.image} style={styles.image} resizeMode="contain"/>
                </View> 
                {item.id===8 ?
                <TouchableOpacity style={styles.arrowIcon} onPress={onPress}>
                <AntDesign name="right" size={19.8} color="black" />
            </TouchableOpacity>:
            <TouchableOpacity style={styles.arrowIcon} onPress={_onPressedNext}>
            <AntDesign name="right" size={19.8} color="black" />
        </TouchableOpacity>                
            }              
                
            </View>
        </View>         
    )
}

export default Step;