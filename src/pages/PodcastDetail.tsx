// src/views/PodcastDetailView.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Card, CardContent } from '@mui/material';
import usePodcastDetail from '../hooks/usePodcastDetail';

const PodcastDetail: React.FC = () => {
  const { id } = useParams(); // Get the podcast ID from the URL
  const { podcast, isLoading, isError } = usePodcastDetail(id); 

  if (isLoading) {
    return <Typography variant="h4">Loading Podcast Details...</Typography>;
  }

  if (isError || !podcast) {
    return <Typography variant="h4">Podcast not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h3">{podcast.trackName}</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Podcast Description:</Typography>
          <Typography variant="body1">{podcast.description}</Typography>
          {/* Add more podcast details as needed */}
        </CardContent>
      </Card>
      <Button
        variant="outlined"
        onClick={() => {
          // You can add navigation logic here, for example, back to the search page
        }}
      >
        Back to Search
      </Button>
    </div>
  );
};

export {PodcastDetail};
