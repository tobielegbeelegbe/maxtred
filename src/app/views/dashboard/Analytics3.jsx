import { ArrowDropDown, ArrowDropUp, MoreHoriz } from "@mui/icons-material";
import { Box, Button, Card, Grid, Icon, IconButton, styled, useTheme, MenuItem, TextField} from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H1, H3, Paragraph, Span } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import AdvanceLineChart from "./shared/AdvanceLineChart";
import AdvanceLineChart2 from "./shared/AdvanceLineChart2";
import HeatmapChart from "./shared/HeatmapChart";
import { Breadcrumb } from "app/components";
// styled components
const AnalyticsRoot = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
}));

const StyledCard = styled(Card)(({ textcolor, bgcolor }) => ({
  display: "flex",
  padding: "1.25rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .icon": {
    color: textcolor,
    background: bgcolor,
    width: "40px",
    height: "40px",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
}));

const StyledButton = styled(Button)(({ textcolor, bgcolor }) => ({
  color: textcolor,
  boxShadow: "none",
  fontSize: ".75rem",
  background: bgcolor,
  borderRadius: "2.5rem",
  padding: "0.3125rem 1.125rem",
  "&:hover": {
    color: "#fff",
    background: textcolor,
    boxShadow:
      "0 14px 26px -12px rgba(47,60,74,.42),0 4px 23px 0 rgba(47,60,74,.12),0 8px 10px -5px rgba(47,60,74,.2)",
  },
}));

const ContentBox = styled(FlexBetween)(({ theme }) => ({
  padding: "14px",
  [theme.breakpoints.down("sm")]: { padding: "8px" },
  "& p": { fontSize: ".9375rem", color: theme.palette.text.secondary },
}));

const IMG = styled("img")(() => ({ width: "100%" }));

const FollowerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "1.25rem",
  "& #content": {
    width: "40%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  "& #chart": { width: "60%" },
  [theme.breakpoints.down("md")]: {
    display: "block",
    padding: "1rem .5rem",
    "& #content": { width: "100%" },
    "& #chart": { width: "100%" },
  },
}));

const ChartHeader = styled(FlexBetween)(({ theme }) => ({
  padding: ".8rem 1.25rem",
  justifyContent: "space-between",
  borderBottom: `1px solid ${`rgba(${convertHexToRGB(theme.palette.text.disabled)}, 0.2)`}`,
  [theme.breakpoints.down("md")]: { padding: "10px 15px" },
}));

const TextBox = styled(FlexBox)(({ theme, icon_color }) => ({
  fontWeight: "400",
  fontSize: ".9375rem",
  alignItems: "center",
  color: theme.palette.text.secondary,
  "& .icon": {
    marginRight: "8px",
    color: icon_color,
    width: "20px",
    height: "15px",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    background: `rgba(${convertHexToRGB(icon_color)}, 0.2)`,
  },
}));

const routes = [{ name: "Dashboard", path: "/dashboard" }, { name: "Projects" }];

