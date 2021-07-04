import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './Header';
import MainFeaturedPost from '../FlightBook/MainFeaturedPost';
import FeaturedPost from '../FlightBook/FeaturedPost';
// import Main from '../FlightBook/Main';
import Sidebar from '../FlightBook/Sidebar';
import {useLocation} from "react-router-dom";
import {Paper, Typography, Button} from "@material-ui/core";
import CardAvatar from "../../components/Card/CardAvatar";
import avatar from "../../assets/utils/images/avatars/13.jpg";
import avatar1 from "../../assets/utils/images/avatars/14.jpg"
import CardBody from "../../components/Card/CardBody";
import Card from "../../components/Card/Card";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import homePagePhoto from '../../assets/img/sidebar-2.jpg'
import planePhoto from '../../assets/img/plane.jpeg'
import hotelPhoto from '../../assets/img/hotel.jpeg'
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const mainFeaturedPost = {
    title: "Welcome to Xeelver",
    description:
        "Here you can book flights and hotels",
    image: homePagePhoto,
    imgText: 'main image description',
    // linkText: 'Book now!',
};

const featuredPosts = [
    {
        title: 'Looking for a flight?',
        // date: 'Nov 12',
        description:
            'Book car rent in our App!',
        image: planePhoto ,
        // imageText: 'Book now!',
        url : '/flights/search',
    },
    {
        title: 'Need a hotel?',
        // date: today,
        description:
            'You can book it in our App!',
        image: hotelPhoto,
        imageText: 'Image Text',
        url : '/hotels/search'
    },
];

export default function HomePage() {
    const classes = useStyles();
    const location = useLocation()
    const state = location.state
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    {/*<Grid container spacing={0} className={classes.mainGrid}>*/}
                        {/*<Main title="Main info" state={state} />*/}
                        <Paper >
                            <Typography align='center' variant='h6'  style={{marginTop:'15px',paddingTop:'15px'}}>
                                Project members<br/>
                                <span style={{color:'lightgray'}}>━━━━━━━</span>
                            </Typography>
                            <Grid container spacing={5} style={{marginTop:'15px'}} >
                                <Grid item xs={6} style={{padding:'50px'}}>
                                    <Card profile>
                                        <CardAvatar profile>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img src={avatar1} alt="..." />
                                            </a>
                                        </CardAvatar>
                                        <CardBody profile>
                                            <h6 className={classes.cardCategory}>Xeelver Software Developer</h6>
                                            <h4 className={classes.cardTitle}>Aleksejs Marmiss</h4>
                                            <p className={classes.description}>
                                               Patience is the key
                                            </p>
                                            <IconButton aria-label="delete">
                                                <GitHubIcon/>
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                              <LinkedInIcon/>
                                            </IconButton>
                                        </CardBody>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} style={{padding:'50px'}}>
                                    <Card profile>
                                        <CardAvatar profile>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img src={avatar} alt="..." />
                                            </a>
                                        </CardAvatar>
                                        <CardBody profile>
                                            <h6 className={classes.cardCategory}>Xeelver Software Developer</h6>
                                            <h4 className={classes.cardTitle}>Vjaceslavs Marmiss</h4>
                                            <p className={classes.description}>
                                               Invest in yourself
                                            </p>
                                            <IconButton aria-label="delete">
                                                <GitHubIcon/>
                                            </IconButton>
                                            <IconButton aria-label="delete">
                                                <LinkedInIcon/>
                                            </IconButton>
                                        </CardBody>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                </main>
            </Container>
        </React.Fragment>
    );
}