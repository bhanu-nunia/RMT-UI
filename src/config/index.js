let API_BASE_URL = "https://rmt-prod-myprojects-71udda.mo4.mogenius.io";

switch (process.env.REACT_APP_ENV) {
  case "PRODUCTION":
    API_BASE_URL = "https://rmt-prod-myprojects-71udda.mo4.mogenius.io";
    break;
  case "DEVELOPMENT":
    API_BASE_URL = "https://rmt-prod-myprojects-71udda.mo4.mogenius.io";
    break;
  case "LOCAL":
    API_BASE_URL = "http://localhost:5000";
    break;
  default:
    API_BASE_URL = "http://localhost:5000";
}

const getHeader = () => {
  const token = localStorage.getItem("authToken") ? localStorage.getItem("authToken") : "";
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
};

const http = {
  get: async (url) => {
    const res = await fetch(API_BASE_URL + url, {
      headers: getHeader(),
    });
    const resData = await res.json();
    if (res.status != 200) throw resData;
    return resData;
  },
  post: async (url, data) => {
    const res = await fetch(API_BASE_URL + url, {
      method: "POST",
      headers: getHeader(),
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (res.status != 200) throw resData;
    return resData;
  },
  put: async (url, data) => {
    const res = await fetch(API_BASE_URL + url, {
      method: "PUT",
      headers: getHeader(),
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (res.status != 200) throw resData;
    return resData;
  },
  delete: async (url, data) => {
    const res = await fetch(API_BASE_URL + url, {
      method: "DELETE",
      headers: getHeader(),
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (res.status != 200) throw resData;
    return resData;
  },
};

export { http };
