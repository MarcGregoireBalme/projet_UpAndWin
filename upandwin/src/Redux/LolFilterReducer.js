const LolFilterReducer = (state = {
  ChoisirLane: false,
  TopLane: false,
  MidLane: false,
  BotLane: false,
  Jungle: false,
  Support: false,
}, action) => {
  switch (action.type) {
    case 'HANDLE_CHECK':
      return {
        ...state,
        ChoisirLane: action.lolFilter.ChoisirLane,
        TopLane: action.lolFilter.TopLane,
        MidLane: action.lolFilter.MidLane,
        BotLane: action.lolFilter.BotLane,
        Jungle: action.lolFilter.Jungle,
        Support: action.lolFilter.Support,
      };
    default:
      return state;
  }
};

export default LolFilterReducer;
