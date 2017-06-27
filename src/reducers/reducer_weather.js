import { FETCH_WEATHER, CURRENT_WEATHER } from '../actions/index';

export function WeatherReducer(state={forecast:[],current:[]},action){

  switch (action.type) {
  case FETCH_WEATHER:
    //return state.concat([action.payload.data]); //not mutating ,
    // creating new array which adds data rather than
    // pushing into existing state array
    return {
                ...state,
                forecast: [action.payload.data, ...state.forecast]
            };
  case CURRENT_WEATHER:
    //return  {'current':[action.payload.data, ...state.current],'forecast':[]};
    return {
                ...state,
                current: [action.payload.data, ...state.current]
            };
  }

  return state;
}
