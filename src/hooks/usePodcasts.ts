import axios from "axios";
import { useQuery } from "react-query";

// Function for fetching podcast data
const fetchPodcastsData = async () => {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/search?media=podcast&entity=podcast&limit=10"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    throw error;
  }
};


const usePodcasts = () => {
  const {isLoading, data, error, isError} = useQuery("podcasts", fetchPodcastsData);

  return {
    isLoading,
    podcasts: data || [], 
    error: isError ? error : null,
  };
};

export { usePodcasts };
