import React from 'react';
import {useHistory} from "react-router-dom";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Form} from 'react-final-form';
import {Link} from "react-router-dom";
import {TextField, Checkboxes, Select, DatePicker,} from 'mui-rff';
import {Paper, Grid, Button, MenuItem} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop:16,
    },
}));

export default function Hotels() {
    const classes = useStyles();
    let history = useHistory();

    function onSubmit(values) {

        values.returnDate = new Intl.DateTimeFormat('en-DE').format(values.returnDate).replaceAll('/', '-').split("-").reverse().join("-");
        values.departureDate = new Intl.DateTimeFormat('en-DE').format(values.departureDate).replaceAll('/', '-').split("-").reverse().join("-");
        values.nonStop = values.nonStop.toString()
        history.push({

            pathname: '/hotels/list',
            state: JSON.stringify(values)
        });
    }
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{padding: 16}}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Where are you going?"
                                    name="originLocationCode"
                                    margin="none"
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <DatePicker
                                    name="departureDate"
                                    margin="normal"
                                    label="Check in"
                                    dateFunsUtils={DateFnsUtils}
                                    disablePast={true}
                                    format="dd-MM-yyyy"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <DatePicker
                                    name="returnDate"
                                    margin="normal"
                                    label="Check out"
                                    dateFunsUtils={DateFnsUtils}
                                    disablePast={true}
                                    format="dd-MM-yyyy"
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.grid}>
                                <Select
                                    name="rooms"
                                    label="How many rooms?"
                                    formControlProps={{margin: 'none'}}
                                    margin={16}
                                >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    name="adults"
                                    label="Adults"
                                    formControlProps={{margin: 'none'}}
                                >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    name="children"
                                    label="Children"
                                    formControlProps={{margin: 'none'}}
                                >
                                    <MenuItem value="0">0</MenuItem>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item style={{marginTop: 16}}>
                                <Link to={{
                                    pathname: "/hotels/list",
                                    state: JSON.stringify(values, 2, 0)
                                }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting || pristine}
                                    >
                                        Search
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );


}
