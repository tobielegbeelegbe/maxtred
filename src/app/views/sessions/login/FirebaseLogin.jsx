import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Card, Grid, styled, TextField, useTheme } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { Formik } from "formik";
import * as Yup from "yup";
import { MatxDivider } from "app/components";
import { FlexAlignCenter, FlexBox } from "app/components/FlexBox";
import { Paragraph, Span } from "app/components/Typography";
import useAuth from "app/hooks/useAuth";

// styled components
const GoogleButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  boxShadow: theme.shadows[3],
  backgroundColor: "#e0e0e0",
  "&:hover": { backgroundColor: "#d5d5d5" },
}));

const Logo = styled(Box)({
  gap: 10,
  display: "flex",
  alignItems: "center",
  "& span": { fontSize: 26, lineHeight: 1.3, fontWeight: 800 },
});

const FirebaseRoot = styled(FlexAlignCenter)(({ theme }) => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": { maxWidth: 800, margin: "1rem" },
  "& .cardLeft": {
    color: "#fff",
    height: "100%",
    display: "flex",
    padding: "32px 56px",
    flexDirection: "column",
    backgroundSize: "cover",
    background: "#161c37 url(/assets/images/bg-3.png) no-repeat",
    [theme.breakpoints.down("sm")]: { minWidth: 200 },
    "& img": { width: 32, height: 32 },
  },
  "& .mainTitle": { fontSize: 18, lineHeight: 1.3, marginBottom: 24 },
  "& .features": {
    "& .item": {
      position: "relative",
      marginBottom: 12,
      paddingLeft: 16,
      "&::after": {
        top: 8,
        left: 0,
        width: 4,
        height: 4,
        content: '""',
        borderRadius: 4,
        position: "absolute",
        backgroundColor: theme.palette.error.main,
      },
    },
  },
}));

// inital login credentials
const initialValues = {
  email: "jason@ui-lib.com",
  password: "dummyPass",
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string().email("Invalid Email address").required("Email is required!"),
});

const FirebaseLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const { signInWithEmail, signInWithGoogle } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await signInWithEmail(values.email, values.password);
      navigate(state ? state.from : "/");
      enqueueSnackbar("Logged In Successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (e) {
      setLoading(false);
    }
  };
  const IMG = styled("img")({ height: 32 });
  return (
    <FirebaseRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <div className="cardLeft">
              <Logo>
              <IMG alt="company-logo" src="/assets/images/logo.png" /> <span>Easy Pro</span>
              </Logo>

              <h1 className="mainTitle">Admin Dashboard</h1>

              <div className="features">
                <div className="item">JWT, Firebase & Auth0 Authentication</div>
                <div className="item">Aligned with IDMS</div>
                <div className="item">Powerful Progeject Management System</div>
                <div className="item">Strict control setup of user permissions </div>
                <div className="item">Single source for all project information</div>
              </div>

              <Span sx={{ flexGrow: 1 }}></Span>

              <a href="https://ui-lib.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/logos/ui-lib.png" alt="UI Lib Logo" />
              </a>
            </div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box px={4} pt={4}>
              <GoogleButton
                fullWidth
                variant="contained"
                onClick={handleGoogleLogin}
                startIcon={<img src="/assets/images/logos/google.svg" alt="google" />}
              >
                Sign In With Google
              </GoogleButton>
            </Box>

            <MatxDivider sx={{ mt: 3, px: 4 }} text="Or" />

            <Box p={4}>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <FlexBox justifyContent="space-between">
                      <FlexBox alignItems="center" gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Remember Me</Paragraph>
                      </FlexBox>

                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FirebaseRoot>
  );
};

export default FirebaseLogin;
