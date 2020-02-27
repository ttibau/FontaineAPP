import React from 'react'
import { styles } from './styles'
import {
    Text,
    TouchableOpacity,
  } from 'react-native';
  
  import QRCodeScanner from 'react-native-qrcode-scanner';

  function QrCodeReader(){
    console.warn(QRCodeScanner.Constants)

    
    const onSuccess = () => {
        console.log('sucesso')
    }
    return(
        <QRCodeScanner
            onRead={onSuccess}
            topContent={
            <Text style={styles.centerText}>
                Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
            }
            bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
            }
        />    
    )
}

export default QrCodeReader