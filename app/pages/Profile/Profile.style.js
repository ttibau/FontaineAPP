import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1 
    },
    defaultTxt: {
        fontFamily: 'Amaranth-Regular'
    },
    boldTxt: {
        fontFamily: 'Amaranth-Bold'
    },
    userAnimation: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    barRight: {
        borderRightWidth: 1,
        borderRightColor: '#d3d3d3',
        height: 30,
        margin: 20
    }
})

export const ProfileContainer = styled.View`
    flex: 1;
`

export const Bar = styled.View``

export const BlueBar = styled.View`
    background-color: #002c77;
    height: 190px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`

export const ProfileImageContent = styled.View`
    justify-content: center;
    align-items: center;
`

export const ProfileContent = styled.View`
    justify-content: center;
    align-items: center;
`

export const PictureContainer = styled.View`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border-width: 6px;
    border-color: #FFF;
    position: absolute;
`

export const ProfileImage = styled.Image`
    width: 100px;
    height: 100px;
    bottom: 0;
    margin: 0;
    margin-left: 5px;
`

export const ProfileName = styled.Text`
    color: #333333;
    font-size: 28px;
    margin: 80px 0 0 0;
`

export const ImgLogo = styled.Image`
    width: 80px;
    height: 80px; 
    margin: 20px 0 0 20px;
`

export const ProfileSubtitle = styled.Text`
    font-size: 15px;
    margin-left: 5px;
    margin-top: 0px;
`

export const UserProfileStats = styled.View`
    justify-content: center; 
    align-items: center;
    flex-direction: row;
`

export const UserStatsCount = styled.View`
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 10px;
`
export const UserStatsLabel = styled.View`
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 10px;
`

export const Points = styled.Text`
    color: #FFF;
    font-size: 35px;
    margin-top: 25px;
`

export const PointsSubtitle = styled.Text`
    color: #d3d3d3;
    font-size: 15px;
    margin-top: 60px;
`

export const UserStatsTitle = styled.Text`
    color: #333333;
    font-size: 28px;
    margin-top: 35px;
`

export const DefaultStatsCount = styled.Text`
    color:  #002c77;
    font-size: 20px;
`

export const DefaultStatsLabel = styled.Text`
    color: #008A90;
    font-size: 15px;
`

export const UserStats = styled.View`
    justify-content: center;
    align-items: center
`