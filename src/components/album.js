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
import Puckie from '../components/img/Puckie.PNG';
import Centro_holistico from '../components/img/Centro_holistico.PNG'
import SGPuckie from '../components/img/sg_puckie.PNG';
import Fade from 'react-reveal/Fade';
import Portfolio from '../components/img/Portfolio.PNG';

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

/*const cards = [1, 2,];*/

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
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


        <Container maxWidth="md">
          {/* End hero unit */}
              <Grid xs={12}>
              <Fade clear>
                <Card className="container-proyects">
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
                     y aumentando las ventas.<br></br>Utilización de
                    HTML, CSS, Boostrap, JS y productos de Google
                    Firebase. Además del hosting y dominios
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>
                  </CardActions>
                </Card>
                </Fade>
              </Grid>
              
              <Fade clear>
              <Grid xs={12}>
                <Card className="container-proyects">
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
                    Firebase. Además del hosting y dominios
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href ="https://sg.puckie.com.ar/" target = "_blank">
                      Ver
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              </Fade>
              <Fade clear>
              <Grid xs={12}>
                <Card className="container-proyects">
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
                    <Button href = "https://conelalmaenlasmanos.netlify.app/index.html" target = "_blank" size="small" color="primary">
                      Ver
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              </Fade>

              <Fade clear>
              <Grid xs={12}>
                <Card className="container-proyects">
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
                      Portfolio personal hecho con React JS, Cloud Firestore, Material UI y Boostrap.<br></br>
                      Proyecto hosteado en Netlify.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              </Fade>
        </Container>
      </main>
    </React.Fragment>
  );
}