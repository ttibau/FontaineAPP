import React, { useEffect } from 'react'
import Modal, { ModalContent, ScaleAnimation } from 'react-native-modals';
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

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
        >
            <ModalContent>
              <Text>adsf</Text>
            </ModalContent>
        </Modal>
    )
}


export default GetProductModal