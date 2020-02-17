import React from 'react'
import { 
    Container, 
    Instalation,
    InstalationCode,
    InstalationQrCode,
    InstalationInfo,
    InstalationDate
} from './Instalations.styles'
import QRCode from 'react-native-qrcode-svg';


function Instalations() {
    return(
        <Container>
            <Instalation>
                <InstalationCode>
                    A85H7FXYY58
                </InstalationCode>
                <InstalationQrCode>
                    <QRCode
                        value="http://awesome.link.qr"
                    />
                </InstalationQrCode>
                <InstalationInfo>
                    <InstalationDate bold>
                        Data: <InstalationDate>17/02/2020</InstalationDate>
                    </InstalationDate>
                </InstalationInfo>
            </Instalation>
        </Container>
    )
}

export default Instalations