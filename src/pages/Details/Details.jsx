import { useQuery } from "@tanstack/react-query";
import fetchPet from "../../hooks/fetchPet";
import { useParams } from "react-router";
import Carousel from "../../components/Carousel";
import ErrorBoundry from "../../ErrorBoundry";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">%</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button>Adpot {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

const DetailsWithErrorBoundry = () => {
  return (
    <ErrorBoundry>
      <Details />
    </ErrorBoundry>
  );
};

export default DetailsWithErrorBoundry;
