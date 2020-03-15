import React, {useState, useEffect} from 'react'
import { 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    Keyboard, 
    TouchableWithoutFeedback,
    ActivityIndicator,
} from 'react-native'
import { auth } from '../../services'
import AsyncStorage from '@react-native-community/async-storage'

function NewLogin(props) {

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95}))
    const [opacity] = useState(new Animated.Value(0))
    const [logo] = useState(new Animated.ValueXY({ x: 400, y: 155 }))
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function authenticate() {
        if ( !email || !password) {
            alert('informe email e senha')
        } else {
            try {
                setLoading(true)
                const response = await auth({email, password})
                if (response.data) {
                    await AsyncStorage.setItem('@user', JSON.stringify(response.data))
                    props.navigation.navigate('Profile')
                } else {
                    console.warn('AOD90AIOASOI')
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                alert(error.response.data.error)
            }
        }
    }

    useEffect(() => {

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200
            })
        ]).start()

        verifyIfUserIsAuthenticated()
    }, [])

    async function verifyIfUserIsAuthenticated() {
        const user = await AsyncStorage.getItem('@user')
        if(user)
            props.navigation.navigate('Profile')
    }

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 200,
                duration: 200
            }),
            Animated.timing(logo.y, {
                toValue: 100,
                duration: 200
            })
        ]).start()
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 400,
                duration: 200
            }),
            Animated.timing(logo.y, {
                toValue: 150,
                duration: 200
            })
        ]).start()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
                {loading &&
                <View style={{flex: 1, justifyContent: "center"}} >
                    <ActivityIndicator size='large' />
                </View>
                }
                {!loading && 
                    <KeyboardAvoidingView style={styles.background}>
                        <View style={styles.containerLogo}>
                            <Animated.Image 
                                source={require('../../assets/img/logo_com_pinguim.png')}
                                style={{
                                    maxWidth: '95%',
                                    width: logo.x,
                                    height: logo.y
                                }}
                            />
                        </View>

                        <Animated.View style={[styles.container, {
                            opacity: opacity,
                            transform: [
                                { translateY: offset.y }
                            ]
                        }]}>
                            <TextInput 
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder="E-mail"
                                style={styles.input}
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />

                            <TextInput 
                                autoCorrect={false}
                                autoCapitalize='none'
                                placeholder="Senha"
                                onChangeText={text => setPassword(text)}
                                value={password}
                                style={styles.input}
                                secureTextEntry
                            />

                            <TouchableOpacity style={styles.btnSubmit} onPress={() => authenticate()}>
                                <Text style={styles.btnSubmitTxt}>Acessar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.btnDontHaveAccount}>Ainda não tenho uma conta</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </KeyboardAvoidingView>
                }
            </>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogo: {
        // flex:1,
        justifyContent: 'center',
        marginBottom: 25
    },
    container: {
        // flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: '#D3d3d3',
        width: '90%',
        marginBottom: 15, 
        color: '#002c77',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        backgroundColor: '#002c77',
        padding: 10,
        borderRadius: 7,
        marginBottom: 10,
        marginTop: 10,
        width: '90%',
        alignItems: 'center'
    },
    btnSubmitTxt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnDontHaveAccount: {
        fontWeight: 'bold',
        margin: 20
    }
})

export default NewLogin;

NewLogin.navigationOptions = {
    header: null
}