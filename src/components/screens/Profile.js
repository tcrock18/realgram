import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

import config from '../../config'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            userId: '5be323caf084ea001481efb2',
            profilePics: []
        }
    }

    componentDidMount() {

        this._navListener = this.props.navigation.addListener('didFocus', () => {
            if(this.props.navigation.state.params) {
                let newPics = Object.assign([], this.state.profilePics)
                newPics.push(this.props.navigation.state.params.newPic)
                this.setState({
                    profilePics: newPics
                })
            }
        })
        
        fetch(`${config.baseUrl}photo?user=${this.state.userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then(jsonResponse => {
            this.setState({profilePics: jsonResponse.data})
        })
        .catch(err => {
            alert(JSON.stringify(err.message))
        })
    }

    componentWillUnmount() {
        this._navListener.remove()
    }

    login = () => {
        //Navigate to Main Feed here
        this.props.navigation.navigate('main')
    }

    render() {

        return(
            <View style={{
                height: 100 + '%', 
                width: 100 + '%', 
                justifyContent: 'center', 
                flex: 1, 
                alignItems: 'center'
                }}
                onPress={() => this.login()}
                >
                <View style={styles.profilePicContainer}>
                {this.state.profilePics.map((pic, i) => {
                    console.log(pic.url)
                    return (
                        <Image
                            key={pic.id} 
                            style={styles.profilePicThumb} 
                            source={{ uri: `${pic.url}=s${config.styleConstants.oneThirdWidth}-c` }}/>
                    )
                })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePicContainer: {
        width: 100 + '%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    profilePicThumb: {
        width: config.styleConstants.oneThirdWidth,
        height: config.styleConstants.oneThirdWidth
    }
})

export default Profile;