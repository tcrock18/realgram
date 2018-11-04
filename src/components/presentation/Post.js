import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width
        }
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {

        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = 
        this.props.item % 2 === 0 ? 
        "https://lh3.googleusercontent.com/GcGTGLDxurDzUBceTzAp_bdiXNhx5KUIUFn9Uw5VUVvu3VHfCbbXG5iNZosSKcy13u71mAuox8JW0QbSSRhsjUTLeQ" :
        "https://lh3.googleusercontent.com/lPB4VTqs2rkDJv5MUBn7cu9swAEpg1wrUZHXYYcX9efjD63K0N32DSQIIJF-hswYHw8g6H8q2ZjbfHKl9tHGX70O"
        
        const imageUri = 
            imageSelection + 
            "=s" +
            imageHeight + 
            '-c';

            const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)': null;

        return(
            <View style={{ flex: 1, width: 100 + '%'}}>
                <View style={styles.userBar}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        style={styles.userPic}
                        source={{
                            uri: 'https://lh3.googleusercontent.com/MFeczbwJXfe4O1yzPpIjGnBkhUtViIwItWjlztv9qXsXG5Ah15Qp1dFLF51HhAgKgaDHYHXes0vG4hwqLm8dAKJovdE'
                        }}
                        />
                        <Text style={{ marginLeft: 10 }}>Tanner Crockett</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 30 }}>
                            ...
                        </Text>
                    </View>

                </View>
                
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled()
                    }}>
                <Image 
                    style={{ width: this.state.screenWidth, height: 405 }}
                    source={{
                        uri: imageUri
                    }}
                    />
                </TouchableOpacity>
                    <View style={styles.iconBar}>
                        <Image
                            style={[styles.icon, {height: 30, width: 30, tintColor: heartIconColor }]}
                            source={
                                config.images.heartIcon
                            }/>
                            <Image
                            style={[styles.icon, {height: 30, width: 30}]}
                            source={
                                config.images.chatIcon
                            }/>
                            <Image
                            resizeMode="stretch"
                            style={[styles.icon, {height: 30, width: 28}]}
                            source={
                                config.images.arrowIcon
                            }/>
                    </View>
                    <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, {height: 30, width: 30 }]}
                        source={
                            config.images.heartIcon
                        }/>
                    <Text>128 Likes</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%", 
        height: 75, 
        paddingTop: 20,
        backgroundColor:'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"

    },
    userBar: {
        width: 100 + "%", 
        height: config.styleConstants.rowHeight, 
        marginTop: 5,
        marginBottom: 5,
        backgroundColor:'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%", 
        borderColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 10
    }
})

export default Post;