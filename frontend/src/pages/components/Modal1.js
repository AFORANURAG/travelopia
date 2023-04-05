import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button
} from "@chakra-ui/react";

 function Modal1({}){
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

 function Modal2({}){
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
export {Modal2}