import axios from "axios";
import { URL } from "../constants/database";

const instance = axios.create({
  baseURL: URL,
});

export const getVehicles = () => {
  return instance.get("/vehicle");
};

export const editVehicle = (id, payload) => {
  return instance.put(`/vehicle/${id}`, payload);
};

export const deleteVehicle = (id) => {
  return instance.delete(`/vehicle/${id}`);
};

export const createVehicle = (payload) => {
  return instance.post(`/vehicle`, payload);
};
