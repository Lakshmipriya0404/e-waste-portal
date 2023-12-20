const apiUrl = "http://localhost:8000/"; // Replace with your FastAPI server URL
import axios, { AxiosResponse } from "axios";

export const CheckApi = (): Promise<unknown> => {
  return axios.get(apiUrl);
};
interface FacilityData {
  cname: string;
  address: string;
  email: string;
  phone: string;
  distance: string;
}

export const GetLocations = (
  lat: string,
  long: string,
  pincode: number
): Promise<AxiosResponse<FacilityData[]>> => {
  return axios.get<FacilityData[]>(apiUrl + "producer/nearby_facilities", {
    params: {
      lat: lat,
      long: long,
      pincode: pincode,
    },
  });
};

// export const ProducerSignUp = (pdata: )