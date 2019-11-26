import React, { useState } from 'react'
import Copy from 'copy-to-clipboard';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Grid, Box, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Utility = () => {

    const checkCopyChange = useStoreState(state => state.copyChangeFromLastTime);
    const checkDownloadChange = useStoreState(state => state.downloadChangeFromLastTime);

    const setChangeToFalse = useStoreActions(actions => actions.setChangeToFalse);

    const binds = useStoreState(state => state.allBinds)
        .map(({ keyCode, binds }) => {
            return `bind "${keyCode}" "${binds.join(' ')}"`
        }).join("\n");

    const allBinds = useStoreState(state => state.allBinds);

    const copyToClipboard = () => {
        Copy(binds);
        setChangeToFalse("copy");
    }

    const downloadBinds = () => {

        let filename = "binds.txt";
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(binds));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

        setChangeToFalse("download");
    }

    return (
        <Grid item xs align='center'>
            <Box mr={3}>

                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<AssignmentIcon />}
                        onClick={() => copyToClipboard()}
                        disabled={allBinds.length > 0 ? false : true}
                    >
                        {checkCopyChange ? "Copy to Clipboard" : "Copied!"}
                    </Button>
                </Box>

                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<DescriptionIcon />}
                        onClick={() => downloadBinds()}
                        disabled={allBinds.length > 0 ? false : true}
                    >
                        {checkDownloadChange ? "Download as txt file" : "Downloading!"}
                    </Button>
                </Box>

                <Box my={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='medium'
                        startIcon={<GitHubIcon />}
                        href="https://github.com/ClassifiedEgg/csgobindsgenerator"
                    >
                        Github
                </Button>
                </Box>

                <Box my={3}>
                    <IconButton color="secondary" aria-label="night mode">
                        <Brightness4Icon fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default Utility;
