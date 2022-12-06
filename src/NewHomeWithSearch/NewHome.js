import "./NewHome.css";
import React, { useEffect, useState } from "react";
import * as Api from "../Api";
import { Link } from "react-router-dom";
import { SearchInfoSelector } from "state/reducers/search.reducer";

import TextTruncate from "react-text-truncate"; // recommend
import { Button } from "@material-ui/core";
import Highlighter from "react-highlight-words";
import { setInfo } from "state/reducers/search.reducer";
import { useDispatch, useSelector } from "react-redux";
import history from "../History";
import Hovercard from "hovercard";
import { useRef } from "react";

import Wrapper from "react-wiki-preview";

const cards = new Hovercard({
  lang: "en",
});

const HoverText = ({ searchWords, textToHighlight, result }) => {
  const elementRef = useRef();
  const info = useSelector(SearchInfoSelector);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  console.log("the searchwords", searchWords);
  console.log("The texttohighlight is: ", textToHighlight);
  const handleMouseOver = (e) => {
    console.log("Mouseover", e);
    setShow(true);
  };
  const handleMouseOut = (e) => {
    console.log("MouseOut", e);
    setShow(false);
  };
  useEffect(() => {
    const cards = new Hovercard({
      lang: "en",
      getFetchEndpoint: (word) => {
        console.log({ word });
        return `https://en.wikipedia.org/api/rest_v1/page/summary/${word?.toLowerCase()}`;
      },
      getHeading: (result) => {
        console.log({ result });
        return result.title;
      },
      template: (wikiResult) => {
        return `<div class="hovercard-card ${
          wikiResult?.image ? "hovercard-has-image" : ""
        }">
        <h3 class="hovercard-title"><span class="mw-page-title-main">${
          wikiResult?.heading
        }</span></h3>
        <a href="https://en.wikipedia.org/wiki/${wikiResult?.heading}">${
          wikiResult?.heading
        }</a>
    <p class="hovercard-description">${wikiResult?.body}</p>
    <div class="hovercard-image" style="background-image: url(${
      wikiResult?.image
    })"></div>
    </div>
      `;
      },
    });
  }, [searchWords]);
  // useEffect(() => {
  //   const element = elementRef.current;
  //   console.log("The element is", element);
  //   element.addEventListener("mouseover", handleMouseOver);
  //   element.addEventListener("mouseout", handleMouseOut);
  //   return () => {
  //     element.removeEventListener("mouseover", handleMouseOver);
  //     element.removeEventListener("mouseout", handleMouseOut);
  //   };
  // }, []);
  const handleClick = (info) => {
    dispatch(setInfo(info._source));
    history.push("/readmore");
  };
  return (
    <div style={{ position: "relative" }} ref={elementRef}>
      <h3>
        <Highlighter
          highlightClassName="hovercard"
          searchWords={searchWords}
          autoEscape={true}
          textToHighlight={textToHighlight}
        />
      </h3>
      <>
        <h4>Abstract</h4>
        <TextTruncate
          line={3}
          element="span"
          truncateText="…"
          text={textToHighlight}
          // textTruncateChild={<a href="#">Read on</a>}
        />
        <div>
          <Button
            onClick={(e) => handleClick(result)}
            title="Go to Details"
            // color="white"
          >
            Go to details
          </Button>
        </div>
      </>
      {show ? (
        Object.keys(info).length <= 0 ? (
          <div className="hover-effect">Nothing coming here</div>
        ) : (
          <div className="hover-effect">Some info is coming here</div>
        )
      ) : null}
    </div>
  );
};
function NewHome({ navigation }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(search.replace(/(<([^>]+)>)/gi, ""));
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

  return (
    <div className="NewHome">
      <header>
        <h1>Wiki Seeker</h1>
        <div className="search-box2">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="What are you looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {searchInfo.value ? <p>Search Results: {searchInfo.value}</p> : ""}
        {search ? (
          <p>Searched Keyword: {search.replace(/(<([^>]+)>)/gi, "")}</p>
        ) : (
          ""
        )}
      </header>

      <div className="results">
        {results.map((result, i) => {
          //   const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <div className="result" key={i}>
              <HoverText
                result={result}
                searchWords={[search]}
                textToHighlight={result._source.title}
              />

              {/* <span class="hovercard">search</span> */}

              {/* <p numberOfLines={1}>{result._source.text}</p> */}
              <br></br>

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
