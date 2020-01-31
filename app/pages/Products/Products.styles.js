import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const PointsCount = styled.Text`
    color: #FFF;
    font-size: 20px;
`

export const ProductContainer = styled.View`
    background-color: #d3d3d3;
    border-radius: 5px;
    padding: 15px;
    margin: 20px;
    width: 40%;
    justify-content: center;
    align-items: center;
`

export const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: 5px;
`

export const ProductTitle = styled.Text`
    font-weight: bold;
    align-self: center;
` 

export const InfoBar = styled.View`
    background-color: #002c77;
    height: 50px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`

export const ProductPrice = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductPriceTxt = styled.Text`
    font-size: 15px;
    margin-left: 10px;
`

export const BtnTrade = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #002c77;
    padding: 5px;
    justify-content: center;
    align-items: center;
`

export const TxtBtnTrade = styled.Text`
    color: white
`