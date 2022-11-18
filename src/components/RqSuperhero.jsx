import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hook/useSuperHeroData";

export default function RqSuperhero() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);
  if (isLoading) {
    return <h6>RqSuperhero Data Loading ...</h6>;
  }
  if (isError) {
    return <h6>{error?.message}</h6>;
  }
  return (
    <div>
      <h4>SuperHero: {data?.data?.name}</h4>
      <h6>Movie Character: {data?.data?.alterEgo}</h6>
    </div>
  );
}
