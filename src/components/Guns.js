import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core';
import Button from './Button'
import { gunList } from '../static/gunlist'

const Guns = () => {
    const renderGunList = () => {
        return gunList.map(({ title, subTypes }, i) => {
            let subTypesBtns = subTypes.map(({ name }, i) => (<Button name={name} key={i} />));

            return (
                <Grid item xs align="center" key={i}>
                    <Typography component='div'>
                        <Box textAlign="center">{title}</Box>
                    </Typography>
                    {subTypesBtns}
                </Grid>
            )
        })
    }
    return (
        <Box mx={5}>
            <Grid container>
                {renderGunList()}
            </Grid>
        </Box>
    )
}

export default Guns;
