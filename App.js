import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from './component/CustomButton'; 

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productCount : 0
    }    
  } 

  addProduct = () => {
    this.setState({
      'productCount': this.state.productCount + 1
    })
  } 
    
  render() {
    return (
        <View>
          <Text>app</Text>
          <CustomButton onPress={this.addProduct} />
          <Text>{this.state.productCount}</Text>
        </View>
    )
  }
}




