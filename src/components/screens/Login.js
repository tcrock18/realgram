import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import config from '../../config'

class Login extends Component {
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
    login = () => {
        fetch(config.baseUrl + 'login', {
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
                throw new Error(jsonResponse.message)
            }
        })
        .catch(err => {
            alert(JSON.stringify(err.message))
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

                <View style={{alignItems: 'center', marginBottom: 75}}>
                    <Text style={styles.joinText}>RealGram</Text>
                    <Text style={styles.joinText}>Login</Text>
                </View>

                <View>

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
                        this.login()}} 
                    title='Login'/>

                <Button
                    color="#ffffff"
                    onPress={() => this.props.navigation.navigate('register')} 
                    title='New here? Join RealGram!'/>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 300,
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
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})

export default Login;