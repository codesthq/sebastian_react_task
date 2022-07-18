const addSubBreed = (subBreed: [], breed: string) => {
  return subBreed.map((item: any) => {
    return `${item} ${breed}`;
  });
};

export const transformData = (data: any) => {
  const keys = Object.keys(data);

  return keys.reduce((acc: any, curr: string) => {
    if (data[curr].length > 0) {
      const subBreeds = addSubBreed(data[curr], curr);
      return [...acc, ...subBreeds];
    } else {
      return [...acc, curr];
    }
  }, []);
};
