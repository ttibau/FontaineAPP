import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const styles = StyleSheet.create({ 
    
})

export const Container = styled.View`
    flex: 1;
    background-color: #002c77;
`

export const CodeContainer = styled.View`
    padding: 15px;
    background-color: white;
    border-radius:8px;
    align-items: center;
    justify-content: center;
    margin: 15px;
`

export const Code = styled.Text`
    color: #002c77;
    font-weight: bold;
    font-size: 18px;
`

export const DefaultInput = styled.TextInput`
    color: white;
    margin-bottom: 20px;
`

export const FormContainer = styled.View`
    margin: 15px;
`

export const ImgLogo = styled.Image`
    width: 200px;
    height: 200px;
    align-self: center;
`
export const BtnGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`

export const DefaultBtn = styled.TouchableOpacity`
    background-color: ${props => props.confirm ? '#EDEEFF' : '#e74c3c'};
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 0 15px;
`

export const DefaultBtnTxt = styled.Text`
    color: ${props => props.confirm ? '#002c77' : '#FFFFFF'}
`