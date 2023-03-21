import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import AuthenForm from '../components/AuthForm/AuthenForm';

export default function homepage() {
  return (
    <Grid container columns={2}>
      <Grid item xs={1}>
        <h1>Dr. Drone :</h1>
        <h3>" Merci de faire partie de l’équipe ! "</h3>
      </Grid>
      <Grid item xs={1}>
        <AuthenForm />
      </Grid>
    </Grid>
  );
}
