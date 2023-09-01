
import axios from "axios";
import { useQuery } from "react-query";
import { List, ListItem } from "@mui/material";
import { usePodcasts } from "../hooks/usePodcasts";

const PopularPodcasts = () => {
    const { isLoading, podcasts, error } = usePodcasts();
    return (
      <List>
        {isLoading ? (
          <ListItem>Loading...</ListItem>
        ) : error ? (
          <ListItem>An error occurred</ListItem>
        ) : (
          podcasts.map((podcast) => (
            <ListItem key={podcast.id}>
              <a href="#">{podcast.trackName}</a>
              <span>{podcast.artistName}</span>
            </ListItem>
          ))
        )}
      </List>
    );
  };
  
  export default PopularPodcasts;