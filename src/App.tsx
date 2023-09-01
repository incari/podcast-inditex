
import { Podcasts } from '@mui/icons-material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PodcastDetail} from './pages/PodcastDetail';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Podcasts/>} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
      </Routes>
    </Router>
  );
};

export default App;