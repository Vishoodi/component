import React from 'react';
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native';
import { styles } from "./styles";

export default function Button({text,onPress}) {
    return(    
        <TouchableOpacity onPress={onPress}>
            <View style={{flex:1,alignItems:'center'}}>   
                    <View style={styles.unCoverBtnView}>
                        <Text style={styles.unCoverBtn}>{text}</Text>
                    </View>
                </View>  
        </TouchableOpacity>  
    )
}