import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get("screen");

export const styles=StyleSheet.create({
    card:{
        borderRadius:10.35,
        // marginTop:20,
        backgroundColor:"#DFDFDF",
        height:height/8,
    },
    
    cardImage:{
        flex:0.3,
        margin:8

    },
    cardTxt:{
        flex:0.62,
        justifyContent:'center',
        overflow:'hidden'
    },

    image:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    title:{
        fontWeight:"700",
        fontSize:14.35,
        marginLeft: 10,
        color:'black',
        fontFamily:"SF-Font-Pro",
        marginBottom:5
    },

    description:{
        fontSize:11,
        color:"#646464",
        marginLeft:10,
        fontWeight:'400',
        fontFamily:"SF-Font-Pro",
        lineHeight:13.13
    },
    allowIcon:{
        flex:0.08,
        marginHorizontal:12,
        overflow:'hidden',
        justifyContent:'center'
    }
});