import { Box, Card, Grid, Icon, IconButton, useTheme } from "@mui/material";
import { H3, Paragraph } from "app/components/Typography";

const StatCard3 = () => {
  const statList = [
    {
      icon: "people",
      amount: 10495,
      title: "New Projects",
    },
    {
      icon: "location_on_outlined",
      amount: 300942,
      title: "Adjusted Budget",
    },
    {
      icon: "keyboard_voice",
      amount: 45269,
      title: "New Assets",
    },
    {
      icon: "card_giftcard",
      amount: 74265,
      title: "Total Incidents",
    },
  ];
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <div>
      <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={3} sm={6} xs={12}>
            <Card elevation={3} sx={{ p: "20px", display: "flex" }}>
              <div>
                <IconButton
                  size="small"
                  sx={{
                    padding: "8px",
                    background: "rgba(0, 0, 0, 0.01)",
                  }}
                >
                  <Icon sx={{ color: textMuted }}>{item.icon}</Icon>
                </IconButton>
              </div>
              <Box ml={2}>
                <H3 sx={{ mt: "-4px", fontSize: "32px" }}>{item.amount.toLocaleString()}</H3>
                <Paragraph sx={{ m: 0, color: textMuted }}>{item.title}</Paragraph>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatCard3;
