import { useEffect, useState } from "react";
import PetList from "./components/PetList/PetList";
import useBreedList from "./hooks/useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("");

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const { breedList } = useBreedList(animal);

  const handleLocationChg = (e) => {
    setLocation(e.target.value);
  };

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  };

  useEffect(() => {
    requestPets();
  }, []);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={handleLocationChg}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
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
          <select
            id="breed"
            disabled={breedList.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
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
