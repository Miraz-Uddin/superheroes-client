import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero);
};
