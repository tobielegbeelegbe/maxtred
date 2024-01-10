import { Clear } from "@mui/icons-material";
import { Badge, Box, Button, Drawer, Icon, IconButton, styled, ThemeProvider } from "@mui/material";
import useSettings from "app/hooks/useSettings";
import { removeFromCart } from "app/redux/slices/cartSlice";
import { sideNavWidth, topBarHeight } from "app/utils/constant";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { themeShadows } from "./MatxTheme/themeColors";
import { H6, Small } from "./Typography";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "& span": { color: theme.palette.text.primary },
  "& #disable": { color: theme.palette.text.disabled },
}));

const MiniCart = styled(Box)({
  height: "100%",
  display: "flex",
  width: sideNavWidth,
  flexDirection: "column",
});

const CartBox = styled(Box)({
  padding: "4px",
  display: "flex",
  paddingLeft: "16px",
  alignItems: "center",
  height: topBarHeight,
  boxShadow: themeShadows[6],
  "& h5": {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: "500",
    marginLeft: "16px",
  },
});

const ProductBox = styled(Box)({
  gap: 5,
  display: "flex",
  padding: "8px 8px",
  alignItems: "center",
  transition: "background 300ms ease",
  "&:hover": { background: "rgba(0,0,0,0.01)" },
});

const ProductDetails = styled(Box)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  "& h6": {
    width: 150,
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

function ShoppingCart({ container }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { settings } = useSettings();

  const [panelOpen, setPanelOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleDrawerToggle = () => setPanelOpen(!panelOpen);

  const handleCheckoutClick = () => {
    setPanelOpen(false);
    navigate("/dashboard/incidents");
  };

  // total cartlist items amount
 
  // remove product from cart handler
  const handleRemoveItem = (productId) => () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Fragment>
      <IconButton onClick={handleDrawerToggle}>
        <Badge color="secondary" badgeContent={cart.length}>
          <Icon sx={{ color: "text.primary" }}>error</Icon>
        </Badge>
      </IconButton>

      <ThemeProvider theme={settings.themes[settings.activeTheme]}>
        <Drawer
          anchor={"right"}
          open={panelOpen}
          variant="temporary"
          container={container}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <MiniCart>
            <CartBox>
              <Icon color="primary">error</Icon>
              <h5>New Incidents</h5>
            </CartBox>

            <Box flexGrow={1} overflow="auto">
              
                <ProductBox key="i1">

                  <Icon color="primary">error</Icon>

                  <ProductDetails>
                    <H6 color="red">New Incidents Reported </H6>

                    <Small color="text.secondary">
                      Project: Pretoria Workers Field
                    </Small>
                    <Small color="text.secondary">
                      Date: Friday 14th
                    </Small>
                  </ProductDetails>

                  

                  <StyledIconButton size="small" onClick={handleRemoveItem('i1')}>
                    <Clear sx={{ fontSize: 16 }} />
                  </StyledIconButton>
                </ProductBox>

                <ProductBox key="i2">

                  <Icon color="primary">error</Icon>

                  <ProductDetails>
                    <H6 color="red">New Incidents Reported </H6>

                    <Small color="text.secondary">
                      Project: Dura Road Project
                    </Small>
                    <Small color="text.secondary">
                      Date: Tuesday 24th
                    </Small>
                  </ProductDetails>

                  

                  <StyledIconButton size="small" onClick={handleRemoveItem('i2')}>
                    <Clear sx={{ fontSize: 16 }} />
                  </StyledIconButton>
                </ProductBox>

                <ProductBox key="i3">

                  <Icon color="primary">error</Icon>

                  <ProductDetails>
                    <H6 color="red">New Incidents Reported </H6>

                    <Small color="text.secondary">
                      Project: Field Area Limpopo
                    </Small>
                    <Small color="text.secondary">
                      Date: Saturday 4th
                    </Small>
                  </ProductDetails>

                  

                  <StyledIconButton size="small" onClick={handleRemoveItem('i3')}>
                    <Clear sx={{ fontSize: 16 }} />
                  </StyledIconButton>
                </ProductBox>
              
            </Box>

            <Button
              color="primary"
              variant="contained"
              onClick={handleCheckoutClick}
              disabled={cart.length === 0}
              sx={{ width: "100%", borderRadius: 0 }}
            >
              View All Incidents
            </Button>
          </MiniCart>
        </Drawer>
      </ThemeProvider>
    </Fragment>
  );
}

export default ShoppingCart;
