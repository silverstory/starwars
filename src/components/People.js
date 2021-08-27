import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import Person from './Person';

const People = () => {
  // const { isLoading, error, data } = useQuery('planets', fetchPlanets);

  const { isLoading, error, data, isFetching } = useQuery("people", () =>
    fetch(
      "https://swapi.dev/api/people/"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>People</h2>
      {data.results.map(person => <Person key={person.name} person={person} />)}
      <div>{isFetching ? "Updating..." : ""}</div>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  );

}

export default People;