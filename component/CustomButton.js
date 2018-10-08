import React from 'react';
import { Button, Text } from 'react-native';

const CustomButton = (props) => {
    return (
        <Button title="Add Product"
        onPress={()=> props.onPress()}    
        />
    );
}

export default CustomButton; 