import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`
export const Instalation = styled.View`
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 20px;
`

export const InstalationCode = styled.Text`
    font-size: 20px;
    font-weight: bold;
    align-self: center;
`

export const InstalationQrCode = styled.View`
    align-self: flex-end;
`

export const InstalationInfo = styled.View`

`

export const InstalationDate = styled.Text`
    font-weight: ${props => props.bold ? '700' : '300'}
`