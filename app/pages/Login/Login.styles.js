import styled from 'styled-components/native'
import { StyleSheet, Dimensions } from 'react-native'
const {height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    linearGradient: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center', 
    },
    container: {
        flex: 1
    },
    txtContent: {
        height: height / 3,
        ...StyleSheet.absoluteFill,
        top: null,
        justifyContent: "center",
        zIndex: -1, 
        opacity: 0
    },
    closeButton: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: "-25%",
        left: width / 2 - 20,
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: 'black', 
        shadowOpacity: 0.2
    }
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

export const ImageBG = styled.Image``

export const ButtonGroup = styled.View`
    height: ${() =>  height / 3}px;
    justify-content: center;
`

export const LoginTextInput = styled.TextInput`
    height: 50px;
    border-radius: 25px;
    border-width: 3px;
    margin: 5px 20px 5px 20px;
    padding-left: 10px;
    border-color: rgba(0,0,0,0.2);
`

export const TxtSignIn = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

export const GestureBtn = styled.View`
    background-color: ${props => props.white ? "transparent" : "white"};
    height: 70px;
    margin: 5px 20px 5px 20px;
    border-radius: 35px;
    align-items: center;
    justify-content: center;    
`

export const GestureBtnTxt = styled.Text`
    font-weight: bold;
    color: ${props => props.white ? "white" : "black"}
`