import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../graphql/getLocations";
import { Location } from "../components/Location";

export const LocationsContainer = () => {
  const {
    data: { locations = [] } = {},
    loading,
    error,
  } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      {locations &&
        locations.map((location) => (
          <Location key={location.id} location={location} />
        ))}
    </div>
  );
};
