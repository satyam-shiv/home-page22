import axiosInstance from "./axiosInstance";

interface RequestParam {
  url: string,
  data?: any
}

export const get = async (request: RequestParam) => {
  const {url, data} = request;
  const response = await axiosInstance.get(url)
  return response.data
}