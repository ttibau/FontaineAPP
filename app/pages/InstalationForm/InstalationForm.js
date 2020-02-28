import React from 'react'
import {
    Container,
    CodeContainer,
    Code,
    DefaultInput,
    FormContainer,
    ImgLogo,
    BtnGroup,
    DefaultBtn,
    DefaultBtnTxt
} from './InstalationForm.styles'
import { 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'

function InstalationForm(props) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <KeyboardAvoidingView>
                        <ImgLogo 
                            source={require('../../assets/img/logo_com_pinguim.png')}
                            resizeMode="contain"
                        />
                        <ScrollView>
                            <CodeContainer>
                                <Code>{props.navigation.state.params.data.data}</Code>
                            </CodeContainer>

                            <FormContainer>
                                <DefaultInput
                                    placeholder="Endereço"
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                />

                                <DefaultInput
                                    placeholder="Modelo"
                                    placeholderTextColor="white"
                                    underlineColorAndroid="white"
                                />
                            </FormContainer>
                            <BtnGroup>
                                <DefaultBtn confirm>
                                    <DefaultBtnTxt confirm>ENVIAR</DefaultBtnTxt>
                                </DefaultBtn>
                                <DefaultBtn onPress={() => props.navigation.navigate('Profile')}>
                                    <DefaultBtnTxt>CANCELAR</DefaultBtnTxt>
                                </DefaultBtn>
                            </BtnGroup>
                        </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}

InstalationForm.navigationOptions = {
    header: null
}

export default InstalationForm