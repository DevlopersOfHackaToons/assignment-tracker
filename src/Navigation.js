import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, ThemeProvider } from '@mui/material';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function SimpleBottomNavigation({value, setValue, loadPage}) {

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{bottom: 0, position: 'fixed', width: "100%"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          loadPage(newValue);
        }}
      >
        <BottomNavigationAction label="Today" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="Upcoming" icon={<DateRangeIcon />} />
        <BottomNavigationAction label="Over" icon={<DoneAllIcon />} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  );
}