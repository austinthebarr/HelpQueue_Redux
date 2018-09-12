import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: []
    };
    
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);

  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  updateTicketElapsedWaitTime() {
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) => 
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList : newMasterTicketList});
  }

  componentDidMount() { 
    console.log('componentDidMount');
    this.dude = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    1000);
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   clearInterval(this.dude);
  // }  

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
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;