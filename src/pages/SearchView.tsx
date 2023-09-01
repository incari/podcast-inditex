import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { searchPodcasts } from '../api/itunes';

const SearchView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchPodcasts(searchTerm);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching podcast data:', error);
    }
  };

  return (
    <div>
      <TextField
        label="Search for Podcasts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <Grid container spacing={2}>
        {/* Render podcast results here */}
      </Grid>
    </div>
  );
};

export default SearchView;