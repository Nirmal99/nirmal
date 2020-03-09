import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Form from '@material-ui/core/Form'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
    multiline: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 200,
        },
      },
    root: {
        width: '100%',
        maxWidth: 500,
      },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="container-fluid">
      <Grid container spacing={3}>
        {/* <Grid item md={5} md-offset={4} > */}
        <Grid item md={5} >
          <Paper className={classes.paper} >
          <Typography variant="h5" style={{textAlign:'center'}} gutterBottom>
        Register Your Product
      </Typography>

      <FormControl className={classes.formControl}>
  <InputLabel htmlFor="name">Name For Product</InputLabel>
  <Input id="name" aria-describedby="my-helper-text" />
</FormControl>
{/* <Divider /> */}
<br />
<FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          //value={}
         // onChange={}
          displayEmpty
          className={classes.selectEmpty}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value='Property for Sale'>Property for Sale</MenuItem>
          <MenuItem value='Property for Rent'>Property for Rent</MenuItem>
          <MenuItem value='Bikes'>Bikes</MenuItem>
          <MenuItem value='Electronics And Home Appliances'>Vehicles</MenuItem>
          <MenuItem value='Mobiles'>Mobiles</MenuItem>
          <MenuItem value="Furniture And Home Decor">Furniture And Home Decor</MenuItem>
          <MenuItem value='Vehicles'>Vehicles</MenuItem>
          <MenuItem value='Animals'>Animals</MenuItem>
          <MenuItem value='Books and Sports'>Books and Sports</MenuItem>
          <MenuItem value='Fashion And Beauty'>Fashion And Beauty</MenuItem>
          <MenuItem value='Kids'>Kids</MenuItem>


        </Select>
        <FormHelperText>Select a Category</FormHelperText>
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
  <InputLabel htmlFor="Price">Price</InputLabel>
  <Input id="Price" aria-describedby="my-helper-text" />
</FormControl>
<br/>
<FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Condition
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          //value={}
         // onChange={}
          displayEmpty
          className={classes.selectEmpty}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value='New'>New</MenuItem>
          <MenuItem value='Used'>Used</MenuItem>



        </Select>

      </FormControl>
      <br />
<FormControl className={classes.formControl}>

      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rowsMax="4"
          cols="3"
        //   value={value}
        //   onChange={handleChange}
        />
        </div>
        </form>
</FormControl> 
<br/>  
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="username">Name</InputLabel>
  <Input id="username" aria-describedby="my-helper-text" />
</FormControl> 
<br/>
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="mobile">Mobile</InputLabel>
  <Input id="mobile" aria-describedby="my-helper-text" />
</FormControl> <br/>
<FormControl className={classes.formControl}>
  <InputLabel htmlFor="address">Address</InputLabel>
  <Input id="address" aria-describedby="my-helper-text" />
</FormControl> <br/>
<br />

<Button variant="contained" size="medium" color="primary" className={classes.margin} fullWidth>
                        Register
        </Button>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
