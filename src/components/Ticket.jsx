import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

const Ticket = (props) => {
  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }
  const ticketInformation =
    <div>
      <style  jsx>{`

          .color-toggle {
            background-color: green;
          }
          .color-toggle:hover {
            background-color: pink;
          }

          `}</style>
      <div className="color-toggle">
        <h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime}</h4>
        <hr/>
      </div>
    </div>;

  if (props.currentRouterPath === '/admin'){
    return(<div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
      {ticketInformation}
    </div>);
  } else {
    return(
      <div>
        {ticketInformation}
      </div>
    );
  }
};
//  the lowercase version (Ticket.propTypes) is declaring a propTypes property on our Ticket component. The upper-case version (PropTypes.string) is referring to the PropTypes class we import at the top of the file in the line import PropTypes from "prop-types";.


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};
export default connect()(Ticket);
