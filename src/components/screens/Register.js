import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'

// move URL to secure folder once finished
import config from '../../config'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        }
    }

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials)
        newCredentials[field] = text
        this.setState({
            credentials: newCredentials
        })
    }

    // Send credentials to server if signup success
    register = () => {
        fetch(config.baseUrl + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then((response) => response.json())
        .then(jsonResponse => {
            if(jsonResponse.confirmation==='success') {
                this.props.navigation.navigate('main')
            } else{
                throw new Error({message: 'Sorry, something went wrong. Please try again'})
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    render() {

        return(
            <View 
                style={{
                height: 100 + '%', 
                width: 100 + '%', 
                justifyContent: 'center', 
                flex: 1, 
                alignItems: 'center',
                backgroundColor: 'rgb(112,128,144)'}}
                onPress={() => this.register()}
                >

                <View>
                    <Text style={styles.joinText}>Join RealGram</Text>
                </View>

                <TextInput
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={text => this.updateText(text, 'email')}
                    placeholder='Email' 
                    style={styles.input}/>
                <TextInput
                    autoCapitalize='none'
                    placeholderTextColor='black'
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, 'password')}
                    secureTextEntry 
                    placeholder='Password' 
                    style={styles.input}/>
                <Button
                    color="#000000"
                    onPress={() => {
                        this.register()}} 
                    title='Signup'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 85 + '%',
        paddingHorizontal: 20,
        backgroundColor: 'rgb(255,255,255)',
        marginBottom: 10,
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1,
        color: 'black'
    },
    joinText: {
        fontSize: 40,
        paddingBottom: 50,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#ffffff',
        textShadowOffset: {width: .1, height: .1},
        textShadowRadius: 10
    }
})

export default Register;