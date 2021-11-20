import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from '../../config/theme'
import { styles, TextLogin, LoginInputView, LoginViewAnimation, LoginSubmit, TxtLogin }  from './Login.styles'
import penguim from '../../assets/animations/penguim.json'


function Login(props) {
    return (
        <LinearGradient colors={[theme.mainColor, theme.color4]} style={styles.linearGradient}>
            <LoginViewAnimation>
            </LoginViewAnimation>
            <LoginInputView>
                <TextLogin 
                   placeholder="E-mail" 
                   placeholderTextColor="#FFF"
                />
            </LoginInputView>
            <LoginInputView>
                <TextLogin 
                   placeholder="Senha" 
                   placeholderTextColor="#FFF"
                   secureTextEntry={true}
                />
            </LoginInputView>
            <LoginSubmit
                onPress={() => props.navigation.push('Profile')}
            >
                <TxtLogin>Entrar</TxtLogin>
            </LoginSubmit>
        </LinearGradient>
    )
}

Login.navigationOptions = {
    header: null
}

export default Login