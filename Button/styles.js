import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get("screen");

export const styles=StyleSheet.create({
    unCoverBtnView:{
        width:219,
        height:49.93,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:'#6EB52C',
        marginVertical:10
    },
    unCoverBtn:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:'700',
        fontFamily:"SF-Font-Pro",
        lineHeight:19.09 
    },
});