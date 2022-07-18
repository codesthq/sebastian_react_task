import type { NextPage } from 'next';
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { getDogBreeds } from '../api/getDogBreeds';
import { useQuery } from 'react-query';
import { transformData } from '../utils/transformData';

import BreedModal from '../components/BreedModal';
import { useState } from 'react';

type Props = {
  dogBreeds: DogBreed[];
};

const Home: NextPage<Props> = (props) => {
  const { data } = useQuery(['dogBreeds'], getDogBreeds, { initialData: props.dogBreeds });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedBreed, setSelectedBreed] = useState('');

  const breeds = transformData(data);

  const onBreedClick = (breed: string) => {
    setSelectedBreed(breed);
    onOpen();
  };

  const onModalClose = () => {
    setSelectedBreed('');
    onClose();
  };

  return (
    <>
      <Flex wrap="wrap" p={8}>
        {breeds.map((breed) => (
          <Button mr={4} mb={4} key={breed}>
            <Text casing={'capitalize'} onClick={() => onBreedClick(breed)}>
              {breed}
            </Text>
          </Button>
        ))}
      </Flex>
      <BreedModal breed={selectedBreed} isOpen={isOpen} onClose={onModalClose} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const dogBreeds = await getDogBreeds();

  return {
    props: { dogBreeds },
  };
};
