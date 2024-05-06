import React, { useEffect } from "react";
import { styled } from '@mui/styles';
import PropTypes from "prop-types";
import { List, Divider, Paper } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import SubscriptionTable from "./SubscriptionTable";
import SubscriptionInfo from "./SubscriptionInfo";

const PREFIX = 'Subscription';

const classes = {
  divider: `${PREFIX}-divider`
};

const StyledPaper = styled(Paper)({
  [`& .${classes.divider}`]: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
});

function Subscription(props) {
  const { transactions,  openAddBalanceDialog, selectSubscription } =
    props;

  useEffect(selectSubscription, [selectSubscription]);

  return (
    <StyledPaper>
      <List disablePadding>
        <SubscriptionInfo openAddBalanceDialog={openAddBalanceDialog} />
        <Divider className={classes.divider} />
        <SubscriptionTable transactions={transactions} />
      </List>
    </StyledPaper>
  );
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectSubscription: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default (Subscription);
