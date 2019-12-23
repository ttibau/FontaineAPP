import { createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Login, Profile, Products, Instalations } from '../pages'

const appNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    Profile: {
        screen: createMaterialTopTabNavigator({
            Profile: {
                screen: Profile,
                navigationOptions: {
                    title: 'Perfil'
                }
            },
            Products: {
                screen: Products,
                navigationOptions: {
                    title: 'Produtos'   
                } 
            },
            Instalations: {
                screen: Instalations,
                navigationOptions: {
                    title: 'Minhas instalações'
                }
            }
        }),
        navigationOptions: {
            header: null
        }
    }
})

export default Router = createAppContainer(appNavigator)