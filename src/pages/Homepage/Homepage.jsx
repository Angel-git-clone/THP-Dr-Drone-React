import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import AuthenForm from '../../components/AuthForm/AuthenForm';
import './Homepage.css';

export default function homepage() {
  return (
    <Grid container className="Container">
      <Grid item className="TextLeft">
        <div>
          <h1 style={{ fontSize: '25px' }}>Dr. Drone :</h1>
          <h3 style={{ fontSize: '15px' }}>" Merci de faire partie de l’équipe ! "</h3>
        </div>
      </Grid>
      <Grid item className="Form">
        <AuthenForm />
      </Grid>
    </Grid>
  );
}
