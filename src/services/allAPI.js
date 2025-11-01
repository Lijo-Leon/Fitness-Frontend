import commonAPI from "./commonAPI";
import { serverURL } from "./serverURLS";

// ADD fitness data (Create)
export const addFitnessDataAPI = async (fitnessData) => {
  return await commonAPI('POST', `${serverURL}/fitness`, fitnessData);
};

// GET all fitness data (Read)
export const getAllFitnessDataAPI = async () => {
  return await commonAPI('GET', `${serverURL}/fitness`, {});
};

// UPDATE fitness data (Update)
export const updateFitnessDataAPI = async (id, updatedData) => {
  return await commonAPI('PUT', `${serverURL}/fitness/${id}`, updatedData);
};

// DELETE fitness data (Delete)
export const deleteFitnessDataAPI = async (id) => {
  return await commonAPI('DELETE', `${serverURL}/fitness/${id}`, {});
};
