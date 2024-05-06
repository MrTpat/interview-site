import React from "react";
import { styled } from '@mui/styles';
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import CloseIcon from "@mui/icons-material/Close";

const PREFIX = 'SideDrawer';

const classes = {
  toolbar: `${PREFIX}-toolbar`
};

const StyledDrawer = styled(Drawer)({
  [`& .${classes.toolbar}`]: {
    minWidth: drawerWidth,
  },
});

const drawerWidth = 240;

function SideDrawer(props) {
  const {  onClose, open } = props;
  return (
    <StyledDrawer anchor="right" open={open} variant="temporary" onClose={onClose}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box
          pl={3}
          pr={3}
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography variant="h6">A Sidedrawer</Typography>
          <IconButton
            onClick={onClose}
            color="primary"
            aria-label="Close Sidedrawer"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
    </StyledDrawer>
  );
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default (SideDrawer);
