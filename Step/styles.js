import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get("screen");

export const styles=StyleSheet.create({
    step:{
        backgroundColor:'#FAFAFA',  
        width:width,  
    },
    topTxtContainer:{
        height:120,
        backgroundColor:'#EAE9E9',
        borderRadius:10.34,
        justifyContent:'center',
        marginHorizontal:15,
        marginTop:30
    },
    stepImage:{
        flex:1,
        flexDirection:'row',       
        marginTop:10,
        backgroundColor:'#FAFAFA', 
    },
    heading:{
        color:'black',
        fontSize:18,
        fontFamily:"SF-Font-Pro",
        fontWeight:'600',
        lineHeight:21.48,
        marginHorizontal:13
    },
    des:{
        width:width*0.9,
        fontFamily:'Poppins',
        fontWeight:'500',
        fontSize:12.5,
        lineHeight:18.75
    },
    imageView:{
        flex:0.98,
        alignItems:'center',
        marginVertical:10
    },
    image:{
        flex:1,
        width:"100%",
        height:"100%",        
        
    },
    appBtn:{
        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:12.51,
        lineHeight:18.76
    },
    arrowIcon:{
        flex:0.2,
        alignItems:'center',
        justifyContent:'center',
        
    }
});