import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
/*import CameraIcon from '@material-ui/core/icons/PhotoCamera';*/
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import Portfolio from '../components/img/Portfolio.PNG';
import SGPuckie from '../components/img/sg_puckie.PNG';
import Puckie from '../components/img/Puckie.PNG';
import Centro_holistico from '../components/img/Centro_holistico.PNG'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2rem',
  },
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <main>
    <div className={classes.heroContent}>
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Proyectos
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Una muestra de mi experiencia en el desarrollo web
      </Typography>
    </Container>
    </div>

    <div className={classes.root}>
      <Grid container spacing={3}>

          <Grid item xs={12} md ={6}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image = {Puckie}
                      title="Puckie"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Puckie
                      </Typography>
                      <Typography>
                      Web de publicidad de producto, facilitando la llegada de clientes
                      y aumentando las ventas. También cuenta con un formulario de contacto.<br></br>Utilización de
                      HTML, CSS, Boostrap, JS, además del hosting y dominios.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <span className = "Iconos-proyects">
                      <a className = "gitlab" href = "https://puckie.com.ar/" target ="_blank"><i class="fas fa-external-link-square-alt"></i></a>
                      <a className = "gitlab" href = "https://gitlab.com/etrr/1420-tel/2020/web/puckie" target ="_blank"><i class="fab fa-gitlab"></i></a>
                      </span>
                    </CardActions>
                  </Card>
          </Grid>

          <Grid item xs={12} md ={6}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image = {SGPuckie}
                      title="Sistema de gestión Puckie"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sistema de gestión de Puckie
                      </Typography>
                      <Typography>
                      Web de sistema de gestión, facilitando el registro de 
                      compra de materiales y ventas de productos.<br></br> Utilización de
                      HTML, CSS, Boostrap, JS y productos de Google
                      Firebase (authentication y realtime database), además del hosting y dominios
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <span className = "Iconos-proyects">
                      <a className = "gitlab" href = "https://sg.puckie.com.ar/" target ="_blank"><i class="fas fa-external-link-square-alt"></i></a>
                      <a className = "gitlab" href = "https://gitlab.com/etrr/1420-tel/2020/web/puckie" target ="_blank"><i class="fab fa-gitlab"></i></a>
                      </span>
                    </CardActions>
                  </Card>
          </Grid>

          <Grid item xs={12} md ={6}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image = {Centro_holistico}
                      title="Centro holistico"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Centro holístico
                      </Typography>
                      <Typography>
                      Desarrollo entre 2 personas de una pagina web para un
                      centro holístico con el objetivo de mostrar distintos
                      cursos, talleres y terapias alternativas con sus
                      características. <br></br>Utilización de base de datos NoSQL,
                      almacenamiento en Google Firebase. Uso de HTML, CSS,
                      JS. 
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <span className = "Iconos-proyects">
                      <a className = "rosa" href = "https://conelalmaenlasmanos.netlify.app/index.html" target ="_blank"><i class="fas fa-external-link-square-alt"></i></a>
                      <a className = "gitlab" href = "https://gitlab.com/etrr/1420-tel/2020/web/puckie" target ="_blank"><i class="fab fa-gitlab"></i></a>
                      </span>
                    </CardActions>
                  </Card>
          </Grid>

          <Grid item xs={12} md ={6}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image = {Portfolio}
                      title="Portfolio"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Portfolio
                      </Typography>
                      <Typography>
                        Portfolio web personal hecho con React JS, Firebase Cloud Firestore, Material UI y Boostrap.
                        Proyecto hosteado en Netlify, el dominio fue adquirido en my.freenom.com.<br></br>
                        Desde aquí podrás ver mi CV, contactarme o conocer más sobre mi. 
                      </Typography>
                      <CardActions>
                      <span className = "Iconos-proyects">
                      <a className = "github" href = "https://github.com/MIltonFernandez/Porfolio-Proyect-1.0" target ="_blank"><i class="fab fa-github"></i></a>
                      </span>
                    </CardActions>
                    </CardContent>
                  </Card>
          </Grid>

        

    </Grid>
    </div>

    </main>
    </React.Fragment>
  );
}