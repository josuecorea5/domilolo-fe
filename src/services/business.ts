const APIURL = 'https://domilolo-api.onrender.com/api/v1';

export const getBusinesses = async () => {
  try {
    const response = await fetch(`${APIURL}/businesses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}