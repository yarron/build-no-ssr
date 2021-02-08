import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    dk: true;
    xl: true;
  }
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#05ad78',
      dark: '#05ad78',
    },
    primary: {
      main: '#045e56',
      dark: '#045e56',
    },
    error: {
      main: '#FF6859',
    },
    background: {
      default: '#424242',
      paper: '#373740',
    },
    text: {
      primary: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      dk: 1600,
      xl: 1920,
    },
  },
  overrides: {
    MuiAccordionSummary: {
      content: {
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(55,56,65, 0.1)',
          color: '#05ad78',
        },
        '&:active': {
          backgroundColor: 'rgba(55,56,65, 0.1)',
          color: '#05ad78',
        },
      },
    },
    MuiExpansionPanel: {
      rounded: {
        margin: 'auto',
        borderTop: '1px solid #2A2B33',
      },
      root: {
        margin: 'auto !important',
        '&:before': {
          backgroundColor: '#2A2B33',
        },
      },
    },
    MuiTabs: {
      root: {
        minHeight: 41,
      },
      scrollButtons: {
        width: 32,
      },
    },
    MuiTab: {
      root: {
        borderRight: '1px solid #1E1E24',
        '&:first-child': {
          borderLeft: '1px solid #1E1E24',
        },
        padding: '6px 30px',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#2A2B33',
        color: 'rgba(255, 255, 255, 0.87)',
      },
      colorSecondary: {
        backgroundColor: '#2E2F38',
        color: 'rgba(255, 255, 255, 0.87)',
      },
      root: {
        boxShadow: 'none',
        borderTop: '1px solid #1E1E24',
        borderBottom: '1px solid #1E1E24',
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: '#1E2126',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid #1e1e25 !important',
        padding: 2,
      },
      paddingCheckbox: {
        borderLeft: '2px solid #373740',
      },
    },
    MuiToolbar: {
      root: {
        borderBottom: '1px solid #1e1e25 !important',
        backgroundColor: 'transparent',
      },
    },
    MuiTableRow: {
      root: {
        height: 52,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: '0 16px 0 32px',
        minHeight: '56px !important',
      },
      content: {
        margin: '12px 0 !important',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#25282F',
        '&:hover': {
          backgroundColor: '#25282F',
        },
        '&:hover .MuiSvgIcon-root': {
          color: '#05ad78',
        },
        '&.Mui-focused': {
          backgroundColor: '#25282F',
        },
      },
      underline: {
        '&:before': {
          borderBottom: '1px solid transparent',
        },
        '&:hover:before': {
          borderBottom: '1px solid transparent',
        },
        '&:after': {
          borderBottom: '2px solid #05ad78',
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.87)',
        '&.Mui-focused': {
          color: '#05ad78',
        },
      },
    },
    MuiInputBase: {
      input: {
        color: 'rgba(255, 255, 255, 0.6)',
        transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
        '&:focus': {
          color: 'rgba(255, 255, 255, 0.8)',
        },
        '&:focus + .MuiInputAdornment-root .MuiSvgIcon-root': {
          color: '#05ad78',
        },
      },
    },
    MuiFormControl: {
      root: {
        '&:hover > .MuiInputLabel-filled.MuiInputLabel-shrink': {
          color: '#05ad78',
        },
      },
    },
    MuiSelect: {
      icon: {
        color: 'rgba(255, 255, 255, 0.6)',
      },
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiTableBody: {
      root: {
        '& > tr:hover': {
          backgroundColor: '#3f4049',
        },
        '& > tr:hover > td': {
          backgroundColor: 'inherit',
        },
      },
    },
  },
});

export default theme;
