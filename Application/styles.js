import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get("screen");

export const styles=StyleSheet.create({
  listCard:{
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    // height:height/5,
    alignItems:'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 82.34,
    width:"80%",
    borderRadius:22
  },
  title:{
    fontFamily:"SF-Font-Pro",
    fontSize: 12,
    fontWeight: '700',
    color:'#000000',
    alignItems:'center',
    lineHeight:14.32
  }
});