import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';

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

function makeIcons(colors) {
  if (colors.length===0) {
    return ""
  }
  return colors.map(x => marbleIcons[x]).join(" ")
}

const Controls = () => {
  const [marblePool, setMarblePool] = useState(initMarblePool);
  const [marbleAllocation, setMarbleAllocation] = useState({1: [], 2: [], 3: [], 4: [], 5: []});

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

  const removeMarble = (event) => {
    
    const color = event.target.value

    // Deep copy
    var newMarblePool = [...marblePool]
    var newMarbleAllocation = JSON.parse(JSON.stringify(marbleAllocation))


    for (var i=1; i<=5; i++) {
      for (var j=0; j<newMarbleAllocation[i].length; j++) {
        if (newMarbleAllocation[i][j]===color) {
          newMarbleAllocation[i].splice(j, 1)
          newMarblePool.push(color)
          setMarbleAllocation(newMarbleAllocation)
          setMarblePool(newMarblePool)
          return
        }
      } 
    }
  }

  return (    
    <div className="Action-Grid" >
      <div>Pool: {makeIcons(marblePool)}</div>
      <div>
        <Box sx={{ width: '100%', backgroundColor: 'primary.dark'}}>
          <Grid container spacing={0} >
          {
            actions
            .map(action => ([
              <Grid key={action.id+"image"} item xs={6} >
                  <img src={action.image} className="Action" alt='action'/>
              </Grid>,
              <Grid key={action.id+"marbles"} item xs={6} className="Marble">
                  {makeIcons(marbleAllocation[action.id])}
              </Grid>,
          ]))}
          </Grid>
        </Box>
      </div>

     

    <div>
    <FormControl>
      <RadioGroup row name="player-count" onChange={updateMarbleCount} defaultValue="2p">
        <FormControlLabel value="2p" control={<Radio />} label="2p (10)" />
        <FormControlLabel value="3p" control={<Radio />} label="3p (12)"  />
        <FormControlLabel value="4p" control={<Radio />} label="4p (14)" />
      </RadioGroup>
    </FormControl>
    </div>
    <div>        
        Discard: 
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button value="red" onClick={removeMarble}>{marbleIcons["red"]}</Button>
          <Button value="yellow" onClick={removeMarble}>{marbleIcons["yellow"]}</Button>
          <Button value="blue" onClick={removeMarble}>{marbleIcons["blue"]}</Button>
          <Button value="white" onClick={removeMarble}>{marbleIcons["white"]}</Button>
          <Button value="black" onClick={removeMarble}>{marbleIcons["black"]}</Button>
          <Button onClick={updateAllocation}>Randomize</Button>
        </ButtonGroup>
      </div>
  </div>
  );
};

export default Controls;