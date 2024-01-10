import { TrendingUp } from "@mui/icons-material";
import { Box, Card, Fab, styled } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { Paragraph } from "app/components/Typography";

const CardRoot = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "28px 16px",
  background: `url("/assets/images/dots.png"),
    linear-gradient(90deg, ${theme.palette.primary.light} -19.83%, ${theme.palette.primary.dark} 189.85%)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
}));

const WelcomeBox = styled(Box)({
  color: "white",
  fontSize: "18px",
  textTransform: "uppercase",
});

const TextBox = styled(Box)({
  color: "white",
  "& .title": { fontSize: "32px" },
  "& p": { margin: 0, textTransform: "uppercase" },
});

const DashboardWelcomeCard = () => {
  return (
    <CardRoot elevation={3}>
      <Fab color="primary" aria-label="add">
        <TrendingUp />
      </Fab>

      <WelcomeBox mt={3}>Welcome back! Jason</WelcomeBox>

      <FlexBetween margin="auto" maxWidth={400} fontWeight={300} gap={2} p={4}>
        <TextBox>
          <Paragraph className="title" >58000</Paragraph>
          <Paragraph>Assets</Paragraph>
        </TextBox>

        <TextBox>
          <Paragraph className="title" color={"green"}>40220</Paragraph>
          <p>Open</p>
        </TextBox>

        <TextBox>
          <Paragraph className="title" color={"red"}>10300</Paragraph>
          <Paragraph>Closed</Paragraph>
        </TextBox>
      </FlexBetween>
    </CardRoot>
  );
};

export default DashboardWelcomeCard;
