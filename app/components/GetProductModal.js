import React from 'react'
import Modal, { ModalContent, ScaleAnimation } from 'react-native-modals';
import { Text } from 'react-native'
function GetProductModal()  {
    let modalVisible = true
    return(
        <Modal
            visible={modalVisible}
            onTouchOutside={() =>  modalVisible = false}
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