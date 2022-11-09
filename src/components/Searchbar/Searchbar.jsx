import { Component } from "react";

export default class Searchbar extends Component {
  render(){
    return <>
    <header>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>
        <input type="text" />
      </form>
    </header>
    </>;
  }
};
