import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import config from '../../config'

class Profile extends Component {
    constructor(){
        super()
    }

    componentDidMount() {
        console.log(this.props.state)
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            if(this.props.navigation.state.params) {
                let newPics = Object.assign([], this.state.profilePics)
                newPics.push(this.props.navigation.state.params.newPic)
                this.setState({
                    profilePics: newPics
                })
            }
        })
        
    //     fetch(`${config.baseUrl}photo?user=${this.props.user.id}`, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then(jsonResponse => {
    //         this.setState({profilePics: jsonResponse.data})
    //     })
    //     .catch(err => {
    //         alert(JSON.stringify(err.message))
    //     })
    }

    componentWillUnmount() {
        this._navListener.remove()
    }

    render() {

        return(
            <ScrollView>
            <View style={{
                height: 100 + '%', 
                width: 100 + '%', 
                justifyContent: 'center', 
                flex: 1, 
                alignItems: 'center',
                paddingTop: 50
                }}
                >
                <View style={styles.profileInfo}>
                    <View style={{flexDirection: 'row', width: 100 + '%'}}>
                        <View style={{flex: 3, height: 100, justifyContent: 'center', alignItems: 'center'}}>
                            <Image 
                            style={styles.userPic}
                            source={{
                                uri: 'https://lh3.googleusercontent.com/MFeczbwJXfe4O1yzPpIjGnBkhUtViIwItWjlztv9qXsXG5Ah15Qp1dFLF51HhAgKgaDHYHXes0vG4hwqLm8dAKJovdE'
                            }}
                            />
                        </View>
                        <View style={{flex: 7, height: 100}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={styles.statCol}>
                                    <Text>128</Text>
                                    <Text>Posts</Text>
                                </View>
                                <View style={styles.statCol}>
                                    <Text>265</Text>
                                    <Text>Followers</Text>
                                </View>
                                <View style={styles.statCol}>
                                    <Text>184</Text>
                                    <Text>Following</Text>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row', 
                                width: 100 + '%', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgb(239, 239, 239)'}}>
                                <Text>Edit Profile</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}></View>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'column', width: 100 + '%'}}>
                        <Text style={styles.fontBold}>Tanner Crockett</Text>
                        <Text style={styles.fontSm}>React Native is cool I guess</Text>
                    </View>
                </View>
                <View style={styles.topBar}>
                    <View style={styles.topBarIcon}></View>
                    <View style={styles.topBarIcon}></View>
                    <View style={styles.topBarIcon}></View>
                    <View style={styles.topBarIcon}></View>
                    <View style={styles.topBarIcon}></View>
                </View>
                <View style={styles.profilePicContainer}>
                {this.props.user.photos.map((pic, i) => {
                    return (
                        <Image
                            key={pic.id} 
                            style={styles.profilePicThumb} 
                            source={{ uri: `${pic.url}=s${config.styleConstants.oneThirdWidth}-c` }}/>
                    )
                })}    
                        
                    
                </View>
            </View>
            </ScrollView>
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
    },
    profileInfo: {
        width: 100 + '%',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 20
    },
    fontBold: {
        fontWeight: 'bold',
        fontSize: 16
    },
    fontSm: {
        fontSize: 16
    },
    userPic: {
        height: 80,
        borderRadius: 40,
        width: 80
    },
    statCol: {
        flexDirection: 'column', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBar: {
        height: config.styleConstants.rowHeight, 
        width: 100 + '%',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(239, 239, 239)',
        flexDirection: 'row'
    },
    topBarIcon: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(239, 239, 239)',
        flex: 1
    }
})

const stateToProps = state => {
    return {
        user: state.account.user
    }
}

const dispatchToProps = dispatch => {
    return {

    }
}

export default connect(stateToProps, dispatchToProps)(Profile);