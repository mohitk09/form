import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/styles';

import CardTitle from './title';

const useStyles = makeStyles({
  contentWrapper: {
    padding: '16px 16px !important',
    overflow: 'hidden',
    '& > div:nth-child(2)': {
      padding: 16,
      borderRadius: '0px 0px 4px 4px',
      border: '1px solid #999',
      boxShadow: '0px 0px 1px 0px #999',
      backgroundColor: 'white',
    },
  },
});

function App() {
  const [categoryValue, setCategoryValue] = React.useState('Yes');
  const [selectValue, setSelect] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setCategoryValue(event.target.value);
  };
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };
  const renderConditonalItem = () => {
    if (selectValue === true) {
      return (
        <FormControl style={{ marginTop: 20 }}>
          <FormLabel component="legend">Conditonal Item rendered is RadioGroup</FormLabel>
          <RadioGroup name="Category" value={categoryValue} onChange={handleChange} row>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      );
    } else if (selectValue === false) {
      return (
        <FormControl style={{ marginTop: 20 }}>
          <FormLabel component="legend">Conditonal Item rendered is Checkbox</FormLabel>
          <Checkbox defaultChecked color="primary" />
        </FormControl>
      );
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <h2> Responsive Form</h2>
      </Grid>

      <Grid item md={6} xs={12} classes={{ item: classes.contentWrapper }}>
        <CardTitle title="Input Params" />
        <div>
          <form>
            <div style={{ display: 'flex', alignItems: 'center', width: '60%', marginTop: 20 }}>
              <TextField fullWidth id="standard-basic" label="Index of Label Column" />
              <Tooltip title="Choose the index of the label column please">
                <InfoIcon />
              </Tooltip>
            </div>
            <div style={{ marginTop: 20 }}>
              <FormLabel component="legend">Automatic Cat. Column Flag</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="Category"
                value={categoryValue}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '60%' }}>
              <TextField fullWidth id="standard-basic" label="Categorical Columns" />
              <Tooltip title="Contact system admin for more info">
                <InfoIcon />
              </Tooltip>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item md={6} xs={12} classes={{ item: classes.contentWrapper }}>
        <CardTitle title="Algo Params" />
        <div>
          <form>
            <FormControl style={{ marginTop: 20 }}>
              <FormLabel component="legend">Hyperparameter tuning</FormLabel>
              <Grid container style={{ display: 'flex', alignItems: 'center', width: '132%' }}>
                <Grid item xs={11} fullWidth>
                  <RadioGroup name="Category" value={categoryValue} onChange={handleChange} row>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={1}>
                  <Tooltip title="No idea contact UX designer">
                    <InfoIcon />
                  </Tooltip>
                </Grid>
              </Grid>

              <FormLabel style={{ marginTop: 20 }} component="legend">
                K Fold Flag
              </FormLabel>
              <Grid container style={{ display: 'flex', alignItems: 'center', width: '132%' }}>
                <Grid item xs={11} fullWidth>
                  <RadioGroup name="Category" value={categoryValue} onChange={handleChange} row>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </Grid>
                <Grid item xs={1}>
                  <Tooltip title="No idea contact UX designer">
                    <InfoIcon />
                  </Tooltip>
                </Grid>
              </Grid>
              <div style={{ display: 'flex', alignItems: 'center', width: '130%', marginTop: 20 }}>
                <Select fullWidth value={selectValue} onChange={handleSelect} displayEmpty>
                  <MenuItem value="" disabled>
                    trainTestSplitRandomType
                  </MenuItem>
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>
                <Tooltip title="No idea contact UX designer">
                  <InfoIcon />
                </Tooltip>
              </div>

              {renderConditonalItem()}
              <div style={{ display: 'flex', alignItems: 'center', width: '130%', marginTop: 20 }}>
                <TextField fullWidth id="standard-basic" label="Training Data Percentage" />
                <Tooltip title="Choose the index of the label column please">
                  <InfoIcon />
                </Tooltip>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '130%', marginTop: 20 }}>
                <TextField fullWidth id="standard-basic" label="Text Data Percentage" />
                <Tooltip title="No idea contact UX designer">
                  <InfoIcon />
                </Tooltip>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '130%', marginTop: 20 }}>
                <TextField fullWidth id="standard-basic" label="Maximum Depth of Tree" />
                <Tooltip title="Read about depth of tree please">
                  <InfoIcon />
                </Tooltip>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', width: '130%', marginTop: 20 }}>
                <TextField fullWidth id="standard-basic" label="Maximum number of bins" />
                <Tooltip title="Contact system admin">
                  <InfoIcon />
                </Tooltip>
              </div>
            </FormControl>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
