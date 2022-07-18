import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Image from 'next/image';

import { getRandomImageByBreed } from '../../api/getRandomImageByBreed';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
};

const BreedModal = ({ isOpen, onClose, breed }: Props) => {
  const { isLoading, data, refetch } = useQuery(['breedRandomImage', breed], () => getRandomImageByBreed(breed));

  const onButtonClick = () => {
    refetch();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text casing={'capitalize'}>{breed}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={'column'}>
            {isLoading ? (
              <Flex w="full" justify={'center'} h={320}>
                <Spinner />
              </Flex>
            ) : (
              <Image objectFit={'contain'} src={data as string} width={500} height={400} />
            )}
            <Button onClick={onButtonClick} mt={2}>
              Get another photo
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BreedModal;
