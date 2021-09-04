import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './style'
const CarItem = (props) => {

    const {name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>
          <ImageBackground  
          source={image}
          style={styles.image}
          />
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline} {' '}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
          </View>


          <View style={styles.buttonsContainer}>
            <StyledButton type="primary" content="Customer Order" onPress={() => {
              console.warn('Customer Button Is pressed')
            }}/>
            <StyledButton type="secondary" content="Exsiting Inventory" onPress={() => {
              console.warn('Exsiting Inventory Modal Button Is pressed')
            }}/>
          </View>
      </View>
    )
}


export default CarItem
