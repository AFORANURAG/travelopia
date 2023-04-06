import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button
} from "@chakra-ui/react";
export default function Modal2({handleModal2Open,handleModal2Close,isModal2Open}){
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
