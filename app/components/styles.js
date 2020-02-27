import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    defaultTxt: {
        fontFamily: 'Amaranth-Regular'
    },
    coinAnimation: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    qrCodeAnimation: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginLeft: 15
    }
})

export const BtnGetProductsModal = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${props => props.cancel ? '#e74c3c' : '#002c77'};
    margin: 5px;
    border-radius: 8px;
`

export const TxtBtnGetProductsModal = styled.Text`
    color: white; 
`

export const TxtGetProductsModalBold = styled.Text`
    font-weight: bold;
`

export const TxtGetProductsModal = styled.Text`
    align-self: ${props => props.center ? 'center' : 'auto'};
    margin: ${props => props.margin10 ? '10px' : '0px'};
`

export const TxtCurrentPoints = styled.Text`
    margin-top: 10px;
    color: #27ae60;
    font-weight: ${props => props.bold ? 'bold' : '300'};
`

export const TxtDiffPoints = styled.Text`
    color: #e74c3c;
    font-weight: bold;
    align-self: center;
`

export const Line = styled.View`
    border-width: 1px;
    border-color: #d3d3d3;
    width: 40%;
    align-self: center;    
`

export const GetProductsModalPointsSection = styled.Text`
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
`

export const TxtTotal = styled.Text`
    color: #e67e22;
    font-weight: bold;
    align-self: center;
`
export const BtnGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top:10px;
    align-self: center;
`

export const ScannerContent = styled.View`
    background-color: #002c77;
    height: 100%;
    width: 100%;
    align-items: center;
`

export const TxtScannerTopContent = styled.Text`
    color: white;
    align-self: center;
`

export const ScannerBottomContent = styled.View`
    background-color: #002c77;
    width: 100%;
    height: 100%
`

export const ImgLogo = styled.Image`
    width: 160px;
    height: 160px;
    align-self: center;
`