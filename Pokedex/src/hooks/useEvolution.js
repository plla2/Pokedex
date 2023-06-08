import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api-fetch";
import { normalizeEvolutionChain } from "../utils/helper";

export const useEvolution = (id) => {
  const { data } = useQuery({
    queryKey: ["chain", id],
    queryFn: async () => {
      try {
        const { evolution_chain } = await apiFetch(`/pokemon-species/${id}/`);

        const res = await fetch(evolution_chain.url);
        const { chain } = await res.json();

        return normalizeEvolutionChain(chain);
      } catch (err) {
        if (err.status === 404) {
          return [];
        }
        throw err;
      }
    },
  });
  return data;
};
