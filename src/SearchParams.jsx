import { useState } from "react";
import PetList from "./components/PetList/PetList";
import fetchSearch from "./hooks/fetchSearch";
import useBreedList from "./hooks/useBreedList";
import { useQuery } from "@tanstack/react-query";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export const SearchParams = () => {
  const [animal, setAnimal] = useState(ANIMALS[0]);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const { breedList } = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };

          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" placeholder="location" name="location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="location">
          Breed
          <select id="breed" name="breed" disabled={breedList.length === 0}>
            {breedList.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <PetList pets={pets} />
    </div>
  );
};
