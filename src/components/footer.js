import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
/*import CameraIcon from '@material-ui/core/icons/PhotoCamera';*/
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


  export default function Footer () {
    const classes = useStyles();
    return (
     <React.Fragment>
      <footer className={classes.footer}>
      <Typography className = "text-footer" variant="h5" align="center" gutterBottom>
        Desarrollo realizado por Milton Fernández
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      <span className = "Iconos-footer">
          <a className = "Linkedin" href= "https://www.linkedin.com/in/milton-fernandez-b259111b6/" target ="_blank"><i class="fab fa-linkedin"></i></a>
          <a className = "gitlab" href = "https://gitlab.com/Milton1254" target ="_blank"><i class="fab fa-gitlab"></i></a>
          <a className = "github" href = "https://github.com/MIltonFernandez" target="_blank"><i class="fab fa-github"></i></a>
          </span>
      </Typography>
    </footer>
    </React.Fragment>
        )
}
