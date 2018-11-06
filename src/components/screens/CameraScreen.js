import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import {
    Camera,
    Permissions 
} from 'expo'

import config from '../../config'

import Turbo from 'turbo360'

class CameraScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            userId: this.props.navigation.state.params.user
          };
    }
    
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

      takePicture = async () => {
        if(this.camera) {
            const options = { quality: 0.5, base64: true }
            const data = await this.camera.takePictureAsync(options)
            console.log(data)
            const turbo = Turbo({ site_id: '5bdcf2fa25a0bb0013b3b325' })
            turbo.uploadFile({
                uri: data.uri,
                name: 'camera_pic',
                type: 'image/jpeg'
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })

            // const resp = await fetch(
            //     config.baseUrl + 'users/' + this.state.userId + '/photo', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ body: 'test'}),
            // })
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
        return  (
            <View style={styles.container}>
              <Camera 
                style={styles.preview} 
                type={this.state.type}
                ref={ref => {
                    this.camera = ref
                }}>
              </Camera>
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                    onPress={this.takePicture.bind(this)}
                    style={styles.capture}>
                    <Text style={{fontSize: 14}}>Snap</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
})

export default CameraScreen;