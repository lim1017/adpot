import { useState, useEffect } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line func-style
    async function requestBreedList() {
      setBreedList([]);
      setLoading(true);

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const data = await res.json();
      localCache[data.animal] = data.breeds || [];
      setBreedList(localCache[animal]);
      setLoading(false);
    }

    if (!animal) setBreedList([]);
    else if (localCache[animal]) setBreedList(localCache[animal]);
    else {
      requestBreedList();
    }
  }, [animal]);
  return {
    breedList,
    loading,
  };
};

export default useBreedList;
