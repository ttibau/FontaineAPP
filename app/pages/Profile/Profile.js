import React, { useEffect } from 'react'
import { 
    ProfileContainer, 
    BlueBar,
    ProfileImageContent, 
    PictureContainer,
    ProfileName,
    styles,
    ImgLogo,
    ProfileContent,
    ProfileSubtitle,
    UserProfileStats,
    UserStatsCount,
    Points,
    PointsSubtitle,
    DefaultStatsCount,
    UserStatsTitle,
    Bar,
    UserStatsLabel,
    DefaultStatsLabel,
    UserStats,
    BtnNewInstalation,
    BtnNewInstalationTxt,
    AccreditedInformation,
    LogoutBtn,
    LogoutTxt,
    BtnLogout,
    BtnLogoutTxt
} from './Profile.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../config/theme'
import { ScrollView } from 'react-native'
import { PERMISSIONS, check} from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage'

function Profile(props) {

    async function logout() {
        await AsyncStorage.removeItem('@user')
        props.navigation.navigate('Login')
    }

    useEffect(() => {

    }, [])
    
    return (
        <ProfileContainer>
            <ScrollView>
                <BlueBar>
                    <Points style={styles.defaultTxt}>
                        178356
                    </Points>
                    <PointsSubtitle style={styles.defaultTxt}>
                        pontos
                    </PointsSubtitle>
                </BlueBar>
                <ProfileImageContent>
                    <PictureContainer>
                    </PictureContainer>
                </ProfileImageContent>
                <ProfileContent>
                    <ImgLogo 
                        source={require('../../assets/img/logo1.png')}
                        resizeMode="contain"
                    />
                    <ProfileName style={styles.defaultTxt}>
                        John Doe
                    </ProfileName>
                    <UserProfileStats>
                        <Icon name="star" color={theme.color5} size={15} /> 
                        <ProfileSubtitle style={[styles.boldTxt, { color: theme.color5 }]}>
                            Instalador Ouro
                        </ProfileSubtitle>
                    </UserProfileStats>
                    <UserStatsTitle style={styles.defaultTxt}>
                        Nos últimos 30 dias:
                    </UserStatsTitle>
                    <UserStatsCount>
                        <UserStats>
                            <DefaultStatsCount style={styles.defaultTxt}>+123</DefaultStatsCount>
                            <DefaultStatsLabel style={styles.defaultTxt}>INSTALAÇÕES</DefaultStatsLabel>
                        </UserStats>
                        <Bar style={styles.barRight} />
                        <UserStats>
                            <DefaultStatsCount style={styles.defaultTxt}>+342</DefaultStatsCount>
                            <DefaultStatsLabel style={styles.defaultTxt}>PONTOS</DefaultStatsLabel>
                        </UserStats>
                    </UserStatsCount>
                    <AccreditedInformation style={styles.defaultTxt}>
                        Credenciado desde: 01/04/2019
                    </AccreditedInformation>
                    <BtnNewInstalation onPress={() => props.navigation.navigate('NewInstalation')}>
                        <Icon name="plus" color={theme.color5} size={15} /> 
                        <BtnNewInstalationTxt style={styles.defaultTxt}>
                            NOVA INSTALAÇÃO
                        </BtnNewInstalationTxt>
                    </BtnNewInstalation>
                    <BtnLogout onPress={() => logout()}>
                        <Icon name="sign-out" color={theme.color5} size={15} /> 
                        <BtnLogoutTxt style={styles.defaultTxt}>
                            SAIR
                        </BtnLogoutTxt>
                    </BtnLogout>
                </ProfileContent>
            </ScrollView>
        </ProfileContainer>
    )
}

Profile.navigationOptions = {
    header: null
}
export default Profile