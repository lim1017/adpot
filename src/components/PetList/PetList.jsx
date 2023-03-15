import Pet from "./Pet";

const PetList = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet, idx) => {
          return (
            <Pet
              key={idx}
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              id={pet.id}
              location={`${pet.city}, ${pet.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default PetList;
