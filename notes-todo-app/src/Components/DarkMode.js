// import React from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import ToDo from "./Components/ToDo";
// import Notes from "./Components/Notes";
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         p: 2,
//         position: 'fixed',
//         top: 0,
//         right: 0,
//         zIndex: 1000, // Ensure it stays above other content
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

// function ToggleColorMode({ children }) {
//   const [mode, setMode] = React.useState('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         {children}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// function App() {
//   return (
//     <ToggleColorMode>
//       <div className="App">
//         <MyApp />
//         <Navbar />
//         <ToDo />
//         <Notes />
//       </div>
//     </ToggleColorMode>
//   );
// }

// export default App;
