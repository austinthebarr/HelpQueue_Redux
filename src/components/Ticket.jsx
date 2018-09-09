import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
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
        <p><em>{props.issue}</em></p>
        <hr />
      </div>
    </div>

  );
}
//  the lowercase version (Ticket.propTypes) is declaring a propTypes property on our Ticket component. The upper-case version (PropTypes.string) is referring to the PropTypes class we import at the top of the file in the line import PropTypes from "prop-types";.


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};
export default Ticket;
