import React, { useEffect } from 'react'
import { 
    Container, 
    Instalation,
    InstalationCode,
    InstalationInfo,
    InstalationDate,
    InstalationData,
    AcquiredPoints,
    Row,
    styles
} from './Instalations.styles'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { myInstallations } from '../../services/index'


function Instalations(props) {

    useEffect(() => {
        
    }, [props.navigation])

    return(
        <Container>
            <ScrollView>
                <Instalation>
                    <InstalationCode style={styles.defaultTxt}>
                        NBB89012081891982891892891892891892891298
                    </InstalationCode>
                    <InstalationData>
                        <InstalationInfo>
                            <Row>
                                <Icon name="calendar" style={styles.icon} />
                                <InstalationDate bold style={styles.defaultTxt}>
                                    Data: <InstalationDate style={styles.defaultTxt}>17/02/2020</InstalationDate>
                                </InstalationDate>
                            </Row>
                            <Row>
                                <Icon name="money"  style={styles.icon} />
                                <AcquiredPoints bold style={styles.defaultTxt}>
                                    Pontos: <AcquiredPoints acquired bold style={styles.defaultTxt}>+6542 pontos</AcquiredPoints>
                                </AcquiredPoints>
                            </Row>
                            <Row>
                                <Icon name="map-marker"  style={styles.icon} />
                                <AcquiredPoints bold style={styles.defaultTxt}>
                                    Local: <AcquiredPoints style={styles.defaultTxt}>Rua Marques de Abrantes 168 - Rio de Janeiro</AcquiredPoints>
                                </AcquiredPoints>
                            </Row>
                            <Row>
                                <Icon name="star" style={styles.icon}  />
                                <AcquiredPoints bold style={styles.defaultTxt}>
                                    Modelo: <AcquiredPoints style={styles.defaultTxt}>AR-CONDICIONADO JANELA ELETRÔNICO 127V | 10.000 BTU/H</AcquiredPoints>
                                </AcquiredPoints>
                            </Row>
                        </InstalationInfo>
                    </InstalationData>
                </Instalation>
            </ScrollView>
        </Container>
    )
}

export default Instalations