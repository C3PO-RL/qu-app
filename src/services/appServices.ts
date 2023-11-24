import axios from "axios";
import { API } from "../appConstants/api";
import { Planet } from "../DTOs/planetTypes";

const client = axios.create({
  baseURL: `${API}`,
});

const appServices = {
  getPlanets: async (): Promise<Planet[]> => {
    return client.get(`/planets`).then((res) => {
      return res.data.results as Planet[];
    });
  },
};

export default appServices;
