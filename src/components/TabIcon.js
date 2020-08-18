import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
  
  
  export default class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
          <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
          <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
        </View>
      );
    }
  }