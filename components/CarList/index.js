import React from 'react'
import styles from './style'
import cars from './cars'
import CarItem from '../CarItem/index'
import {View, FlatList, Dimensions } from 'react-native'
const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList  
            data={cars}
            renderItem={({item}) => <CarItem car={item} /> }
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />

        </View> 
    )
}

export default CarsList
