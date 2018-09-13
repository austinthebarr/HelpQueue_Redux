import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import { v4 } from 'uuid';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {[newTicketId]: newTicket});
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);                                  
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList : newMasterTicketList});
  }

  componentDidMount() { 
    this.dude = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000);
  }

  componentWillUnmount() {
    clearInterval(this.dude);
  }  

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  render(){
    console.log(this.state.masterTicketList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={props => <Admin 
            ticketList={this.state.masterTicketList} 
            currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;