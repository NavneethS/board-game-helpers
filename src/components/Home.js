import React from 'react';
import '../App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function App() {


  return (
    <div className='App'>
      <header className="App-header">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/golem">
              <ListItemText primary="Golem action marble randomizer"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/brux">
              <ListItemText primary="Bruxelles 1897 setup randomizer"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href="/carnegie">
              <ListItemText primary="Carnegie setup randomizer"/>
            </ListItemButton>
          </ListItem>

        </List>

      </header>                    
    </div>
  );
}

export default App;
