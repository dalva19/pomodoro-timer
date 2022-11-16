import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccessAlarmIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              align="center"
            >
              Pomodoro Timer
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="progress-bar">
        <CircularProgress
          variant="determinate"
          value={50}
          size={300}
          thickness={1.5}
        />
      </div>

      <div className="time-buttons">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">1:00</Button>
          <Button variant="outlined">5:00</Button>
          <Button variant="outlined">10:00</Button>
        </Stack>
      </div>

      {/* <Typography
        variant="h6"
        color="inherit"
        component="div"
        align="center"
        sx={{ marginTop: 10 }}
      >
        Pick your time
      </Typography> */}
    </div>
  );
}

export default App;
