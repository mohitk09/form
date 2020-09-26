import React from 'react';
import './App.css';
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

function App() {
  const [categoryValue, setCategoryValue] = React.useState('Yes');
  const [selectValue, setSelect] = React.useState('');

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
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h1> Dynamic Form</h1>
        </Grid>
        <Grid item xs={6} className="left-div">
          <form>
            <h3> Input Params</h3>
            <FormControl>
              <div>
                <TextField id="standard-basic" label="Index of Label Column" />
                <InfoIcon />
              </div>
              <FormLabel component="legend">Automatic Cat. Column Flag</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="Category"
                value={categoryValue}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <div>
                <TextField id="standard-basic" label="Categorical Columns" />
                <InfoIcon />
              </div>
            </FormControl>
          </form>
        </Grid>
        <Grid item xs={6} className="right-div">
          <form>
            <h3> Algo Params</h3>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
