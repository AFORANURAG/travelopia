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
          <Button onClick={handleModal1Open}>Open Modal 1</Button>
          <Modal isOpen={isModal1Open} onClose={handleModal1Close}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal 1</ModalHeader>
              <ModalBody>
                <p>This is the content of Modal 1.</p>
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
          <Button onClick={handleModal2Open}>Open Modal 1</Button>
          <Modal isOpen={isModal2Open} onClose={handleModal2Close}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal 1</ModalHeader>
              <ModalBody>
                <p>This is the content of Modal 1.</p>
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