import React from "react";
import { styled } from '@mui/styles';
import PropTypes from "prop-types";
import { ListItemText, Button, Toolbar } from "@mui/material";

import withStyles from "@mui/styles/withStyles";

const PREFIX = 'SubscriptionInfo';

const classes = {
  toolbar: `${PREFIX}-toolbar`
};

const StyledToolbar = styled(Toolbar)({
  [`&.${classes.toolbar}`]: {
    justifyContent: "space-between",
  },
});

function SubscriptionInfo(props) {
  const {  openAddBalanceDialog } = props;
  return (
    <StyledToolbar className={classes.toolbar}>
      <ListItemText primary="Status" secondary="Premium Account" />
      <Button
        variant="contained"
        color="secondary"
        onClick={openAddBalanceDialog}
        disableElevation
      >
        Add Balance
      </Button>
    </StyledToolbar>
  );
}

SubscriptionInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default (SubscriptionInfo);
