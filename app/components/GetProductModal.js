import React, { useEffect } from 'react'
import Modal, { ModalContent, ScaleAnimation } from 'react-native-modals';
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { 
    BtnGetProductsModal, 
    TxtGetProductsModal, 
    styles,
    TxtBtnGetProductsModal,
    TxtGetProductsModalBold,
    TxtCurrentPoints,
    GetProductsModalPointsSection,
    TxtDiffPoints,
    Line,
    TxtTotal,
    BtnGroup
} from './styles'
function GetProductModal()  {
    const dispatch = useDispatch()
    let modalVisible = useSelector(state => state.getProductModalVisible)

    return(
        <Modal
            visible={modalVisible}
            onTouchOutside={() =>  dispatch({ type: 'CLOSE_MODAL_GETPRODUCT' })}
            modalAnimation={new ScaleAnimation({
                initialValue: 0,
                useNativeDriver: true,
              })}
            modalStyle={{ margin: 15}}
        >
            <ModalContent>
                <TxtGetProductsModal style={styles.defaultTxt}>
                Tem certeza que deseja trocar  
                    <TxtGetProductsModalBold style={styles.defaultTxt}> 1948 pontos </TxtGetProductsModalBold> pelo item: <TxtGetProductsModalBold style={styles.defaultTxt}>Mala de Ferramentas Tool Center 18</TxtGetProductsModalBold>
                ?
                </TxtGetProductsModal>
                <TxtGetProductsModal center margin10>
                    Pontos: 
                </TxtGetProductsModal>
                <GetProductsModalPointsSection>
                    <TxtCurrentPoints bold>23563</TxtCurrentPoints>
                </GetProductsModalPointsSection>
                <TxtDiffPoints>- 1948</TxtDiffPoints>
                <Line />
                <TxtTotal>21615</TxtTotal>
                <BtnGroup>
                    <BtnGetProductsModal>
                        <TxtBtnGetProductsModal>SIM</TxtBtnGetProductsModal>
                    </BtnGetProductsModal>
                    <BtnGetProductsModal cancel>
                        <TxtBtnGetProductsModal>NÃO</TxtBtnGetProductsModal>
                    </BtnGetProductsModal>
                </BtnGroup>
            </ModalContent>
        </Modal>
    )
}


export default GetProductModal