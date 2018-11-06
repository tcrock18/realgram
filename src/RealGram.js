import React, { Component } from 'react'
import { SwitchNavigator, TabNavigator, StackNavigator } from 'react-navigation'

import { MainFeed, Login, Register, CameraScreen, Profile } from './components/screens'

// Navigation from React Navigation

const Tabs = TabNavigator ({
    Feed: MainFeed,
    Camera: CameraScreen,
    Profile: Profile
})

const IntroStack = StackNavigator ({
    login: Login,
    register: Register
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