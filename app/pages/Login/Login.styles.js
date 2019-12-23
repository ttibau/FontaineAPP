import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    linearGradient: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center', 
    },
})

export const LoginViewAnimation = styled.View`
    width: 250px;
    height: 250px;
`

export const LoginInputView = styled.View`
    width:80%;
    background-color: rgba(0,0,0,0.1);
    border-radius:25px;
    height:50px;
    margin-bottom:20px;
    justify-content:center;
    padding:20px;
`

export const TextLogin = styled.TextInput`
    height:50;
    color:#FFF; 
`

export const LoginSubmit = styled.TouchableOpacity`
    height: 50px;
    border-radius: 25px;
    background-color: #002c77;
    padding: 10px;
    width: 140px;
    align-items: center;
    text-align: center;
    justify-content: center;
`

export const TxtLogin = styled.Text`
    color: #FFF;
`