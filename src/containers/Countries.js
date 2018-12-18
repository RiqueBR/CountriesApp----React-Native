import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CountriesList from '../components/CountriesList'
import CountryDetail from '../components/CountryDetail'

class Countries extends Component {
  constructor(){
    super();
    this.state = {
      countries: [],
      selectedCountry: null
    }
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => this.setState({countries: data}))
  }

  handleItemPressed = (index) => {
    const selectedCountry = this.state.countries[index]
    this.setState({selectedCountry})
  }

  modalCloseHandler = () => {
    this.setState({selectedCountry: null})
  }

  render(){
    return (
      <View style={styles.container}>
      <CountriesList
        countries={this.state.countries}
        onItemPressed={this.handleItemPressed} />
        <CountryDetail
          country={this.state.selectedCountry}
          onModalClose={this.modalCloseHandler}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
})

export default Countries;

