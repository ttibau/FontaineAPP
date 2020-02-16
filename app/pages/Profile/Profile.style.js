import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
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
        alignSelf: 'center',
        marginTop: 3
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


export const ProfileImageContent = styled.View`
    justify-content: center;
    align-items: center;
`

export const BlueBar = styled.View`
    background-color: #002c77;
    height: 150px;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`

export const LogoutBtn = styled.TouchableOpacity`
    background-color: #EEEDFF;
    padding: 15px;
    height: 20px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`

export const LogoutTxt = styled.Text`
    color: #002c77;
    font-size: 15px;
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
`

export const ImgLogo = styled.Image`
    width: 160px;
    height: 160px; 
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
    margin-top: 38px; 
    margin-left: 6px;
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
    color: #375993;
    font-size: 15px;
`

export const UserStats = styled.View`
    justify-content: center;
    align-items: center;
`

export const BtnNewInstalation = styled.TouchableOpacity`
    background-color: #002c77;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 20px;
    flex-direction: row;
`

export const BtnLogout = styled.TouchableOpacity`
    background-color: #002c77;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 20px;
    flex-direction: row;
    margin-bottom: 35px;
`

export const BtnNewInstalationTxt = styled.Text`
    color: white;
    margin-left: 10px;
`

export const BtnLogoutTxt = styled.Text`
    color: white;
    margin-left: 10px;
`

export const AccreditedInformation = styled.Text`
    color: #333333;
    font-size: 12px;
`