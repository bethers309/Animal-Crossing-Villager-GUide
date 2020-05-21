import React from 'react';
import './App.css';
import AddForm from './components/AddForm';
import DelForm from './components/DelForm';
import Char from './components/VillagerCard';
import { Grid, Paper } from '@material-ui/core';
import { Button } from 'react-bootstrap';


class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      villagers: []
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://localhost:3001/villagers')
      .then(res => res.json())
      .then((villager) => {
        this.setState({ villagers: villager.info })
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  putData(putname, putgender, putpersonality, putspecies, putbday, putphrase, putpic) {
    putname = putname.toLowerCase().split(' ').map((s) => s[0].toUpperCase() + s.substring(1)).join(' ');
    console.log(putname);
    let data = { name: putname, gender: putgender, personality: putpersonality, species: putspecies, bday: putbday, phrase: putphrase, pic: putpic };
    let options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/villagers', options)
      .then(res => res.json())
      .then((villager) => { console.log(villager.error) })
    this.getData();
  }

  delData(dname) {
    let data = { name: dname };
    let options = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/villagers', options);
    this.getData();
  }

  updateData(upname, upphrase, uppic) {
    let data = { name: upname, phrase: upphrase, pic: uppic };
    let options = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/villagers', options);
    this.getData();
  }

  addVillager(name, gender, personality, species, bday, catchphrase, pic) {
    this.putData(name, gender, personality, species, bday, catchphrase, pic);
    this.getData();
    this.setState(this.state);

  }

  removeVillager(name) {
    name = name[0].toUpperCase() + name.substring(1);
    this.delData(name);
    this.getData();
    this.setState(this.state);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className='sign' alt="Animal Crossing New Horizon's logo" src="https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png" />
          {/* <h2 id="Title">Animal Crossing Villagers!</h2> */}
        </div>
        <div className='backdrop'>
          <div className='buttons'>
            <Button variant='primary' style={{ 'backgroundColor': '#E8CA1F' }} onClick={() => { this.getData() }}>Refresh!</Button>
            <AddForm handleSubmit={(name, gender, personality, species, bday, phrase, pic) => { this.addVillager(name, gender, personality, species, bday, phrase, pic) }} />
            <DelForm handleDel={(name) => { this.removeVillager(name) }} />
          </div>
        </div>
        <div className='grid'>
          <Grid container
            justify="space-around"
            alignItems="center"
            className="root"
            spacing={2}>
            {this.state.villagers.map(villager => (
              <Grid key={villager.name} item>
                <Paper className="paper">
                  <img className="vPhoto" alt={villager.name} src={villager.pic} />
                  <Char
                    name={villager.name}
                    gender={villager.gender}
                    personality={villager.personality}
                    species={villager.species}
                    bday={villager.bday}
                    phrase={villager.phrase}
                    pic={villager.pic}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

    )
  }
}

export default App;
