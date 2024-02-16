import axios from "axios";

export const getMovie = async (searchTerm: string) => {
  try {
    const apiKey = ""; // Insert your API key here
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        apikey: apiKey,
        t: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
};
