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

    register = () => {
        // Move baseUrl to secure folder once finished
        // Send credentials to server if signup success
        fetch(config.baseUrl + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        }).then(data => {
            alert(JSON.stringify(data))
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
                backgroundColor: 'rgb(252,61,57)'}}
                onPress={() => this.register()}
                >

                <TextInput
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={text => this.updateText(text, 'email')}
                    placeholder='Email' 
                    style={styles.input}/>
                <TextInput
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, 'password')}
                    secureTextEntry 
                    placeholder='Password' 
                    style={styles.input}/>
                <Button onPress={() => {
                    this.register()
                }} title='Signup'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + '%',
        marginHorizontal: 50,
        backgroundColor: 'rgb(255,255,255)',
        marginBottom: 10
    }
})

export default Register;