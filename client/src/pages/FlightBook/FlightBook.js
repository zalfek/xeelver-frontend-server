import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import {FlightCard} from "../../components/FlightCard/FlightCard";
import {useLocation} from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


const mainFeaturedPost = {
    // title: <FlightCard/>,
    // description:
    //     "You can book it in our App!",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    // linkText: 'Book now!',
};

const featuredPosts = [
    {
        title: 'Need a car?',
        date: 'Nov 12',
        description:
            'Book car rent in our App!',
        image: 'https://i.imgur.com/Q4oux6P.jpg?1',
        imageText: 'Book now!',
    },
    {
        title: 'Need a hotel?',
        date: 'Nov 11',
        description:
            'You can book it in our App!',
        image: 'https://i.imgur.com/Dc5agDi.jpg',
        imageText: 'Image Text',
    },
];

const sidebar = {
    title: 'Covid-19 Regulations',
    description:
          '',
    archives: [
        { title: ' ◉ Face masks mandatory'},
        { title: ' ◉ Plane deep cleaned daily'},
        { title: ' ◉ Flight crew wearing PPE'},
        { title: ' ◉ Cleaning wipes provided'},
    //     { title: 'October 1999', url: '#' },
    //     { title: 'September 1999', url: '#' },
    //     { title: 'August 1999', url: '#' },
    //     { title: 'July 1999', url: '#' },
    //     { title: 'June 1999', url: '#' },
    //     { title: 'May 1999', url: '#' },
    //     { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

export default function FlightBook() {
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
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="Main info" state={state} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}