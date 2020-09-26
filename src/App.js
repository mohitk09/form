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
        <FormControl>
          <FormLabel component="legend">Hyperparameter tuning</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="Category"
            value={categoryValue}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      );
    } else if (selectValue === false) {
      return (
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      );
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Grid container>
        <Grid item md={6} xs={12} classes={{ item: classes.contentWrapper }}>
          <CardTitle title="Input Params" />
          <div>
            <form>
              <div style={{ display: 'flex', alignItems: 'center', width: '70%', marginTop: 20 }}>
                <TextField fullWidth id="standard-basic" label="Index of Label Column" />
                <Tooltip title="Delete">
                  <InfoIcon />
                </Tooltip>
              </div>
              <div style={{ marginTop: 40 }}>
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
              <div style={{ marginTop: 40 }}>
                <TextField id="standard-basic" label="Categorical Columns" />
                <Tooltip title="Delete">
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
              <FormControl>
                <FormLabel component="legend">Hyperparameter tuning</FormLabel>
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
                <FormLabel component="legend">K Fold Flag</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="Category"
                  value={categoryValue}
                  onChange={handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <Select value={selectValue} onChange={handleSelect} displayEmpty>
                  <MenuItem value="" disabled>
                    trainTestSplitRandomType
                  </MenuItem>
                  <MenuItem value={true}>True</MenuItem>
                  <MenuItem value={false}>False</MenuItem>
                </Select>

                {renderConditonalItem()}
                <div>
                  <TextField
                    id="standard-basic"
                    label="Training Data Percentage"
                    className="text-field"
                  />
                  <InfoIcon />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Text Data Percentage"
                    className="text-field"
                  />
                  <InfoIcon />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Maximum Depth of Tree"
                    className="text-field"
                  />
                  <InfoIcon />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Maximum number of bins"
                    className="text-field"
                  />
                  <InfoIcon />
                </div>
              </FormControl>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
