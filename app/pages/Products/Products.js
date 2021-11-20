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
    TxtBtnTrade,
    ProductInfo,
    ProductDescription
} from './Products.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { GetProductModal } from '../../components/'
import { styles } from '../../components/styles'

function Products() {
    const dispatch = useDispatch()
    return (
        <Container>
            <InfoBar>
                <PointsCount style={styles.defaultTxt}>23563 pontos</PointsCount>
            </InfoBar>
            <ScrollView>
                <ProductContainer>
                    <ProductImage 
                        source={require('../../assets/img/ferramentas.png')}
                    />
                    <ProductInfo>
                        <ProductTitle style={styles.defaultTxt}>
                            Mala de Ferramentas Tool Center 18
                        </ProductTitle>
                        <ProductPrice>
                            <Icon name="money" color="#002c77" size={20} />
                            <ProductPriceTxt style={styles.defaultTxt}>1948 pontos</ProductPriceTxt>
                        </ProductPrice>
                        <BtnTrade onPress={() => dispatch({ type: 'SHOW_MODAL_GETPRODUCT' })}>
                            <TxtBtnTrade style={styles.defaultTxt}>TROCAR</TxtBtnTrade>
                        </BtnTrade>
                    </ProductInfo>
                </ProductContainer>
                <ProductContainer>
                    <ProductImage 
                        source={require('../../assets/img/ferramentas.png')}
                    />
                    <ProductInfo>
                        <ProductTitle style={styles.defaultTxt}>
                            Mala de Ferramentas Tool Center 18
                        </ProductTitle>
                        <ProductDescription style={styles.defaultTxt}>
                            Mala de ferramentas tool center contendo 18 diferentes adereços para ajudar na instalação dos ar condicionados Fontaine.
                        </ProductDescription>
                        <ProductPrice>
                            <Icon name="money" color="#002c77" size={20} />
                            <ProductPriceTxt style={styles.defaultTxt}>1948 pontos</ProductPriceTxt>
                        </ProductPrice>
                        <BtnTrade onPress={() => dispatch({ type: 'SHOW_MODAL_GETPRODUCT' })}>
                            <TxtBtnTrade style={styles.defaultTxt}>TROCAR</TxtBtnTrade>
                        </BtnTrade>
                    </ProductInfo>
                </ProductContainer>
                <ProductContainer>
                    <ProductImage 
                        source={require('../../assets/img/ferramentas.png')}
                    />
                    <ProductInfo>
                        <ProductTitle style={styles.defaultTxt}>
                            Mala de Ferramentas Tool Center 18
                        </ProductTitle>
                        <ProductPrice>
                            <Icon name="money" color="#002c77" size={20} />
                            <ProductPriceTxt style={styles.defaultTxt}>1948 pontos</ProductPriceTxt>
                        </ProductPrice>
                        <BtnTrade onPress={() => dispatch({ type: 'SHOW_MODAL_GETPRODUCT' })}>
                            <TxtBtnTrade style={styles.defaultTxt}>TROCAR</TxtBtnTrade>
                        </BtnTrade>
                    </ProductInfo>
                </ProductContainer>
            </ScrollView>
            <GetProductModal />
        </Container>
    )
}

export default Products