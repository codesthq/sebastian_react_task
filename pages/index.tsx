import type { NextPage } from 'next';
import { Button, Flex, Text } from '@chakra-ui/react';
import { getDogBreeds } from '../api/getDogBreeds';
import { useQuery } from 'react-query';
import { transformData } from '../utils/transformData';

type Props = {
  dogBreeds: DogBreed[];
};

const Home: NextPage<Props> = (props) => {
  const { data } = useQuery(['dogBreeds'], getDogBreeds, { initialData: props.dogBreeds });

  const breeds = transformData(data);

  const onBreedClick = (breed: string) => {
    console.log(breed);
  };

  return (
    <Flex wrap="wrap" p={8}>
      {breeds.map((breed) => (
        <Button mr={4} mb={4} key={breed}>
          <Text casing={'capitalize'} onClick={() => onBreedClick(breed)}>
            {breed}
          </Text>
        </Button>
      ))}
    </Flex>
  );
};

export default Home;

export const getStaticProps = async () => {
  const dogBreeds = await getDogBreeds();

  return {
    props: { dogBreeds },
  };
};
