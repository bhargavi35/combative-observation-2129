import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import "./pop.css"
  export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
      <>
        
        <Button className="btn" onClick={onOpen}>Start Order</Button>
        <Text textStyle="subtitle1">{isOpen ? "" : ""}</Text>
        <Text textStyle="subtitle2">{isOpen ? "" : ""}</Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>START YOUR ORDER</ModalHeader>
            <ModalCloseButton />
          

            <ModalBody colorScheme="black">
            <div id="header" >
                <div id="div1">
                    <h2>Start Your Order</h2>
                </div>
                <div id="div2">
                    <a href="Deals.html"><div class="cutSign">&#9587;</div></a>
                </div>
            
           </div>
              <h1> How would you like to receive your order?</h1>
              <div id="section2">
                <div class="div1">
                    <h3>HOW WOULD YOU LIKE TO RECEIVE </h3>
                    <h3>YOUR ORDER?</h3>
                </div>
                <div class="div1">
                    <button>Pick up</button><br/>
                    <button>Dine in</button><br/>
                    <button>Delivery</button><br/>
                </div>
            </div>
                
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
 
  