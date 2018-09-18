import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';


class NewTicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisableOnPage: true});
  }

  render(){
    let currentlyVisableContent = null;
    if (this.state.formVisableOnPage){
      currentlyVisableContent = <NewTicketForm/>;
    } else {
      currentlyVisableContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisableContent}
      </div>
    );
  }
}


export default NewTicketControl;
