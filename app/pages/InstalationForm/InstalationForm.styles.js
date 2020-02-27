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