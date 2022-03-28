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
            <ListItemButton component="a">
              <ListItemText primary="Gaia Project setup randomizer ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Great Western Trail (1st Edition) solo bot ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Tawantinsuyu solo bot ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Tabannusi solo bot ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Tekhenu solo bot ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Teotihuacan solo bot ??"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="On Mars solo bot ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Lisboa solo bot ??"/>
            </ListItemButton>
          </ListItem>

          

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Aeon's End turn order randomizer ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Mage Knight dummy player ??"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemText primary="Praga Caput Regni solo bot ??"/>
            </ListItemButton>
          </ListItem>


        </List>

      </header>                    
    </div>
  );
}

export default App;
