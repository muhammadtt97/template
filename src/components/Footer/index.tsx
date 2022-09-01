import React, { Fragment } from "react";
// next components
import Image from "next/image";
import NextLink from "next/link";
//
import useGlobalStyle from "@src/styles/index";
// mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//
import EastIcon from "@mui/icons-material/East";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//
import { grey } from "@mui/material/colors";

//
import { Link as MuiLink } from "@mui/material";
import { FooterFunc } from "./interfaceType";

const Footer: FooterFunc = () => {
  const globalStyle = useGlobalStyle();

  return (
    <Fragment>
      <Box component="footer" sx={{ py: 8, px: { md: 6 } }} className="">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} order={{ xs: 3, md: 1 }}>
              <div className="">
                <NextLink href="/" passHref>
                  <MuiLink sx={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/images/logo.png"
                      alt="Contentionary logo"
                      width={210}
                      height={40}
                    />
                  </MuiLink>
                </NextLink>
              </div>
              <Box py={2}>
                <Typography variant="h6" gutterBottom>
                  Nigeria Office:
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Address 1:
                </Typography>
                <Typography paragraph gutterBottom>
                  38 Opebi Road, Ikeja, Lagos State, Nigeria.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Address 2:
                </Typography>
                <Typography paragraph gutterBottom>
                  35 Sobo Arobiodu Street, GRA Ikeja Lagos Nigeria.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  TelePhone:
                </Typography>
                <NextLink href={"tel:+2349022396389"} passHref>
                  <MuiLink>+234 902 239 6389</MuiLink>
                </NextLink>
                <Typography mt={4} variant="h6" gutterBottom>
                  United Kingdom Office
                </Typography>
                <Typography paragraph gutterBottom>
                  Longside Lane, Longside House, Bradford, United Kingdom.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  TelePhone:
                </Typography>
                <NextLink href={"tel:+447754601138"} passHref>
                  <MuiLink>+44 7754 601138</MuiLink>
                </NextLink>
                <Typography mt={4} variant="h6" gutterBottom>
                  Contact Email
                </Typography>
                <NextLink href={"mailto:contact@contentionary.com"} passHref>
                  <MuiLink>contact@contentionary.com</MuiLink>
                </NextLink>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} order={{ xs: 1, md: 2 }}>
              <Stack spacing={1}>
                <Typography variant="h6" gutterBottom>
                  Company
                </Typography>
                <NextLink href="https://web.contentionary.com/about" passHref>
                  <MuiLink underline="hover" color="inherit">
                    About us
                  </MuiLink>
                </NextLink>
                <NextLink
                  href="https://web.contentionary.com/features"
                  passHref
                >
                  <MuiLink underline="hover" color="inherit">
                    Features
                  </MuiLink>
                </NextLink>
                <NextLink href="https://web.contentionary.com/pricing" passHref>
                  <MuiLink underline="hover" color="inherit">
                    Pricing
                  </MuiLink>
                </NextLink>
              </Stack>
              <Stack spacing={1}>
                <Typography mt={3} variant="h6" gutterBottom>
                  Legal
                </Typography>
                <NextLink
                  href="https://web.contentionary.com/privacy-policy"
                  passHref
                >
                  <MuiLink underline="hover" color="inherit">
                    Privacy Policy
                  </MuiLink>
                </NextLink>
                <NextLink
                  href="https://web.contentionary.com/intellectual-property"
                  passHref
                >
                  <MuiLink underline="hover" color="inherit">
                    Intellectual Property
                  </MuiLink>
                </NextLink>
                <NextLink
                  href="https://web.contentionary.com/terms-of-service"
                  passHref
                >
                  <MuiLink underline="hover" color="inherit">
                    Terms of use
                  </MuiLink>
                </NextLink>
              </Stack>
            </Grid>
            <Grid item xs={6} md={2} order={{ xs: 2, md: 3 }}>
              <Stack spacing={1}>
                <Typography variant="h6" gutterBottom>
                  General
                </Typography>
                <NextLink
                  href="https://web.contentionary.com/create-account"
                  passHref
                >
                  <MuiLink underline="hover" color="inherit">
                    Sign up
                  </MuiLink>
                </NextLink>
                <NextLink href="https://web.contentionary.com/login" passHref>
                  <MuiLink underline="hover" color="inherit">
                    Developer’s tools
                  </MuiLink>
                </NextLink>
                <NextLink href="https://web.contentionary.com/login" passHref>
                  <MuiLink underline="hover" color="inherit">
                    Create a centre
                  </MuiLink>
                </NextLink>
                <NextLink
                  href="https://web.contentionary.com/market-place"
                  passHref
                >
                  <MuiLink underline="hover" target="_blank" color="inherit">
                    Marketplace
                  </MuiLink>
                </NextLink>
                <NextLink href="https://medium.com/@contentionary" passHref>
                  <MuiLink underline="hover" target="_blank" color="inherit">
                    Blog
                  </MuiLink>
                </NextLink>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} order={{ xs: 4, md: 4 }}>
              <Typography variant="h6" gutterBottom>
                Social follows
              </Typography>
              <Stack direction="row" spacing={1}>
                <NextLink
                  href="https://web.facebook.com/contentionary/"
                  passHref
                >
                  <IconButton
                    size="small"
                    target="_blank"
                    className={globalStyle.appIconButton}
                    component={MuiLink}
                  >
                    <FacebookIcon />
                  </IconButton>
                </NextLink>
                <NextLink
                  href="https://www.linkedin.com/company/contentionary/"
                  passHref
                >
                  <IconButton
                    size="small"
                    target="_blank"
                    className={globalStyle.appIconButton}
                    component={MuiLink}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </NextLink>
                <NextLink
                  href="https://www.youtube.com/channel/UCTjpCZ29ZTeG6HuwHLRURFw"
                  passHref
                >
                  <IconButton
                    size="small"
                    target="_blank"
                    className={globalStyle.appIconButton}
                    component={MuiLink}
                  >
                    <YouTubeIcon />
                  </IconButton>
                </NextLink>
                <NextLink href="https://twitter.com/Contentionary/" passHref>
                  <IconButton
                    size="small"
                    target="_blank"
                    className={globalStyle.appIconButton}
                    component={MuiLink}
                  >
                    <TwitterIcon />
                  </IconButton>
                </NextLink>
              </Stack>
              <Typography mt={4} variant="h6" gutterBottom>
                Be the first to hear from us
              </Typography>
              <Paper
                component="form"
                elevation={0}
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  maxWidth: 400,
                }}
              >
                <InputBase
                  sx={{
                    p: "6px 10px",
                    flex: 1,
                    bgcolor: grey[100],
                    borderRadius: "4px 0 0 4px !important",
                  }}
                  placeholder="Email Address"
                  inputProps={{ "aria-label": "Email Address" }}
                />
                <IconButton
                  type="button"
                  sx={{
                    py: "10px",
                    px: "14px",
                    borderRadius: "0 4px 4px 0 !important",
                  }}
                  className={globalStyle.appIconButton}
                >
                  <EastIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};
export default Footer;
