import { instance } from './client';

export const getDogBreeds = async () => {
  const { data } = await instance.get('breeds/list/all');

  return data.message;
};
