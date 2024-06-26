import { Download } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FlexBetween } from "app/components/FlexBox";
import { H5 } from "app/components/Typography";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

// styled components



const Statements = () => {

  return (
    <Card sx={{ pb: 2 }}>
      <H5 padding={3}>2020 Statement</H5>
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
              <BodyTableCell>Jan 12, 2020</BodyTableCell>
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
