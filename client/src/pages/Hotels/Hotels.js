



import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Form} from 'react-final-form';
import {Link} from "react-router-dom";
import {TextField, Checkboxes, Select, DatePicker,} from 'mui-rff';
import {Paper, Grid, Button, MenuItem} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';


export default function Hotels() {

    const [state, setState] = React.useState({
        checkedB: false
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
        if (!state.checkedB) {
            event.returnDate = new Intl.DateTimeFormat('en-DE').format(event.returnDate).replaceAll('/', '-');
        }
    };

    function onSubmit(){}
    function Check() {
        if (!state.checkedB) {
            return (
                <DatePicker
                    name="returnDate"
                    margin="normal"
                    label="Return Date"
                    dateFunsUtils={DateFnsUtils}
                    disablePast={true}
                    format="dd-MM-yyyy"
                    onChangeCapture={onReturnChangeDate}
                />
            );
        } else {
            return null
        }

    }

    const onDepartureChangeDate = async values => {
        values.departureDate = new Intl.DateTimeFormat('en-DE').format(values.departureDate).replaceAll('/', '-');
    };


    const onReturnChangeDate = (values) => {
        // values.nonStop = values.nonStop.toString()
        if (!state.checkedB) {
            values.returnDate = new Intl.DateTimeFormat('en-DE').format(values.returnDate).replaceAll('/', '-');
        } else {
            values.returnDate = undefined;
        }
    };


    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{nonStop: false}}
            // validate={validate}
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
                                    onChangeCapture={onDepartureChangeDate}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Check/>
                            </Grid>
                            <Grid item xs={3}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="checkedB"
                                                color="primary"

                                            />
                                        }
                                        label="One Way"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={3}>
                                <Checkboxes
                                    label="Stops"
                                    name="nonStop"
                                    color='primary'
                                    formControlProps={{margin: 'none'}}
                                    formGroupProps={{row: true}}
                                    data={{label: 'Direct plane', value: 'true'}
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    name="adults"
                                    label="Adults"
                                    formControlProps={{margin: 'none'}}
                                >
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
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item style={{marginTop: 16}}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item style={{marginTop: 16}}>
                                <Link to={{
                                    pathname: "/flights/list",
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
