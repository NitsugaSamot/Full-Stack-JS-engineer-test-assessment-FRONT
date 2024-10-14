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

interface Props {
  country: Country;
  onClose: () => void; 
}

const CardCountry = ({ country, onClose }: Props) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>{`Detalles de ${country.name}`}</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: 'center' }}>
          <img src={country.flagUrl} alt={`Bandera de ${country.name}`} width="150" />
          <Typography variant="h5" gutterBottom>
            {country.name} ({country.countryCode})
          </Typography>
        </div>

        <Typography variant="h6" gutterBottom>
          Fronteras
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre Común</TableCell>
                <TableCell>Nombre Oficial</TableCell>
                <TableCell>Código de País</TableCell>
                <TableCell>Región</TableCell>
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

        <Typography variant="h6" gutterBottom>
          Población a lo largo de los años
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Año</TableCell>
                <TableCell>Población</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {country.populationData.map((data) => (
                <TableRow key={data.year}>
                  <TableCell>{data.year}</TableCell>
                  <TableCell>{data.value}</TableCell>
                </TableRow>
              ))}
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
