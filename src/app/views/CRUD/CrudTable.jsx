import {
  Button,
  Card,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import shortid from "shortid";
import { useEffect, useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import Breadcrumb from "app/components/Breadcrumb";
import ConfirmationDialog from "app/components/ConfirmationDialog";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import MemberEditorDialog from "./MemberEditorDialog";
import { deleteUser, getAllUser } from "./TableService";
import { FlexBetween } from "app/components/FlexBox";
import {H3} from "app/components/Typography";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 750,
  whiteSpace: "pre",
  "& thead": { "& th:first-of-type": { paddingLeft: 16 } },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" },
}));

const Status = styled("small")(({ theme }) => ({
  color: "#fff",
  padding: "2px 8px",
  overflow: "hidden",
  borderRadius: "300px",
  boxShadow: themeShadows[3],
  background: theme.palette.primary.main,
}));

const CrudTable = () => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] = useState(false);

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setShouldOpenConfirmationDialog(false);
    updatePageData();
  };

  const handleDeleteUser = (user) => {
    setUser(user);
    setShouldOpenConfirmationDialog(true);
  };

  const handleConfirmationResponse = () => {
    deleteUser(user).then(() => handleDialogClose());
  };

  const handleEditUser = (user) => () => {
    setUser(user);
    setShouldOpenEditorDialog(true);
  };

  const updatePageData = () => {
    getAllUser().then(({ data }) => setUserList(data));
  };

  useEffect(() => {
    updatePageData();
  }, []);

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Programs" }]} />
      </div>
      <FlexBetween mb={2}>
        <H3 sx={{ m: 0 }}>Programs Overview</H3>
        
      </FlexBetween>
      <Button
        sx={{ mb: 2 }}
        color="primary"
        variant="contained"
        onClick={() => setShouldOpenEditorDialog(true)}
      >
        Add New Program
      </Button>

      <Card sx={{ width: "100%", overflow: "auto" }} elevation={6}>
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow hover key={shortid.generate()}>
                <TableCell sx={{ px: 0 }} align="left">
                  {user.name}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left">
                 R {user.age}
                </TableCell>

                <TableCell sx={{ px: 0 }}>R {user.balance}</TableCell>

                <TableCell sx={{ px: 0 }} align="left">
                  {user.company}
                </TableCell>

                <TableCell sx={{ px: 0 }}>
                  {user.isActive ? <Status>active</Status> : <Status>inactive</Status>}
                </TableCell>

                <TableCell sx={{ px: 0 }}>
                  <IconButton onClick={handleEditUser(user)}>
                    <Edit color="primary" />
                  </IconButton>

                  <IconButton onClick={() => handleDeleteUser(user)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>

        <TablePagination
          page={page}
          sx={{ px: 2 }}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
          onRowsPerPageChange={({ target: { value } }) => setRowsPerPage(value)}
        />

        {shouldOpenEditorDialog && (
          <MemberEditorDialog
            member={user}
            open={shouldOpenEditorDialog}
            handleClose={handleDialogClose}
          />
        )}

        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            text="Are you sure to delete?"
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            onYesClick={handleConfirmationResponse}
          />
        )}
      </Card>
    </Container>
  );
};

export default CrudTable;
