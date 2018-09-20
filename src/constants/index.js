import selectedTicketReducer from './selected-ticket-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
import * as types from './ActionTypes';

const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;
