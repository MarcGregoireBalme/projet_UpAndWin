/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import './displayVideo.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
  },
});

const Graph = () => {
  const classes = useStyles();

  const [Teamplay, setTeamplay] = useState(50);
  const [Patience, setPatience] = useState(50);
  const [Experience, setExperience] = useState(50);
  const [Communication, setCommunication] = useState(50);
  const [Initiative, setInitiative] = useState(50);
  const [buttonType, setButtonType] = useState(true);

  useEffect(() => {
    const userId = sessionStorage.getItem('user_id');
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3005/attributs/${userId}`,
      );
      setTeamplay(res.data[0]);
      setPatience(res.data[1]);
      setExperience(res.data[2]);
      setCommunication(res.data[3]);
      setInitiative(res.data[4]);
    };
    fetchData();
  }, []);

  const handleSliderChangeTeamplay = (event, newTeamplay) => {
    setTeamplay(newTeamplay);
  };
  const handleSliderChangePatience = (event, newPatience) => {
    setPatience(newPatience);
  };
  const handleSliderChangeExperience = (event, newExperience) => {
    setExperience(newExperience);
  };
  const handleSliderChangeCommunication = (event, newCommunication) => {
    setCommunication(newCommunication);
  };
  const handleSliderChangeInitiative = (event, newInitiative) => {
    setInitiative(newInitiative);
  };

  const data = [
    {
      data: {
        Teamplay: (Teamplay / 100),
        Patience: (Patience / 100),
        Experience: (Experience / 100),
        Communication: (Communication / 100),
        Initiative: (Initiative / 100),
      },
      meta: { color: 'red' },
    },
  ];

  const captions = {
    // columns
    Teamplay: 'Teamplay',
    Patience: 'Patience',
    Experience: 'Experience',
    Communication: 'Communication',
    Initiative: 'Initiative',
  };
  const defaultOptions = {
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 13,
    }),
  };

  const attributs = [Teamplay, Patience, Experience, Communication, Initiative];

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonType(!buttonType);
    const userId = sessionStorage.getItem('user_id');
    axios
      .put(`http://localhost:3005/attributs/${userId}`, {
        attributs,
      });
  };

  const buttonStatus = buttonType ? 'Button' : 'ButtonPress';

  return (
    <>
      <div className={classes.root} style={{ marginTop: '40px' }}>
        <Grid container spacing={2} alignItems="center">
          Teamplay
          <Grid item xs>
            <Slider
              value={typeof Teamplay === 'number' ? Teamplay : 0}
              onChange={handleSliderChangeTeamplay}
              valueLabelDisplay="auto"
            />
          </Grid>
          {Teamplay}
        </Grid>
        <Grid container spacing={2} alignItems="center">
          Patience
          <Grid item xs>
            <Slider
              value={typeof Patience === 'number' ? Patience : 0}
              onChange={handleSliderChangePatience}
              valueLabelDisplay="auto"
            />
          </Grid>
          {Patience}
        </Grid>
        <Grid container spacing={2} alignItems="center">
          Experience
          <Grid item xs>
            <Slider
              value={typeof Experience === 'number' ? Experience : 0}
              onChange={handleSliderChangeExperience}
              valueLabelDisplay="auto"
            />
          </Grid>
          {Experience}
        </Grid>
        <Grid container spacing={2} alignItems="center">
          Communication
          <Grid item xs>
            <Slider
              value={typeof Communication === 'number' ? Communication : 0}
              onChange={handleSliderChangeCommunication}
              valueLabelDisplay="auto"
            />
          </Grid>
          {Communication}
        </Grid>
        <Grid container spacing={2} alignItems="center">
          Initiative
          <Grid item xs>
            <Slider
              value={typeof Initiative === 'number' ? Initiative : 0}
              onChange={handleSliderChangeInitiative}
              valueLabelDisplay="auto"
            />
          </Grid>
          {Initiative}
        </Grid>
      </div>

      <div className="RowButton">
        <button type="submit" className={buttonStatus} onClick={handleSubmit}>Enregistrer</button>
      </div>

      <RadarChart
        captions={captions}
        data={data}
        size={340}
        options={defaultOptions}
      />
    </>
  );
};


export default Graph;
