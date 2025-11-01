import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody
  };

  return await axios(reqConfig);
};

export default commonAPI;
