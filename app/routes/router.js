import { createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation-tabs'
import { Profile, Products, Instalations, Login } from '../pages'

const appNavigator = createStackNavigator({
    Login: {
        screen: Login
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
        }, {
            tabBarOptions: {
                labelStyle: {
                  fontSize: 12,
                },
                tabStyle: {
                //   width: 100,
                },
                style: {
                  backgroundColor: '#375993',
                },
              }
        }),
        navigationOptions: {
            header: null
        }
    }
})

export default Router = createAppContainer(appNavigator)