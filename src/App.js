import React, { Component } from "react";
import "./App.css";
import GuestList from "./GuestList";
import Counter from "./Counter";
import Header from "./Header";

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      // {
      //   name: "Bert",
      //   isConfirmed: false,
      //   isEditing: false
      // },
      // {
      //   name: "Juan",
      //   isConfirmed: true,
      //   isEditing: false
      // },
      // {
      //   name: "Julie",
      //   isConfirmed: false,
      //   isEditing: false
      // }
    ]
  };

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  toggleConfirmationAt = index => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  };

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  };

  toggleEditingAt = index => {
    this.toggleGuestPropertyAt("isEditing", index);
  };

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  };

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    });
  };

  handleNameInput = e => {
    this.setState({
      pendingGuest: e.target.value
    });
  };

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );
  // getUnconfirmedGuests = () =>

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleInput={this.handleNameInput}
        />
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{" "}
              Hide those who haven't responded
            </label>
          </div>
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />

          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
