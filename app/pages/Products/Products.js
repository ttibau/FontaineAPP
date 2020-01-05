import React from 'react'
import { Container, PointsCount } from './Products.styles'
import { BlueBar } from '../Profile/Profile.style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native'


function Products() {
    return (
        <Container>
            <ScrollView>
                <BlueBar>
                    <PointsCount>123123</PointsCount>
                </BlueBar>
            </ScrollView>
        </Container>
    )
}

export default Products