const Analytics3 = () => {
  const { palette } = useTheme();
  const colorPrimary = palette.primary.main;
  const colorSecondary = palette.secondary.main;
  const textError = palette.error.main;
  const textMuted = palette.text.secondary;
  const textPrimary = palette.text.primary;

  return (
    <AnalyticsRoot>
    <Box mb={3}>
        <Breadcrumb routeSegments={routes} />
      </Box>
      <FlexBetween mb={2}>
        <H3 sx={{ m: 0 }} color={colorPrimary}>Projects Overview</H3>
        <TextField defaultValue="1" variant="outlined" size="small" select>
          <MenuItem value="1">This Month</MenuItem>
          <MenuItem value="2">Last Month</MenuItem>
          <MenuItem value="3">Six Month</MenuItem>
          <MenuItem value="4">Last Year</MenuItem>
        </TextField>
      </FlexBetween>
      <Grid container spacing={3}>
        {topCardData.map((data, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <StyledCard bgcolor={data.bgColor} textcolor={data.color}>
              <Icon className="icon">{data.icon}</Icon>

              <Box mb="24px" mt="20px" textAlign="center">
                <H1>{data.title}</H1>
                <Paragraph sx={{ fontSize: ".6875rem", color: textMuted }}>
                  {data.subTitle}
                </Paragraph>
              </Box>

              <StyledButton variant="contained" bgcolor={data.bgColor} textcolor={data.color}>
                <Icon>{data.arrowIcon}</Icon>
                {data.percent}%
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid sx={{ mt: 4 }} item xs={12}>
          <H3 sx={{ fontSize: "1.25rem" }}>
            Most <Span color="primary.main">Recent Projects</Span>
          </H3>
        </Grid>

        {mostRecentMedia.map((data, index) => {
          const { Text, uploadDate, imgUrl } = data;

          return (
            <Grid key={index} item lg={3} sm={6} xs={12}>
              <Card>
                <IMG src={imgUrl} alt="image" />
                <ContentBox>
                  <FlexBox
                    alignItems="center"
                    sx={{
                      "& span": { fontSize: "12px" },
                      "& .icon": { mx: "4px", color: textMuted },
                    }}
                  >
                    
                    <Span mr={1}>{Text}</Span>

                
                  </FlexBox>
                  <Paragraph>{uploadDate}</Paragraph>
                </ContentBox>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Grid item xs={12} mt={4}>
        <Card>
          <ChartHeader>
            <H3>Project Growth</H3>

            <IconButton>
              <Icon color="text.primary">more_horiz</Icon>
            </IconButton>
          </ChartHeader>

          <FollowerBox>
            <Box id="content">
              <H1 sx={{ fontSize: "2.75rem" }} color="primary.main">
                4,829
              </H1>
              <Paragraph mb="20px" color="grey.main">
                New Projects (last 360 days)
              </Paragraph>

              <TextBox my="10px" icon_color={colorSecondary}>
                <Icon className="icon">call_missed_outgoing</Icon>
                <Span>You have a</Span>
                <Span sx={{ mx: "4px" }} color="secondary.main">
                  20% Growth
                </Span>
                <Span>compare to last year</Span>
              </TextBox>

              <TextBox icon_color={colorPrimary}>
                <Icon className="icon">call_missed_outgoing</Icon>
                <Span>You have a reached</Span>

                <Span sx={{ mx: "4px" }} color="primary.main">
                  10%
                </Span>
                <Span>of your Project goals</Span>
              </TextBox>
            </Box>

            <Box id="chart">
              <AdvanceLineChart
                chartData={[{ name: "A", data: [40, 80, 20, 90, 145, 80, 125, 60, 120, 70] }]}
                colors={[colorPrimary]}
                height={300}
              />
            </Box>
          </FollowerBox>
        </Card>
      </Grid>

      <Grid container spacing={3} mt={2}>
        {sealsReportData.map((data, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <StyledCard bgcolor={data.bgColor} textcolor={data.color}>
              <Box mb="20px" textAlign="center">
                <Paragraph sx={{ fontSize: ".6875rem", color: textMuted }}>
                  {data.subTitle}
                </Paragraph>
                <H1>{data.title}</H1>
              </Box>

              <StyledButton variant="contained" bgcolor={data.bgColor} textcolor={data.color}>
                <data.arrowIcon />
                {data.percent}%
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item md={6} xs={12}>
          <Card sx={{ pb: 2 }}>
            <ChartHeader mb={2}>
              <H3>Timeline history</H3>

              <IconButton>
                <MoreHoriz sx={{ color: textPrimary }} />
              </IconButton>
            </ChartHeader>

            <AdvanceLineChart2
              height={350}
              colors={[textError, textMuted]}
              chartData={[
                { name: "Timeline", data: [40, 80, 20, 90, 30, 80, 40, 90, 130] },
                { name: "Budget", data: [40, 60, 10, 70, 50, 90, 70, 60, 80] },
              ]}
            />
          </Card>
        </Grid>

        <Grid item md={6} xs={12}>
          <Card sx={{ pb: 2 }}>
            <ChartHeader mb={2}>
              <H3>Project History</H3>

              <IconButton>
                <MoreHoriz sx={{ color: textPrimary }} />
              </IconButton>
            </ChartHeader>

            <AdvanceLineChart2
              height={350}
              colors={["#08ad6c", textMuted]}
              chartData={[
                { name: "Project", data: [40, 80, 20, 90, 30, 80, 40, 90, 130] },
                { name: "Completion Date", data: [40, 60, 10, 70, 50, 90, 70, 60, 80] },
              ]}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} mt={4}>
        <Card>
          <ChartHeader>
            <H3>Posting Habits</H3>

            <IconButton>
              <MoreHoriz sx={{ color: textPrimary }} />
            </IconButton>
          </ChartHeader>

          <HeatmapChart
            chartData={[
              {
                name: "Sat",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Sun",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Mon",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Tue",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Wed",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Thu",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
              {
                name: "Fri",
                data: [
                  40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                  145,
                ],
              },
            ]}
            height={350}
          />
        </Card>
      </Grid>
    </AnalyticsRoot>
  );
};

const topCardData = [
  {
    icon: "people",
    title: "30.2K",
    subTitle: "Total Projects",
    percent: 12.6,
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(0,129,255,.17)",
    color: "#0081FF",
  },
  {
    icon: "touch_app",
    title: "9.2K",
    subTitle: "New Projects",
    percent: 58.6,
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(9,182,109,.17)",
    color: "#09B66D",
  },
  {
    icon: "wifi_tethering",
    title: "1.2K",
    subTitle: "Open Projects",
    percent: "05.6",
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(255,61,87,.17)",
    color: "#FF3D57",
  },
  {
    icon: "rate_review",
    title: "18.2K",
    subTitle: "Completed Projects",
    percent: "05.6",
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(94,92,230,.17)",
    color: "#5e5ce6",
  },
];

const sealsReportData = [
  {
    title: "3.2K",
    subTitle: "Likes Received",
    percent: 12.6,
    arrowIcon: ArrowDropDown,
    bgColor: "rgba(0,129,255,.17)",
    color: "#0081FF",
  },
  {
    title: "25.2K",
    subTitle: "Avg. Likes Received",
    percent: 58.6,
    arrowIcon: ArrowDropUp,
    bgColor: "rgba(9,182,109,.17)",
    color: "#09B66D",
  },
  {
    title: "1.2K",
    subTitle: "Feedback",
    percent: "05.6",
    arrowIcon: ArrowDropDown,
    bgColor: "rgba(255,61,87,.17)",
    color: "#FF3D57",
  },
  {
    title: "4.2K",
    subTitle: "Avg Feedback",
    percent: "05.6",
    arrowIcon: ArrowDropUp,
    bgColor: "rgba(94,92,230,.17)",
    color: "#5e5ce6",
  },
];

const mostRecentMedia = [
  {
    Text: "Housing Project",
    uploadDate: "3 days",
    imgUrl: "/assets/images/sq-10.jpg",
  },
  {
    Text: "Power Project",
    uploadDate: "10 days",
    imgUrl: "/assets/images/sq-11.jpg",
  },
  {
    Text: "Development Project",
    uploadDate: "13 days",
    imgUrl: "/assets/images/sq-12.jpg",
  },
  {
    Text: "Redesign Project",
    uploadDate: "23 days",
    imgUrl: "/assets/images/sq-13.jpg",
  },
];

export default Analytics3;
