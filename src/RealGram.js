import React, { Component } from 'react'
import { View } from 'react-native'
import { SwitchNavigator, TabNavigator, StackNavigator } from 'react-navigation'

import { MainFeed, Login, Register, Camera, Profile } from './components/screens'

const Tabs = TabNavigator ({
    Feed: MainFeed,
    Camera: Camera,
    Profile: Profile
})

const IntroStack = StackNavigator ({
    register: Register,
    login: Login
    
})

const MainStack = SwitchNavigator ({
    intro: IntroStack,
    main: Tabs
})

class RealGram extends Component {

    render() {

        return(
            <MainStack />
        )
    }
}

export default RealGram;