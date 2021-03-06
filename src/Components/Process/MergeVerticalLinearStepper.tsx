import React from 'react';
import { Button, Paper, Step, StepLabel, Stepper, StepContent, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

import mergeSteps, { getMergeStepContent } from '../../assets/data/merge';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '1em',
      backgroundColor: '#282C34',
    },
    button: {
      fontSize: 'smaller',
      padding: '1px 7px',
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      fontSize: 'smaller',
      padding: '1px 7px',
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      fontSize: 'smaller',
      padding: theme.spacing(3),
    },
  }),
);

const MergeVerticalLinearStepper: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {mergeSteps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getMergeStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Précédent
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                    {activeStep === mergeSteps.length - 1 ? 'Terminé' : 'Suivant'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === mergeSteps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Merge Terminé!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default MergeVerticalLinearStepper;
