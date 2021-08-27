import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import Planet from './Planet';

const Planets = () => {
  // const { isLoading, error, data } = useQuery('planets', fetchPlanets);

  const { isLoading, error, data, isFetching } = useQuery("planets", () =>
    fetch(
      "https://swapi.dev/api/planets/"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>Planets</h2>
      {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
      <div>{isFetching ? "Updating..." : ""}</div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  );

}

export default Planets;