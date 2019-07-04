import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './LolDrawer.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawerComponent({ dispatch, videos }) {
  const classes = useStyles();
  const filters = ['ChoisirLane', 'BotLane', 'Jungle', 'MidLane', 'Support', 'TopLane'];
  const [state, setState] = React.useState({
    right: false,
    ChoisirLane: false,
    TopLane: false,
    MidLane: false,
    BotLane: false,
    Jungle: false,
    Support: false,
  });

  const handleCheck = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setState({
      [name]: value,
    });
  };

  useEffect(
    () => {
      dispatch({
        type: 'HANDLE_CHECK',
        lolFilter: state,
      });
    },
    [state],
  );
  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <p className="FiltersTitle">
          Filtrer par :
        </p>
      </div>
      <List>
        <div className="FiltersList">
          {filters
            .map(filter => (
              <div key={filter}>
                {filter}
                <span className="FiltersNumber">
                  (
                  {(videos.filter(video => video.lane.includes(filter)).length)}
                  )
                </span>
                <input
                  name={filter}
                  type="checkbox"
                  checked={window[filter]}
                  onChange={handleCheck}
                />
                <br />
              </div>
            ))
          }
        </div>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={toggleDrawer('right', true)} className="Filter-button" />
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}

const mapStateToProps = state => ({
  lolFilter: state.lolFilter,
});

export default connect(mapStateToProps)(SwipeableTemporaryDrawerComponent);
