import React from "react";
import PropTypes from "prop-types";
import GuestInputForm from "./GuestInputForm";

const Header = props => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        handleInput={props.handleInput}
        pendingGuest={props.pendingGuest}
      />
    </header>
  );
};

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default Header;
