import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Country } from '../../../types';
import PopulationChart from '../Chart/PopulationChart';

interface Props {
  country: Country;
  onClose: () => void; 
}

const CardCountry = ({ country, onClose }: Props) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>{`${country.name}`}</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: 'center' }}>
          <img src={country.flagUrl} alt={`Bandera de ${country.name}`} width="150" />
          <Typography variant="h5" gutterBottom>
            {country.name} ({country.countryCode})
          </Typography>
        </div>

        <Typography variant="h6" gutterBottom>
          Borders
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Oficial Name</TableCell>
                <TableCell>Code Country</TableCell>
                <TableCell>Region</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {country.borders.map((border) => (
                <TableRow key={border.countryCode}>
                  <TableCell>{border.commonName}</TableCell>
                  <TableCell>{border.officialName}</TableCell>
                  <TableCell>{border.countryCode}</TableCell>
                  <TableCell>{border.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <Typography variant="h6" gutterBottom>
            Population over the years
        </Typography> */}
        <PopulationChart populationData={country.populationData} /> 
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Año</TableCell>
                <TableCell>Población</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {country.populationData.length > 0 && (
            <TableRow>
                <TableCell>{country.populationData[country.populationData.length - 1].year}</TableCell>
                <TableCell>{country.populationData[country.populationData.length - 1].value}</TableCell>
            </TableRow>
)}

            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CardCountry;
