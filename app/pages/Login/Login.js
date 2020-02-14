import React, { useEffect, useState } from 'react'
import { ImageBG, ButtonGroup, GestureBtn, GestureBtnTxt, LoginTextInput, TxtSignIn, styles } from './Login.styles'
import { View, StyleSheet, Dimensions, TouchableOpacity, Keyboard } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import Svg, { Image, Circle, ClipPath } from 'react-native-svg'
const {
    Value, 
    event, 
    block, 
    cond, 
    eq, 
    set, 
    Clock, 
    startClock, 
    stopClock, 
    debug, 
    timing, 
    clockRunning, 
    interpolate,
    Extrapolate,
    concat
} = Animated

const { width, height } = Dimensions.get('window')

export default function Login(props) {
    const [buttonCloseLogin, setButtonCloseLogin] = useState(true)
    let buttonOpacity = new Value(1)
    // useEffect(() => {
    //     keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    //     keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    // }, [])

    // function keyboardDidShow() {
    //     setButtonCloseLogin(false)
    // }

    // function keyboardDidHide() {
    //     setButtonCloseLogin(true)
    // }

    onStateChange = event([
        {
            nativeEvent:({state}) => block([
                cond(eq(state, State.END), set(buttonOpacity, runTiming(new Clock(), 1, 0))) 
            ])
        }
    ])

    onCloseLoginScene =  event([
        {
            nativeEvent:({state}) => block([
                cond(eq(state, State.END), set(buttonOpacity, runTiming(new Clock(), 0, 1))) 
            ])
        }
    ])

    let buttonY = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    })

    let bgY = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [-height / 3, 0],
        extrapolate: Extrapolate.CLAMP
    })

    let textInputZIndex = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
    })

    let textInputY = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
    })

    let textInputOpacity = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
    })

    let rotateCloseButton = interpolate(buttonOpacity, {
        inputRange: [0, 1], 
        outputRange: [180, 360],
        extrapolate: Extrapolate.CLAMP
    })

    function runTiming(clock, value, dest) {
        const state = {
          finished: new Value(0),
          position: new Value(0),
          time: new Value(0),
          frameTime: new Value(0)
        }
      
        const config = {
          duration: 1000,
          toValue: new Value(0),
          easing: Easing.inOut(Easing.ease)
        }
      
        return block([
          cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, dest),
            startClock(clock)
          ]),
          timing(clock, state, config),
          cond(state.finished, debug('stop clock', stopClock(clock))),
          state.position
        ])
    }

    
    return (
       <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
            <Animated.View style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: bgY }] }}>
                
                <Svg height={height+ 5 } width={width}>
                    <ClipPath id="clip">
                        <Circle 
                            r={height+ 5 }
                            cx={ width / 2}
                        />
                    </ClipPath>
                    <Image 
                        href={require('../../assets/img/bg.jpg')}
                        width={width}
                        height={height+ 5}
                        preserveAspectRatio='xMidYMid slice'
                        clipPath="url(#clip)"
                    />
                </Svg>
            </Animated.View>
            <ButtonGroup>
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View style={{ opacity: buttonOpacity, transform: [{ translateY: buttonY}] }}>
                        <GestureBtn>
                            <GestureBtnTxt>ENTRAR</GestureBtnTxt>
                        </GestureBtn>
                    </Animated.View>
                </TapGestureHandler>
                <Animated.View style={{ opacity: buttonOpacity, transform: [{ translateY: buttonY}]}}>
                    <GestureBtn white>
                        <GestureBtnTxt white>AINDA NÃO TENHO CONTA</GestureBtnTxt>
                    </GestureBtn>
                </Animated.View>
                {/* VIEW DE LOGIN */}
                <Animated.View style={{ 
                    height: height / 3,
                    ...StyleSheet.absoluteFill, 
                    top: null, 
                    justifyContent: "center", 
                    zIndex: textInputZIndex, 
                    opacity: textInputOpacity,
                    transform: [{ translateY: textInputY }]
                }}>

                    {/* {buttonCloseLogin && */}
                        <TapGestureHandler onHandlerStateChange={onCloseLoginScene}>
                            <Animated.View style={styles.closeButton}>
                                {/* SEMPRE QUE CLICAR NO X, DESATIVAR O TERCLADO */}
                                <Animated.Text style={{ 
                                    fontSize: 15, 
                                    transform: [{rotate: concat(rotateCloseButton, 'deg')}]}}>
                                    X
                                </Animated.Text>
                            </Animated.View>
                        </TapGestureHandler>
                    {/* } */}

                    <LoginTextInput 
                      placeholder="LOGIN"
                    />
                    <LoginTextInput 
                      placeholder="SENHA"
                    />

                    <Animated.View>
                        <TouchableOpacity onPress={ () => props.navigation.push('Profile')}>
                            <View style={{ 
                                    shadowOffset: { width: 2, height: 2 }, 
                                    shadowColor: 'black', 
                                    shadowOpacity: 0.2 ,
                                    height: 70,
                                    marginVertical: 5,
                                    marginHorizontal: 20,
                                    borderRadius: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWith: 2,
                                    backgroundColor: '#002c77'
                                }}>
                                <GestureBtnTxt white>ENTRAR</GestureBtnTxt>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </ButtonGroup>    
        </View>
    )
}


Login.navigationOptions = {
    header: null
}