import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Profile extends Component {

    login = () => {
        //Navigate to Main Feed here
        this.props.navigation.navigate('main')
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
                    Future Profile Page
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Profile;