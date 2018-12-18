import React from 'react'
import {Modal, View, Text, Button, StyleSheet, Image} from 'react-native'

const CountryDetail = ({country, onModalClose}) => {

  let modalContent = null

  if(country){
    modalContent = (
      <>
      <Text style={styles.name}>{country.name}</Text>
      <Text style={styles.subContent}>Capital: {country.capital}</Text>
      <Text style={styles.subContent}>Population: {country.population}</Text>
      <Image source={country.flag}/>
      </>
    )
  }

  return (
    <Modal visible={country !== null}>
      <View style={styles.modalContainer}>
        {modalContent}
      </View>
      <Button title='Close' onPress={onModalClose}/>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 40,
    margin: 50
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  subContent: {
    fontSize: 20,
    textAlign: 'center'

  }
})

export default CountryDetail


