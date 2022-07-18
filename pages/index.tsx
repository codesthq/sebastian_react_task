import type { NextPage } from 'next';
import { getDogBreeds } from '../api/getDogBreeds';
import { useQuery } from 'react-query';
import { transformData } from '../utils/transformData';

type Props = {
  dogBreeds: DogBreed[];
};

const Home: NextPage<Props> = (props) => {
  const { data } = useQuery(['dogBreeds'], getDogBreeds, { initialData: props.dogBreeds });

  const breeds = transformData(data);

  console.log(breeds);

  return <div></div>;
};

export default Home;

export const getStaticProps = async () => {
  const dogBreeds = await getDogBreeds();

  return {
    props: { dogBreeds },
  };
};
