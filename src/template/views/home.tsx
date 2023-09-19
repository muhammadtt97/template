import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Import Grid component
import { BasePageProps } from "@src/utils/interface";
import { DEFAULT_LOGO, queryClient } from "@src/utils";
import CourseExamLeaguePublicationWrapper from "@src/components/Layout/Wrapper/CourseExamLeaguePublicationWrapper";
import CourseExamLeaguePublicationHomePage from "@src/components/CourseExamLeaguePublicationHome";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(8, 0),
    textAlign: "center",
    borderRadius: "0 0 20px 20px",
  },
  heroTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textShadow: `2px 2px 4px ${theme.palette.primary.dark}`,
  },
  heroSubtitle: {
    marginBottom: theme.spacing(4),
    fontSize: "1.2rem",
  },
  heroButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  logo: {
    maxWidth: "100%",
    height: "auto",
  },
  // Style for the image
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "20px", // Rounded corners for the image
  },
}));

const Home = () => {
  const classes = useStyles();

  const { cachedData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const { name, logo } = cachedData.centre;

  return (
    <CourseExamLeaguePublicationWrapper
      title={`${name} Academy`}
      description={`Welcome to ${name}`}
      image={logo || DEFAULT_LOGO}
      showHeader={true}
      showFooter={true}
    >
      <div className={classes.hero}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Left column */}
              <Typography variant="h3" className={classes.heroTitle}>
                Welcome to {name} Academy
              </Typography>
              <Typography variant="subtitle1" className={classes.heroSubtitle}>
                Explore our courses, exams, leagues, and publications. Join us on a journey of knowledge!
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.heroButton}
                onClick={() => alert("Button Clicked")}
              >
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Right column with the image */}
              <img
                src="/images/hero-img.png" // Replace with your image path
                alt="School Image"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container maxWidth="md">
        <CourseExamLeaguePublicationHomePage />
      </Container>
    </CourseExamLeaguePublicationWrapper>
  );
};

export default Home;
