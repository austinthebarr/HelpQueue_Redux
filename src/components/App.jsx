import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';



class App extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }



  updateTicketElapsedWaitTime() {
  //   let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
  //   Object.keys(newMasterTicketList).forEach(ticketId => {
  //     newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
  //   });
  //   this.setState({masterTicketList : newMasterTicketList});
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

  render(){
    console.log(this.state.masterTicketList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl/>} />
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

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
