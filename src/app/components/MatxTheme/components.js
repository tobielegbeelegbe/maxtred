import { themeShadows } from "./themeColors";

export const components = {
  MuiTable: {
    styleOverrides: {
      root: { tableLayout: "fixed" },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        padding: "12px 8px 12px 0px",
      },
      head: { fontSize: "13px", padding: "12px 0px" },
    },
  },
  MUIDataTableSelectCell: {
    styleOverrides: {
      root: { paddingLeft: 12 },
    },
  },
  MUIDataTableHeadCell: {
    styleOverrides: {
      root: { paddingLeft: 16 },
    },
  },
  MUIDataTableBodyCell: {
    styleOverrides: {
      root: { paddingLeft: 8 },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        fontWeight: "400",
        textTransform: "none",
      },
      contained: { boxShadow: themeShadows[8] },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "*": { boxSizing: "border-box" },
      html: {
        width: "100%",
        height: "100%",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
      },
      body: {
        height: "100%",
        fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
      },
      "#root": { height: "100%" },
      a: { color: "inherit", textDecoration: "none" },
      "#nprogress .bar": { zIndex: "2000 !important" },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: { boxShadow: themeShadows[12] },
    },
  },
  MuiAccordion: {
    styleOverrides: { root: { "&:before": { display: "none" } } },
  },
  MuiTooltip: {
    styleOverrides: { tooltip: { fontSize: "11px" } },
  },
  MuiMenuItem: {
    styleOverrides: { root: { fontSize: "0.875rem" } },
  },
  MuiExpansionPanel: {
    styleOverrides: { root: { "&:before": { display: "none" } } },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        boxShadow:
          "0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%) !important",
      },
    },
  },
};
