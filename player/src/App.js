import React from 'react';
import { Typography, Container, makeStyles, Paper, Grid, Button } from '@material-ui/core';
import { Synth } from "tone";

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    maxWidth: 500,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

var synth = new Synth().toMaster();

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  synth.triggerAttackRelease("C4", "8n");
}

function App() {
  //create a synth and connect it to the master output (your speakers)
  var synth = new Synth().toMaster();
  
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth={classes.root}>
      {/* <h1>@IsmaelTechNow Noise Toy </h1> */}
      <Typography variant="h1" gutterBottom>
      @IsmaelTechNow Noise Toy
      </Typography>
      <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs>
          <Paper className={classes.paper} ><Button variant="contained" color="primary" onClick={handleClick} >
        Q
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        W
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        E
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        U
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        I
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        O
      </Button></Paper>
        </Grid>
        
      </Grid>
      </div>
      </Container>
    </div>
  );
}

export default App;
