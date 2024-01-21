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
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

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
      amount: 4550,
      Icon: ShowChart,
      name: "Net Earnings",
      iconColor: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 80,
      name: "Change",
      Icon: DonutLarge,
      iconColor: theme.palette.warning.main,
    },
    {
      id: 3,
      amount: 2800,
      name: "Fees",
      Icon: ReceiptOutlined,
      iconColor: theme.palette.info.main,
    },
  ];

  return (
    <Card sx={{ pb: 2 }}>
      <H5 padding={3}>2023 Statement</H5>
      <Divider />

      

      <FlexBetween px={3} py={2}>
        

        <Select value="2021" onChange={() => {}}>
          <MenuItem value="2021">First</MenuItem>
          <MenuItem value="2020">Second</MenuItem>
          <MenuItem value="2019">Third</MenuItem>
          <MenuItem value="2019">Fourth</MenuItem>
        </Select>
      </FlexBetween>

      <Table sx={{ minWidth: 300 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Date</HeadTableCell>
            <HeadTableCell>Report ID</HeadTableCell>
            <HeadTableCell>Report Details</HeadTableCell>
            <HeadTableCell>Invoice</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <TableRow key={item}>
              <BodyTableCell>Jan 12, 2023</BodyTableCell>
              <BodyTableCell>202745788</BodyTableCell>
              <BodyTableCell>First Quarter Report</BodyTableCell>
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
