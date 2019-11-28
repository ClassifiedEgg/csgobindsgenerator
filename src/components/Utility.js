import React from 'react';
import Copy from 'copy-to-clipboard';
import { useStoreState, useStoreActions } from 'easy-peasy';
import {
  Grid,
  Box,
  Button,
  IconButton,
  Typography,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green, grey, teal } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Utility = () => {
  const useStyles = makeStyles(theme => ({
    github: {
      color: theme.palette.getContrastText(grey[800]),
      backgroundColor: grey[800],
      '&:hover': {
        backgroundColor: grey[900]
      }
    },
    downloadFalse: {
      color: theme.palette.getContrastText(teal[600]),
      backgroundColor: teal[600],
      '&:hover': {
        backgroundColor: teal[700]
      }
    },
    copyFalse: {
      color: theme.palette.getContrastText(teal[600]),
      backgroundColor: teal[600],
      '&:hover': {
        backgroundColor: teal[700]
      }
    },
    copyDowloadTrue: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[500]
      }
    }
  }));

  const classes = useStyles();

  const checkCopyChange = useStoreState(state => state.copyChangeFromLastTime);
  const checkDownloadChange = useStoreState(
    state => state.downloadChangeFromLastTime
  );
  const currentTheme = useStoreState(state => state.theme);

  const setChangeToFalse = useStoreActions(actions => actions.setChangeToFalse);
  const toggleTheme = useStoreActions(actions => actions.toggleTheme);

  const binds = useStoreState(state => state.allBinds)
    .map(({ keyCode, binds }) => {
      return `bind "${keyCode}" "${binds.join(' ')}"`;
    })
    .join('\n');

  const allBinds = useStoreState(state => state.allBinds);

  const copyToClipboard = () => {
    Copy(binds);
    setChangeToFalse('copy');
  };

  const downloadBinds = () => {
    let filename = 'binds.txt';
    let element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(binds)
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    setChangeToFalse('download');
  };

  return (
    <Grid item xs align='center' container>
      <Box mr={3}>
        <Box my={3}>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            startIcon={<AssignmentIcon />}
            onClick={() => copyToClipboard()}
            disabled={allBinds.length > 0 ? false : true}
            className={
              checkCopyChange ? classes.copyFalse : classes.copyDowloadTrue
            }
          >
            {checkCopyChange ? 'Copy to Clipboard' : 'Copied!'}
          </Button>
        </Box>

        <Box my={3}>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            startIcon={<DescriptionIcon />}
            onClick={() => downloadBinds()}
            disabled={allBinds.length > 0 ? false : true}
            className={
              checkDownloadChange
                ? classes.downloadFalse
                : classes.copyDowloadTrue
            }
          >
            {checkDownloadChange ? 'Download as txt file' : 'Downloading!'}
          </Button>
        </Box>

        <Box my={3}>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            startIcon={<GitHubIcon />}
            className={classes.github}
            href='https://github.com/ClassifiedEgg/csgobindsgenerator'
          >
            Github
          </Button>
            {" "}
          <IconButton
            color='inherit'
            onClick={() => toggleTheme()}
            aria-label='night mode'
          >
            {currentTheme === 'light' ? (
              <Brightness2Icon fontSize='small' />
            ) : (
              <Brightness7Icon fontSize='small' />
            )}
          </IconButton>
        </Box>

        <Typography component='div'>
          <Box fontSize='medium'>
            Icon credits:{' '}
            <Box component='span'>
              <Link
                href='https://www.flaticon.com/free-icon/keyboard-key-with-j-letter_30968?term=keyboard&page=1&position=64'
                color='textSecondary'
              >
                Frepik
              </Link>
            </Box>
            {" "}and{" "}
            <Box component='span'>
              <Link
                href='https://icons8.com/icon/26119/counter-strike'
                color='textSecondary'
              >
                icons8
              </Link>
            </Box>
          </Box>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Utility;
