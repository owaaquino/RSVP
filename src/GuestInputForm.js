import React from "react";
import PropTypes from "prop-types";

const GuestInputForm = props => {
  return (
    <form onSubmit={props.newGuestSubmitHandler}>
      <input
        type="text"
        value={props.pendingGuest}
        placeholder="Invite Someone"
        onChange={props.handleInput}
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

GuestInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default GuestInputForm;
