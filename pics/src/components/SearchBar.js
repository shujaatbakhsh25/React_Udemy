import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(e) {
    console.log("input was clicked");
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={e => {
            this.onFormSubmit(e);
          }}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
                console.log(this.state);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
