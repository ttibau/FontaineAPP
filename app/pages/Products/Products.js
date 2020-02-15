import React from 'react'
import { 
    Container, 
    PointsCount, 
    InfoBar, 
    ProductContainer, 
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductPriceTxt,
    BtnTrade,
    TxtBtnTrade
} from './Products.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { GetProductModal } from '../../components/'

function Products() {
    const dispatch = useDispatch()
    return (
        <Container>
            <InfoBar>
                
            </InfoBar>
            <ScrollView>
                {/* DEPOIS VOU REMOVER ESTA VIEW */}
                <View style={{ flexDirection: 'row'}}>
                    <ProductContainer>
                        <ProductImage 
                            source={require('../../assets/img/ferramentas.png')}
                        />
                        <ProductTitle>
                            Mala de Ferramentas Tool Center 18
                        </ProductTitle>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage 
                            source={require('../../assets/img/ferramentas.png')}
                        />
                        <ProductTitle>
                            Mala de Ferramentas Tool Center 18
                        </ProductTitle>
                        <ProductPrice>
                            <Icon name="money" color="#900" size={20} />
                            <ProductPriceTxt>4321 pontos</ProductPriceTxt>
                        </ProductPrice>
                        <BtnTrade onPress={() => dispatch({ type: 'SHOW_MODAL_GETPRODUCT' })}>
                            <TxtBtnTrade>TROCAR</TxtBtnTrade>
                        </BtnTrade>
                    </ProductContainer>
                </View>
            </ScrollView>
            <GetProductModal />
        </Container>
    )
}

export default Products