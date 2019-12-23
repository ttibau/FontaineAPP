import React from 'react'
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
    AccreditedInformation
} from './Profile.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../config/theme'
import LottieView from 'lottie-react-native';
import user from '../../assets/animations/user.json'
import { ScrollView } from 'react-native'


function Profile(){
    return (
        <ProfileContainer>
            <ScrollView>
                <BlueBar>
                    <Points style={styles.defaultTxt}>
                        178356
                    </Points>
                    <PointsSubtitle style={styles.defaultTxt}>
                        Pontos
                    </PointsSubtitle>
                </BlueBar>
                <ProfileImageContent>
                    <PictureContainer>
                        <LottieView source={user} autoPlay loop style={styles.userAnimation} />
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
                            <DefaultStatsLabel>INSTALAÇÕES</DefaultStatsLabel>
                        </UserStats>
                        <Bar style={styles.barRight} />
                        <UserStats>
                            <DefaultStatsCount style={styles.defaultTxt}>+342</DefaultStatsCount>
                            <DefaultStatsLabel>PONTOS</DefaultStatsLabel>
                        </UserStats>
                    </UserStatsCount>
                    <AccreditedInformation>
                        Credenciado desde: 01/04/2019
                    </AccreditedInformation>
                    <BtnNewInstalation>
                        <Icon name="plus" color={theme.color5} size={15} /> 
                        <BtnNewInstalationTxt>
                            NOVA INSTALAÇÃO
                        </BtnNewInstalationTxt>
                    </BtnNewInstalation>
                </ProfileContent>
            </ScrollView>
        </ProfileContainer>
    )
}

Profile.navigationOptions = {
    header: null
}
export default Profile