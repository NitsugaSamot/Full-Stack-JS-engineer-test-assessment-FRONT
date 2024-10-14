import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';
import { SearchResults } from '../../../types';

interface Props {
    results: (results: SearchResults) => void; 
  }

const SearchBar = ({ results }:Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/search/${searchTerm}`);
      results(response.data);
    } catch (error) {
      console.error('Error al buscar el país:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
      <TextField
        label="Buscar país"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
        sx={{ flexGrow: 1, mr: 1 }} 
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={loading} 
      >
        Buscar
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />} 
    </Box>
  );
};

export default SearchBar;



