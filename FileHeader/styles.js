import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get("screen");

export const styles=StyleSheet.create({
    title:{
        fontWeight:"700",
        fontSize:24,
        color:'black',
        fontFamily:"SF-Font-Pro",
    },
    titleContainer:{
        marginLeft:-80
    }
})