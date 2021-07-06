import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { Button, Paper, Step, StepLabel, StepContent, Stepper, Typography, makeStyles, createStyles } from '@material-ui/core';

import hotfixSteps, { getHotfixStepContent } from '../../assets/data/hotfix';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '1em',
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

const HotfixVerticalLinearStepper: React.FC = () => {
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
        {hotfixSteps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getHotfixStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Précédent
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                    {activeStep === hotfixSteps.length - 1 ? 'Terminé' : 'Suivant'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === hotfixSteps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Hotfix Terminé!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default HotfixVerticalLinearStepper;
