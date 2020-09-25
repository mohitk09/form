import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InfoIcon from '@material-ui/icons/Info';




function App() {

  const [categoryValue, setCategoryValue] = React.useState('Yes');
  
  const handleChange = (event) => {
    setCategoryValue(event.target.value);
  };
  return (
    <div>
    <h1 className="h1"> Dynamic Form</h1>
    <div className="left-div">
      <form>
        <h3> Input Params</h3>
      <FormControl>
        <div>
      <TextField id="standard-basic" label="Index of Label Column" />
      <InfoIcon/>
      </div>
    <FormLabel component="legend">Automatic Cat. Column Flag</FormLabel>
    <RadioGroup aria-label="gender" name="Category" value={categoryValue} onChange={handleChange}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        <div>
        <TextField id="standard-basic" label="Categorical Columns" />
        <InfoIcon/>
        </div>
    </FormControl>
    </form>
    </div>
    <div className ="right-div">
    <form>
        <h3> Algo Params</h3>
      <FormControl>
        <div>
      <TextField id="standard-basic" label="Index of Label Column" />
      <InfoIcon/>
      </div>
    <FormLabel component="legend">Automatic Cat. Column Flag</FormLabel>
    <RadioGroup aria-label="gender" name="Category" value={categoryValue} onChange={handleChange}>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
        <div>
        <TextField id="standard-basic" label="Categorical Columns" />
        <InfoIcon/>
        </div>
    </FormControl>
    </form>
      </div> 
    </div>
  );
}

export default App;
