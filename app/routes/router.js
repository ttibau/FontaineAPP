import React from 'react'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs'
import { Profile, Products, Instalations, Login } from '../pages'
import { SafeAreaView, StatusBar } from 'react-native'

function SafeAreaMaterialTopTabBar (props) {
    return (
      <SafeAreaView>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor={'red'}
        /> */}
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    )
  }

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
              },
              tabBarComponent: SafeAreaMaterialTopTabBar
        }),
        navigationOptions: {
            header: null
        }
    }
})

export default Router = createAppContainer(appNavigator)