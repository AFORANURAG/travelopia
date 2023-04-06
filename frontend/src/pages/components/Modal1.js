import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button
} from "@chakra-ui/react";

 function Modal1({handleModal1Open,handleModal1Close,isModal1Open}){
    return (
        <> 
          <Modal isOpen={isModal1Open} onClose={handleModal1Close}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Data Saved Successfully</ModalHeader>
              <ModalBody>
                <p>You Data Has been saved successfully, Happy Travel and enjoy your experience.</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleModal1Close}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </>
    )
}

 function Modal2({handleModal2Open,handleModal2Close,isModal2Open}){
    return (
        <>
         
          <Modal isOpen={isModal2Open} onClose={handleModal2Close}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Error</ModalHeader>
              <ModalBody>
                <p>Error while sending the data, Please check your booking details once again and continue</p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleModal2Close}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </>
    )
}
export {Modal2,Modal1}