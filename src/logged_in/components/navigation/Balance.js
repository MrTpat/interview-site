import React from "react";
import { styled } from '@mui/styles';
import PropTypes from "prop-types";
import { OutlinedInput } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import currencyPrettyPrint from "../../../shared/functions/currencyPrettyPrint";

const PREFIX = 'Balance';

const classes = {
  input: `${PREFIX}-input`,
  outlinedInput: `${PREFIX}-outlinedInput`,
  wrapper: `${PREFIX}-wrapper`
};

const Root = styled('div')({
  [`& .${classes.input}`]: { padding: "0px 9px", cursor: "pointer" },
  [`& .${classes.outlinedInput}`]: {
    width: 90,
    height: 40,
    cursor: "pointer",
  },
  [`&.${classes.wrapper}`]: {
    display: "flex",
    alignItems: "center",
  },
});

function Balance(props) {
  const { balance,  openAddBalanceDialog } = props;
  return (
    <Root className={classes.wrapper}>
      <OutlinedInput
        value={balance === null ? "" : currencyPrettyPrint(balance)}
        className={classes.outlinedInput}
        classes={{ input: classes.input }}
        readOnly
        labelWidth={0}
        onClick={openAddBalanceDialog}
      />
    </Root>
  );
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default (Balance);
