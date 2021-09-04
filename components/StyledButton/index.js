import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './style'
const StyledButton = (props) => {

    const {type, content, onPress} = props;
    const backgroundColor = type === 'primary' ? '#171A20cc' : 'white'
    const color = type === "primary" ? 'white' : '#171A20'
    return (
        <View style={styles.container}>
            <Pressable 
            style={[styles.button, {backgroundColor}]}
            onPress={onPress}/**Lambda Function */
            >
            <Text style={[styles.text, {color}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
