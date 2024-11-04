import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <HStack>
        <VStack borderRadius="xl" boxSize="full" bg="white" padding="4"    >
          <Image  borderRadius="xl" src={imageSrc}/>
            <VStack color="black" display="flex" alignItems="flex-start">
            <Heading>{title}</Heading>
            <Text fontSize="sm" color="gray" noOfLines={2}>{description}</Text>
            <a>See more <FontAwesomeIcon icon={faArrowRight} size="1x"/></a>
          </VStack>
        </VStack>
      </HStack>
  );
};

export default Card;
