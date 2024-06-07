const APIURL = import.meta.env.VITE_URL_API;

export const getBusinesses = async () => {
  try {
    const response = await fetch(`${APIURL}/businesses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}