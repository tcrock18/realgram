import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'

class Login extends Component {

    login = () => {
        //Navigate to Main Feed here
        this.props.navigation.navigate('register')
    }

    render() {

        return(
            <TouchableOpacity style={{
                height: 100 + '%', 
                width: 100 + '%', 
                justifyContent: 'center', 
                flex: 1, 
                alignItems: 'center'
                }}
                onPress={() => this.login()}
                >
                <Text>
                    New User?
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Login;