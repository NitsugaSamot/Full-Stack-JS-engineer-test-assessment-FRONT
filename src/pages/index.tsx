import React, { useState } from 'react';
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";
import CardCountry from "@/components/CardCountry/CardCountry";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { Country } from '../../types';

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleSearchResults = (results: Country[]) => {
    setCountries(results);
  };

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country); 
  };

  const handleCloseModal = () => {
    setSelectedCountry(null); 
  };

  return (
    <div style={{ padding: '4rem' }}>
      <SearchBar results={handleSearchResults} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {countries.length > 0 ? (
          countries.map((country) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={country.countryCode} onClick={() => handleCountryClick(country)} style={{ cursor: 'pointer' }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{country.name}</Typography>
                  <Typography variant="body2">Code: {country.countryCode}</Typography>
                  <Image src={country.flagUrl} alt={`Bandera de ${country.name}`} width={50} height={30} />
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>Search all you need.</Typography>
        )}
      </Grid>

      {selectedCountry && (
        <CardCountry country={selectedCountry} onClose={handleCloseModal} />
      )}
    </div>
  );
}



