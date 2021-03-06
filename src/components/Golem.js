import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#282c34',
  p: 4,
  color: 'white',
};

const actions = [
  {id:1, image:"assets/action1.png"},
  {id:2, image:"assets/action2.png"},
  {id:3, image:"assets/action3.png"},
  {id:4, image:"assets/action4.png"},
  {id:5, image:"assets/action5.png"},
]

const marbleIcons = {"white": "⚪", "black": "⚫", "red": "🔴", "yellow": "🟡", "blue": "🔵"}
const initMarblePool = ["white", "white", "white", "black", "red", "red", "yellow", "yellow", "blue", "blue"]

function randomize() {
  return Math.floor(Math.random()*5) + 1;
}


const Golem = () => {
  const [marblePool, setMarblePool] = useState(initMarblePool);
  const [marbleAllocation, setMarbleAllocation] = useState({1: [], 2: [], 3: [], 4: [], 5: []});
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const updateMarbleCount = (event, value) => {
    var newMarblePool;

    if (value==="2p"){
      newMarblePool = ["white", "white", "white", "black", "red", "red", "yellow", "yellow", "blue", "blue"]
    }
    else if (value==="3p"){
      newMarblePool = ["white", "white", "white", "white", "white", "black", "red", "red", "yellow", "yellow", "blue", "blue"]
    }
    else if (value==="4p"){
      newMarblePool = ["white", "white", "white", "white", "black", "red", "red", "red", "yellow", "yellow", "yellow", "blue", "blue", "blue"]
    }
    setMarblePool(newMarblePool);
    setMarbleAllocation({1: [], 2: [], 3: [], 4: [], 5: []});
  };

  const updateAllocation = () => {
    var newMarbleAllocation = {1: [], 2: [], 3: [], 4: [], 5: []}

    var toRoll = [].concat.apply([], Object.values(marbleAllocation))
    if (toRoll.length === 0) {
      setMarblePool([])
      toRoll = marblePool
    }

    for (var i=0; i<toRoll.length; i++) {
        var action_number = randomize()
        newMarbleAllocation[action_number].push(toRoll[i])
      }
    
    setMarbleAllocation(newMarbleAllocation);

  }

  function removeMarble(color, row) {
    if (row===-1) {
      return
    }
    var newMarblePool = [...marblePool]
    var newMarbleAllocation = JSON.parse(JSON.stringify(marbleAllocation))

    newMarbleAllocation[row].splice(newMarbleAllocation[row].indexOf(color), 1)
    newMarblePool.push(color)
    setMarbleAllocation(newMarbleAllocation)
    setMarblePool(newMarblePool)
    return
  }

  function makeIcons(colors, action_id) {
    return colors.map(x => (
      <IconButton color='primary' style={{fontSize: '5vmin'}} onClick={() => removeMarble(x, action_id)}>
        {marbleIcons[x]}
      </IconButton>)
    )
  }
  
  return (    
    <div className='App'>
      <header className="App-header">

      <div className="Action-Grid" >
        <div>
          <Box sx={{ width: '100%', backgroundColor: '#ADA676'}}>
            <Grid container spacing={0} >
            {
              actions
              .map(action => ([
                <Grid key={action.id+"image"} item xs={5} sx={{border:2, borderColor:"gray"}} >
                    <img src={action.image} className="Action" alt='action'/>
                </Grid>,
                <Grid key={action.id+"marbles"} item xs={7} sx={{border:2, borderColor:"gray"}}>
                    {makeIcons(marbleAllocation[action.id], action.id)}
                </Grid>,
            ]))}
            </Grid>
          </Box>
        </div>

        <div>        
          <div>Discarded marbles: {makeIcons(marblePool, -1)}</div>
        </div>

        <div>
          <FormControl>
            <RadioGroup row name="player-count" onChange={updateMarbleCount} defaultValue="2p">
              <FormControlLabel value="2p" control={<Radio />} label="2p (10)" />
              <FormControlLabel value="3p" control={<Radio />} label="3p (12)"  />
              <FormControlLabel value="4p" control={<Radio />} label="4p (14)" />
            </RadioGroup>
            <Button value="randomize" variant="contained" onClick={updateAllocation}>Randomize</Button>
          </FormControl>
        </div>

        <div>
          <Fab size="small" color="primary" onClick={handleOpenModal}>
            <HelpOutlineIcon />
          </Fab>
          <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography variant="h6" component="h2">Golem action marble randomizer</Typography>
            <Typography sx={{ mt: 2 }}>
              <p>Select number of players and click "Randomize" to collect required number of marbles and distribute them.</p>
              <p>Click on marble to discard it from the selection and "Randomize" to redistribute. To reset all marbles, select player count again.</p>
              <p>Personal use only. Credit: Cranio Creations.</p>
            </Typography>
            </Box>
          </Modal>
        </div>

      </div>
    </header>                    
    </div>

  );
};

export default Golem;