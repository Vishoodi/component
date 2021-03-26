import React from 'react';
import {Text,View,Animated,useWindowDimensions} from 'react-native';
import {styles} from "./styles";

const Paginator=({data,scrollX})=>{
    const width=useWindowDimensions();

    return(
        <View style={{flexDirection:'row',marginTop:15}}>
            {data.map((_,i)=>{
                console.log(i)
                // const inputRange=[(i-1)*width,i*width,(i+1)*width];
                // console.log(inputRange)
                const dotWidth=scrollX.interpolate({
                    inputRange:[20,30,20],
                    outputRange:[10,20,10],
                    extrapolate:'clamp'
                })
                return <Animated.View style={[styles.dott,{width:10}]} key={i.toString()}/>

            })}

        </View>
    )
}

export default Paginator;