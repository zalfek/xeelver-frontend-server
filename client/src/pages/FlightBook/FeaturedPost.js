import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    card: {
        display: 'flex',
        borderRadius:'15px',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 220,
    },
});



export default function FeaturedPost(props) {
    const classes = useStyles();
    const { post } = props;
    let history = useHistory();


    function link(props){
        history.push({
            pathname: post.url,
        });
    }


    return (
        <Grid item xs={12} md={6}>
            <CardActionArea onClick={link}>
                <Card className={classes.card} >
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            {/*<Typography variant="subtitle1" color="textSecondary">*/}
                            {/*    {post.date}*/}
                            {/*</Typography>*/}
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                               Click the card and book now!
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
};