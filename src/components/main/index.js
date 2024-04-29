import React, { Component } from "react";
import "./index.css";
import Search from "../search";
import Result from "../result";
// import * as Loader from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Main extends Component {
  state = {
    searchText: "",
    searchResult: "",
    loading: false,
  };

  handleSearch = (text) => {
    this.setState({ searchText: text, loading: true }, this.getSearchResult);
    console.log(text);
  };

  handleSearchResult = (result) => {
    this.setState({ searchResult: result, loading: false });
    // console.log(result);
  };

  getSearchResult = async () => {
    const { searchText } = this.state;
    const url = "https://v-search-backend.vercel.app/users/" + searchText;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    this.handleSearchResult(data);
  };

  render() {
    const { searchResult, loading } = this.state;
    return (
      <div className="main-container">
        <div>
          <h1 className="main-heading">Search your Data</h1>
        </div>
        <Search onSearch={this.handleSearch} />
        <div className="result-container">
          {loading ? (
            <div className="loader-container">
              <ThreeDots
                type="ThreeDots"
                color="#022249"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <Result result={searchResult} searchText={this.state.searchText} />
          )}
        </div>
      </div>
    );
  }
}
