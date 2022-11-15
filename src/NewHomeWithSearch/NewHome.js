import "./NewHome.css";
import React, { useEffect, useState } from "react";
import * as Api from "../Api";
import { Link } from "react-router-dom";

import TextTruncate from "react-text-truncate"; // recommend
import { Button } from "@material-ui/core";
import Highlighter from "react-highlight-words";
import { setInfo } from "state/reducers/search.reducer";
import { useDispatch, useSelector } from "react-redux";
import history from "../History";

function NewHome({ navigation }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search == "") return;

    //
    try {
      Api.call(
        "/search/searchengine?title=" + search,
        { method: "GET" },
        (response) => {
          //if success
          response = JSON.parse(response);

          setResults(response.hits.hits);
          setSearchInfo(response.hits.total);
        },
        (error, status, content) => {
          //error send to snackbar
        }
      );
    } catch (error) {
      console.log(error);
    }

    // const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    // const response = await fetch(endpoint);

    // if (!response.ok) {
    //   throw Error(response.statusText);
    // }

    // const json = await response.json();
    // setResults(json.query.search);
    // setSearchInfo(json.query.searchinfo);
  };

  const handleClick = (info) => {
    dispatch(setInfo(info._source));
    history.push("/readmore");
  };
  return (
    <div className="NewHome">
      <header>
        <h1>Wiki Seeker</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {searchInfo.value ? <p>Search Results: {searchInfo.value}</p> : ""}
        {search ? <p>Searched Keyword: {search}</p> : ""}
      </header>
      <div className="results">
        {results.map((result, i) => {
          //   const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div className="result" key={i}>
              <h3>
                <Highlighter
                  highlightClassName="YourHighlightClass"
                  searchWords={[search]}
                  autoEscape={true}
                  textToHighlight={result._source.title}
                />
              </h3>
              <h4>Abstract</h4>
              <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={result._source.text}
                // textTruncateChild={<a href="#">Read on</a>}
              />
              {/* <p numberOfLines={1}>{result._source.text}</p> */}
              <br></br>

              <Button
                onClick={(e) => handleClick(result)}
                title="Go to Details"
                // color="white"
              >
                Go to details
              </Button>

              {/* <a href={url} target="_blank" rel="noreferrer">
                 Read more
              </a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewHome;
