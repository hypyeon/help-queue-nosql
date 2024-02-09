import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import { serverTimestamp } from "firebase/firestore";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    props.onNewTicketCreation({
      names: e.target.names.value, 
      location: e.target.location.value, 
      issue: e.target.issue.value, 
      // id: v4()
      timeOpen: serverTimestamp()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
