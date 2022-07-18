import { instance } from './client';

export const getImageByBreed = async (breed: string) => {
  const { data } = await instance.get(`breed/${breed}/images`);

  return data;
};
