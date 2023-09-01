import axios from 'axios';

const iTunesApi = axios.create({
  baseURL: 'https://itunes.apple.com/search',
});

export const searchPodcasts = (term: string) => {
  return iTunesApi.get('', {
    params: {
      term,
      media: 'podcast',
    },
  });
};