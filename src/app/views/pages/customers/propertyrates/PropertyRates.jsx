import { DonutLarge, Download, ReceiptOutlined, ShowChart } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  MenuItem,
  Select,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FlexBetween } from "app/components/FlexBox";
import { H5, Paragraph, Span } from "app/components/Typography";
import { BodyTableCell, HeadTableCell } from "./StyledComponents";
import { Breadcrumb } from "app/components";
// styled components
const EarningBoxWrapper = styled(FlexBetween)(({ theme }) => ({
  [theme.breakpoints.down(555)]: {
    flexDirection: "column",
    "& > .MuiButton-root": { width: "100%" },
  },
  [theme.breakpoints.down(706)]: {
    "& > .MuiButton-root": { marginTop: 16 },
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down(555)]: {
    width: "100%",
    flexDirection: "column",
    "& > .MuiBox-root": { marginLeft: 0, width: "100%", marginBottom: 16 },
  },
}));

const EarningBox = styled(Box)(({ theme }) => ({
  width: 130,
  paddingTop: 8,
  paddingBottom: 8,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[100]}`,
}));

const Statements = () => {
  const theme = useTheme();
  const earningList = [
    {
      id: 1,
      amount: 4508350,
      Icon: ShowChart,
      name: "Net Cashflow",
      iconColor: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 800000,
      name: "Budget",
      Icon: DonutLarge,
      iconColor: theme.palette.warning.main,
    },
    {
      id: 3,
      amount: 28000,
      name: "Taxes",
      Icon: ReceiptOutlined,
      iconColor: theme.palette.info.main,
    },
  ];

  return (
    <Card sx={{ pb: 2 }}>

      
      
      <H5 padding={3}>Property Rates and Taxes</H5>
      <Divider />

      <Box padding={3}>
        
        <Paragraph>
          Last <Span color="primary.main">30</Span> days Cashflow calculated
        </Paragraph>

        <EarningBoxWrapper flexWrap="wrap" pt={2}>
          <StyledStack direction="row" flexWrap="wrap" spacing={2}>
            {earningList.map((item) => (
              <EarningBox key={item.id}>
                <item.Icon sx={{ color: item.iconColor }} />
                <H5 my={0.5}>R {item.amount}</H5>
                <Paragraph>{item.name}</Paragraph>
              </EarningBox>
            ))}
          </StyledStack>

          <Button variant="contained">Balance R 4,300,550</Button>
        </EarningBoxWrapper>
      </Box>

      <FlexBetween px={3} py={2}>
        <H5>Statement</H5>

        <Select value="2021" onChange={() => {}}>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
        </Select>
      </FlexBetween>

      <Table sx={{ minWidth: 300 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Date</HeadTableCell>
            <HeadTableCell>Report ID</HeadTableCell>
            <HeadTableCell>Report Details</HeadTableCell>
            <HeadTableCell>Download</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TableRow key={item}>
              <BodyTableCell>Jan 12, 2023</BodyTableCell>
              <BodyTableCell>202745788</BodyTableCell>
              <BodyTableCell>First Quarter Cashflow</BodyTableCell>
              <BodyTableCell>
                <Button variant="contained" disabled={item === 1} startIcon={<Download />}>
                  Download
                </Button>
              </BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Statements;
