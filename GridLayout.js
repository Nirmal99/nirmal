import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const product=[{
    name:"lion",
    price:1000
},
{
    name:"lion",
    price:1000
},
{
    name:"lion",
    price:1000
},
{
    name:"lion",
    price:1000
},
{
    name:"lion",
    price:1000
}]

const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
btnmargin: {
    margin: theme.spacing(1),
    // size:100,
  },
rooot: {
    maxWidth: 345,
  },

  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'black'
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item md={4} style={{color:"black",textAlign:"center"}}>
          {/* <Paper className={classes.paper}> */}
          <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $30000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="primary" className="btn-block">
          Buy Now
        </Button>
        
      </CardActions>
    </Card>
          {/* </Paper> */}
        </Grid>
        
      </React.Fragment>
    );
  }

  return (
    <div className="container-fluid">
      <Grid container spacing={5}>
        <Grid container item md={12} spacing={3}>
          {product.map(data=>{
               return (
                <React.Fragment>
                  <Grid item md={4} style={{color:"black",textAlign:"center"}}>
                    {/* <Paper className={classes.paper}> */}
                    <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {data.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button variant="contained" color="primary" className="btn-block">
                    Buy Now
                  </Button>
                  
                </CardActions>
              </Card>
                    {/* </Paper> */}
                  </Grid>
                  
                </React.Fragment>
              )})}
      </Grid>
      </Grid>
    </div>
  );
}
