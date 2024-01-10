import { format } from "date-fns";
import { DateRange, ExpandLess, StarOutline, TrendingUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Fab,
  Grid,
  useTheme,
} from "@mui/material";
import { Breadcrumb, MatxProgressBar } from "app/components";
import DashboardWelcomeCard from "../cards/DashboardWelcomeCard";
import { H2, H3, H6, Paragraph } from "app/components/Typography";
import AreaChart from "../charts/echarts/AreaChart";
import { FlexAlignCenter, FlexBetween, FlexBox } from "app/components/FlexBox";
import ModifiedAreaChart from "./shared/ModifiedAreaChart";

const Analytics4 = () => {
  const theme = useTheme();

  const routes = [{ name: "Dashboard", path: "/dashboard" }, { name: "Assets" }];

  return (
    <Box m={3}>
      <Box mb={3}>
        <Breadcrumb routeSegments={routes} />
      </Box>
      <FlexBetween mb={2}>
        <H3 sx={{ m: 0 }}>Assets Overview</H3>
        
      </FlexBetween>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <DashboardWelcomeCard />
        </Grid>

        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <Box px={3} py={2}>
              <Paragraph fontSize={16} fontWeight={500}>
                Total Revenue
              </Paragraph>

              <Paragraph color="text.secondary" mb={3}>
                R 1,500,345
              </Paragraph>

              <Button variant="contained" color="primary">
                + 180 sales
              </Button>
            </Box>

            <AreaChart height={160} color={[theme.palette.primary.main]} />
          </Card>
        </Grid>

        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <Box px={3} py={2}>
              <Paragraph fontSize={16} fontWeight={500}>
                Todays Assets
              </Paragraph>

              <Paragraph color="text.secondary" mb={3}>
                500
              </Paragraph>

              <Button variant="contained" color="secondary">
                + 300 new
              </Button>
            </Box>

            <AreaChart height={160} color={[theme.palette.secondary.main]} />
          </Card>
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container alignItems="center">
            <Grid item md={4} xs={7}>
              <FlexBox alignItems="center" px={2}>
                <Checkbox />
                <Paragraph lineHeight={1} fontWeight={500} color="text.secondary">
                  Name
                </Paragraph>
              </FlexBox>
            </Grid>

            <Grid item md={4} xs={4}>
              <Paragraph fontWeight={500} color="text.secondary">
                Date Created
              </Paragraph>
            </Grid>

            <Grid item xs={3} sx={{ display: { md: "flex", xs: "none" } }}>
              <Paragraph fontWeight={500} color="text.secondary">
               Current Price
              </Paragraph>
            </Grid>

            <Grid item xs={1} sx={{ display: { md: "flex", xs: "none" } }}>
              <Paragraph fontWeight={500} color="text.secondary">
               Growth
              </Paragraph>
            </Grid>
          </Grid>

          {['Gold', 'Bitcoin', 'FGA Stocks', 'Sasol', 'RTY Trade'].map((id) => (
            <Card key={id} sx={{ py: 1, px: 2, mb: 2 }}>
              <Grid container alignItems="center">
                <Grid item md={4} xs={7}>
                  <FlexBox alignItems="center">
                    <Checkbox />

                    {id % 2 === 1 ? (
                      <Fab color="error" size="small">
                        <StarOutline />
                      </Fab>
                    ) : (
                      <Fab color="success" size="small">
                        <DateRange />
                      </Fab>
                    )}

                    <Paragraph fontWeight={500} ml={2}>
                       {id}
                    </Paragraph>
                  </FlexBox>
                </Grid>

                <Grid item md={4} xs={4}>
                  <Paragraph color="text.secondary">
                    {format(new Date().getTime(), "MM/dd/yyyy hh:mma")}
                  </Paragraph>
                </Grid>

                <Grid item xs={3} sx={{ display: { md: "flex", xs: "none" } }}>
                  R 200,000
                </Grid>

                <Grid item xs={1} sx={{ textAlign: "end" }}>
                  <H3 color="green">+5%</H3>
                </Grid>
              </Grid>
            </Card>
          ))}

          <Card sx={{ p: 3, mt: 4 }}>
            <H6 fontSize={16} mb={2}>
              Asset Growth
            </H6>

            <ModifiedAreaChart
              height={300}
              option={{
                series: [
                  {
                    data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33],
                    type: "line",
                    areaStyle: {},
                    smooth: true,
                    lineStyle: { width: 3, color: theme.palette.primary.main },
                  },
                ],
                yAxis: {
                  axisLabel: { color: theme.palette.text.secondary },
                },
                color: [
                  {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: theme.palette.primary.light, // color at 0% position
                      },
                      {
                        offset: 1,
                        color: "rgba(255,255,255,0)", // color at 100% position
                      },
                    ],
                    global: false, // false by default
                  },
                ],
              }}
            />
          </Card>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card elevation={3} sx={{ p: 3, mb: 3 }}>
            <FlexBox alignItems="center" gap={2}>
              <Fab disableRipple color="success" size="medium">
                <TrendingUp />
              </Fab>

              <H6 fontSize={16} color="success.main">
                Portfolio Profit
              </H6>
            </FlexBox>

            <FlexBetween pt={2}>
              <H2 color="text.secondary">R 10.8k</H2>

              <FlexBox alignItems="center" gap={1}>
                <FlexAlignCenter
                  width={25}
                  height={25}
                  color="white"
                  borderRadius="50%"
                  bgcolor="success.main"
                >
                  <ExpandLess fontSize="small" color="inherit" />
                </FlexAlignCenter>

                <Paragraph color="success.main">(+21%)</Paragraph>
              </FlexBox>
            </FlexBetween>
          </Card>

          <Card elevation={3} sx={{ p: 3, mb: 3 }}>
            <FlexBox alignItems="center" gap={2}>
              <Fab disableRipple color="error" size="medium">
                <StarOutline />
              </Fab>

              <H6 fontSize={16} color="error.main">
                Total Portfolio Amount
              </H6>
            </FlexBox>

            <FlexBetween pt={2}>
              <H2 color="text.secondary">R2.8M</H2>

              <FlexBox alignItems="center" gap={1}>
                <FlexAlignCenter
                  width={25}
                  height={25}
                  color="white"
                  borderRadius="50%"
                  bgcolor="error.main"
                >
                  <ExpandLess fontSize="small" color="inherit" />
                </FlexAlignCenter>

                <Paragraph color="error.main">(-21%)</Paragraph>
              </FlexBox>
            </FlexBetween>
          </Card>

          <Card sx={{ p: 3 }}>
            <H6 fontSize={16} mb={1}>
              Today
            </H6>

            <MatxProgressBar value={75} color="primary" text="Sasol (102k)" />
            <MatxProgressBar value={45} color="secondary" text="Pick n Pay (40k)" />
            <MatxProgressBar value={75} color="primary" text="FGA Assets (80k)" />

            <H6 fontSize={16} mt={2} mb={1}>
              Yesterday
            </H6>

            <MatxProgressBar value={75} color="primary" text="FGA Assets (102k)" />
            <MatxProgressBar value={45} color="secondary" text="Gold (40k)" />
            <MatxProgressBar value={75} color="primary" text="Sasol (80k)" />

            <H6 fontSize={16} mt={2} mb={1}>
              2 Days Ago
            </H6>

            <MatxProgressBar value={75} color="primary" text="Sasol (102k)" />
            <MatxProgressBar value={45} color="secondary" text="Rty Trade  (40k)" />
            <MatxProgressBar value={75} color="primary" text="Gold (80k)" />

            <H6 fontSize={16} mt={2} mb={1}>
              7 Days Ago
            </H6>

          
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics4;
