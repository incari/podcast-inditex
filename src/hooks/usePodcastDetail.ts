// src/hooks/usePodcastDetail.ts
import { useQuery } from 'react-query';
import axios from 'axios';

const getPodcastDetail = async (id:string|undefined) => {
  
  const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}&entity=podcast`);
  return response.data.results[0];
};

const usePodcastDetail = (podcastId:string | undefined) => {
  const { data: podcast, isLoading, isError } = useQuery(['podcast', podcastId], () =>

  getPodcastDetail(podcastId)
  );

  return {
    podcast,
    isLoading,
    isError,
  };
};

export default usePodcastDetail;
