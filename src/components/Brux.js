import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '../App.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';

function shuffle(array) {
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const colors = {
  "mon": "#FAF1CA",
  "art": "#717543",
  "mat": "#B2A588",
  "hou": "#6E616F",
  "nob": "#A47A4E",
  "exp": "#AC2D24",
  "na": "#000000"
}

const initCards = []

const Brux = () => {
  const [cards, setCards] = useState(initCards);

  const updateLayout = (event) => {
    var newCards = [
      "mon", "mon", "mon", 
      "art", "art", "art",
      "mat", "mat", "mat",
      "hou", "hou", "hou",
      "nob", "nob", "nob", "exp"
    ];
    
    const players = event.target.value;
    if (players === "2p") {
      shuffle(newCards);
      newCards[0] = newCards[1] = newCards[2] = newCards[3] = newCards[12] = newCards[15] = "na"
    }
    else if (players === "3p") {
      shuffle(newCards);
      newCards[0] = newCards[1] = newCards[2] = newCards[3] = "na"
    }
    else {
      newCards.push("mon", "art", "mat", "hou", "nob")
      shuffle(newCards);
    }
    
    setCards(newCards);
    console.log(newCards)

  }

  return (    
    <div className='App'>
      <header className="App-header">
        <div className='Action-Grid'>
          <div>
            <Grid container spacing={1} >
              {
                [0,1,2,3].map(x => (
                  <Grid container key={x} item spacing={3}>
                    {
                      [0,1,2,3].map(y => (
                        <Grid item key={y}>
                          <Paper sx={{height: 140, width: 100, backgroundColor: colors[cards[4*x+y]]}}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                ))
              }
            </Grid>
          </div>

          <div>        
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button value="2p" onClick={updateLayout}>2p</Button>
              <Button value="3p" onClick={updateLayout}>3p</Button>
              <Button value="4p" onClick={updateLayout}>4p</Button>
            </ButtonGroup>
          </div>
        </div>

    </header>                    
    </div>

  );
};

export default Brux;