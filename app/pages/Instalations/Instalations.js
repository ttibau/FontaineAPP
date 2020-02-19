import React from 'react'
import { 
    Container, 
    Instalation,
    InstalationCode,
    InstalationQrCode,
    InstalationInfo,
    InstalationDate,
    InstalationData,
    AcquiredPoints,
    Row
} from './Instalations.styles'
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';


function Instalations() {
    return(
        <Container>
            <Instalation>
                <InstalationCode>
                    A85H7FXYY58
                </InstalationCode>
                <InstalationData>
                    <InstalationInfo>
                        <Row>
                            <Icon name="calendar"/>
                            <InstalationDate bold>
                                Data: <InstalationDate>17/02/2020</InstalationDate>
                            </InstalationDate>
                        </Row>
                        <Row>
                            <Icon name="money" />
                            <AcquiredPoints bold>
                                Pontos: <AcquiredPoints acquired bold>+6542 pontos</AcquiredPoints>
                            </AcquiredPoints>
                        </Row>
                    </InstalationInfo>
                    <InstalationQrCode>
                        <QRCode
                            value="http://awesome.link.qr"
                        />
                    </InstalationQrCode>
                </InstalationData>
            </Instalation>
        </Container>
    )
}

export default Instalations