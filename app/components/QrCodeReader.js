import React from 'react'
import { 
    styles,
    ScannerContent,
    TxtScannerTopContent,
    ScannerBottomContent,
    ImgLogo
} from './styles'
import { ScrollView } from 'react-native'

  import qrCode from '../assets/animations/qrCode.json'
  import QRCodeScanner from 'react-native-qrcode-scanner';
  import LottieView from 'lottie-react-native';

  function QrCodeReader(props){
    const onSuccess = (data) => {
        props.navigation.navigate('InstalationForm', {
            data
        })
    }

    return(
        <ScrollView>
            <QRCodeScanner
            onRead={onSuccess}
            topContent={
                <ScannerContent>
                    <LottieView source={qrCode} autoPlay loop style={styles.qrCodeAnimation} />
                    <TxtScannerTopContent style={styles.defaultTxt} >Direcione sua câmera para o código e aguarde a leitura</TxtScannerTopContent>
                </ScannerContent>
            }
            bottomContent={
                <ScannerBottomContent>
                    <ImgLogo 
                        source={require('../assets/img/logo_com_pinguim.png')}
                        resizeMode="contain"
                    />
                    <TxtScannerTopContent style={styles.defaultTxt}>Trazendo a solução para você!</TxtScannerTopContent>
                </ScannerBottomContent>
            }
            />    
        </ScrollView>
    )
}

QrCodeReader.navigationOptions = {
    header: null
}

export default QrCodeReader