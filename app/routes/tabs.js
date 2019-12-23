import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Profile } from '../pages'

export const tabNavigator = createTabNavigator({
   Profile: Profile
})