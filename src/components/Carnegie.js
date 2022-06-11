import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const timelineTiles = [
  ["WdSM", "dWSE"],
  ["EMSd", "MEdS"],
  ["WdME", "dEWM"],
  ["SEdW", "SWMd"],
  ["MdWS", "dSMW"],
  ["ESdM", "EMWd"],
  ["MdEW", "dMES"],
  ["WSdE", "SWEd"],
]
const departmentTiles = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]

const randomizerCards = [
  ["South 2", ["New Orleans", "Atlanta", "Houston", "Charleston"]],
  ["South 2", ["New Orleans", "Atlanta", "Houston", "Charleston"]],
  ["Midwest 2", ["San Fransisco", "Santa Fe"]],
  ["Midwest 2", ["San Fransisco", "Santa Fe"]],
  ["East 2", ["Pittsburgh", "Boston", "Albany"]],
  ["East 2", ["Pittsburgh", "Boston", "Albany"]],
  ["West 2", ["San Fransisco", "Denver"]],
  ["West 2", ["San Fransisco", "Denver"]],
  ["Minor City 2", ["Kansas City", "Chicago"]],
  ["Minor City 2", ["Kansas City", "Chicago"]],
  ["7", ["Fargo", "St Paul"]],
  ["7", ["Fargo", "St Paul"]],
  ["Money 2", ["San Antonio", "Memphis", "Dallas"]],
  ["Money 2", ["San Antonio", "Memphis", "Dallas"]],
  ["Money+Good 4", ["Portland", "Boise", "Denver", "Los Angeles"]],
  ["Money+Good 4", ["Portland", "Boise", "Denver", "Los Angeles"]],
  ["Good 2", ["Pittsburgh", "New York"]],
  ["Good 2", ["Pittsburgh", "New York"]],
  ["Employee 1", ["New York", "Chicago", "New Orleans", "San Farnsisco"]],
  ["Employee 1", ["New York", "Chicago", "New Orleans", "San Farnsisco"]],
  ["Bridge 4", ["Cincinnati", "Duluth", "St Louis", "Kansas City"]],
  ["Bridge 4", ["Cincinnati", "Duluth", "St Louis", "Kansas City"]],
  ["Factory 3", ["Albany", "New York", "Washington", "Pittsburgh"]],
  ["Factory 3", ["Albany", "New York", "Washington", "Pittsburgh"]],
  ["House/Bank 2", ["New Orleans", "Atlanta"]],
  ["House/Bank 2", ["New Orleans", "Atlanta"]],
  ["Train 3", ["Boston", "New York"]],
  ["Train 3", ["Boston", "New York"]],
  ["Donation 2", ["Chicago", "Omaha"]],
  ["Donation 2", ["Chicago", "Omaha"]],
  ["Construction 3", ["Boston", "Washington"]],
  ["Construction 3", ["Boston", "Washington"]],
  ["HR 3", ["Salt Lake City", "Reno"]],
  ["HR 3", ["Salt Lake City", "Reno"]],
  ["R&D 3", ["New Orleans", "Houston"]],
  ["R&D 3", ["New Orleans", "Houston"]],
  ["Management 3", ["St Louis", "Chicago"]],
  ["Management 3", ["St Louis", "Chicago"]],
  ["Department 1", ["San Fransisco", "Los Angeles"]],
  ["Department 1", ["San Fransisco", "Los Angeles"]],
]

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

const Carnegie = () => {
  const [timeline, setTimeline] = useState([]);
  const [depts, setDepts] = useState([]);
  const [donats, setDonats] = useState([]);
  const [cities, setCities] = useState([]);
  
  const updateLayout = (event) => {
    const players = event.target.value;
    shuffle(timelineTiles)
    shuffle(departmentTiles)
    shuffle(randomizerCards)

    var timeline = []
    var depts = []
    for (let x in timelineTiles.slice(0,4)) {
      shuffle(timelineTiles[x])
      timeline.push(timelineTiles[x][0])
    }
    setTimeline(timeline);

    function setDummy(maxdisks) {
      var donats = []
      var cities = []
      var disks = 0
      var i = 0
      while (disks<maxdisks) {
        const card = randomizerCards[i]
        if (!donats.includes(card[0])) {
          donats.push(card[0])
          disks += 1
        }
        if (disks>=maxdisks) {break;}

        for (let x in card[1]) {
          cities.push(card[1][x])
          disks += 1
          if (disks>=maxdisks) {break;}
        }
        i += 1
      }
      cities.sort()
      donats.sort()
      setCities(cities)
      setDonats(donats) 
    }

    if (players === "2p") {
      depts = departmentTiles.slice(0,16)
      setDummy(18)
    }
    else if (players === "3p") {
      depts = departmentTiles.slice(0,8)
      setDummy(9)
    }
    else {
      depts = departmentTiles.slice(0,4)
      setDummy(0)

    }
    depts.sort(function (a, b) {return a-b;}); //numeric sort
    setDepts(depts);

  }


  return (    
    <div className='App'>
      <header className="App-header">
        <div>        
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button value="2p" onClick={updateLayout}>2p</Button>
            <Button value="3p" onClick={updateLayout}>3p</Button>
            <Button value="4p" onClick={updateLayout}>4p</Button>
          </ButtonGroup>
        </div>
        <div>
          <ul>
            <li><b>Timeline:</b> {timeline.join(" - ")} </li>
            <li><b>Remove Departments:</b> {depts.join(" - ")} </li>
            <li><b>Blocked Donations:</b> {donats.join(" - ")} </li>
            <li><b>Blocked Cities:</b> {cities.join(" - ")} </li>

          </ul>
        </div>
        

      </header>                    
    </div>

  );
};

export default Carnegie;