import { instance } from './client';

export const getRandomImageByBreed = async (breed: string): Promise<string> => {
  const splitBreed = breed.split(' ');
  const isSubBreed = splitBreed.length > 1;

  if (isSubBreed) {
    const { data } = await instance.get(`breed/${splitBreed[0]}/${splitBreed[1]}/images/random`);
    return data.message;
  }

  const { data } = await instance.get(`breed/${splitBreed[0]}/images/random`);
  return data.message;
};
