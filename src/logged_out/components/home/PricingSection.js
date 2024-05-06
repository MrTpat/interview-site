import React from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWidth from "../../../shared/functions/useWidth";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

const packages = [{
    'title': 'Barebones Algorithm Interview',
    'cost': 90,
    'details': ['Hour long coding interview session', 'At most 2 algorithmic questions', 'Professional interviewer'],
    'highlighted': false
}, {
    'title': 'Algorithm Interview with Review',
    'cost': 120,
    'details': ['Hour long coding interview session', '30 minute question review', 'Professional interviewer'],
    'highlighted': true
}, {
    'title': 'Behavioral and Algorithmic Interview With Review',
    'cost': 150,
    'details': ['Hour long coding interview session', '30 minute behavioral interview session', '30 minute question review', 'Professional interviewer'],
    'highlighted': false
}, {
    'title': 'Mock full-day on-site interview',
    'cost': 250,
    'details': ['Hour long coding behavioral interview session', '2 hour long algorithmic coding interview session', 'E-mailed detailed report on interview performance and tips for improvement', 'Professional interviewer'],
    'highlighted': false
}];

function infoToPriceCard(inf) {
    return <PriceCard
	      highlighted={inf.highlighted}
              title={inf.title}
              pricing={<span>${inf.cost}</span>}
              features={inf.details}
	    />;
}

function PricingSection(props) {
  const { classes, theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  // Map over packages array to generate PriceCard components dynamically
  const dynamicComponents = packages.map((inf, index) => {
    const delay = (index * 200).toString();
    return (
      <Grid
        key={index}
        item
        xs={12}
        sm={6}
        lg={3}
        className={classes.cardWrapper}
        data-aos="zoom-in-up"
	data-aos-delay={delay}
      >
        {infoToPriceCard(inf)}
      </Grid>
    );
  });

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Pricing
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width, theme)}
          className={classes.gridContainer}
        >
          {/* Render dynamically generated components */}
          {dynamicComponents}
          {/* Remaining PriceCard components */}
          {/* Add remaining PriceCard components here */}
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(PricingSection);
