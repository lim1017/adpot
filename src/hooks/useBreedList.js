import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreed);
  return {
    breedList: results?.data?.breeds ?? [],
    status: results.status,
  };
};

export default useBreedList;
