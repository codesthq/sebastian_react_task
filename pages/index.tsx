import type { NextPage } from 'next';
import { getDogBreeds } from '../api/getDogBreeds';
import { useQuery } from 'react-query';

type Props = {
  dogBreeds: DogBreed[];
};

const Home: NextPage<Props> = (props) => {
  const { data } = useQuery(['dogBreeds'], getDogBreeds, { initialData: props.dogBreeds });

  return <div>test</div>;
};

export default Home;

export const getStaticProps = async () => {
  const dogBreeds = await getDogBreeds();

  return {
    props: { dogBreeds },
  };
};
