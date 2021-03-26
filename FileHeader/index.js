import React from 'react';
import { Header, Button,Left, Body,Title,Icon} from 'native-base';
import {View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

const FileHeader =({title,navigation})=>{
  return(
    <View style={{borderBottomColor:'black', borderBottomWidth:2}}>
      <Header style={{backgroundColor:'white',shadowColor:'black'}}>
      <Left>
        <Button transparent onPress={()=>navigation.goBack()}>
          <AntDesign name="left" size={19} color="black"  onPress={()=>navigation.navigate("Application")}/>
        </Button>
      </Left>
      <Body style={styles.titleContainer}>
        <Title style={styles.title}>{title}</Title>
      </Body>         
    </Header>
    </View>    
    
  )    
}

export default FileHeader;