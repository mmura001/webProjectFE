import React, { useEffect } from "react";
import { SearchInfoSelector } from "state/reducers/search.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "layout";
import { Button, Typography } from "@material-ui/core";
import { setInfo } from "state/reducers/search.reducer";

function ReadMore() {
  const dispatch = useDispatch();
  const info = useSelector(SearchInfoSelector);
  useEffect(() => {
    return () => {
      //   dispatch(setInfo({}));
    };
  }, []);
  const searchInfo = useSelector(SearchInfoSelector);
  console.log("THE INFO IS", searchInfo);
  if (Object.keys(info).length <= 0) {
    return (
      <Container>
        <h2>Are you lost?</h2>
      </Container>
    );
  }

  return (
    <Container>
      {/* <h1>Read More</h1>
       */}
      <Typography variant="h3" component="h3">
        Title - {info.title}
      </Typography>
      <Typography variant="h6">
        Author - {info.author}, Advisor - {info.advisor}
      </Typography>
      <Typography variant="h6">Year - {info.year}</Typography>
      {/* <Typography variant="h6">Advisor - {info.advisor}</Typography> */}
      <ul>
        {/* <li>{info.title}</li> */}
        <a
          style={{
            padding: "10px",
            background: "lightblue",
            borderRadius: "10px",
            cursor: "pointer",
            display: "inline-block",
            marginTop: "10px",
          }}
          href={
            info.pdf.indexOf("8080") != -1
              ? info.pdf
              : "http://localhost:8080/uploads/" + info.pdf
          }
          target="_blank"
          rel="noreferrer noopener"
        >
          <button style={{ background: "none", border: "none" }}>
            View Document
          </button>
        </a>
      </ul>
      <Typography variant="h6">University - {info.university}</Typography>
      <Typography variant="h6">
        Degree - {info.degree}, Program - {info.program}
      </Typography>
      <Typography variant="h4">ABSTRACT</Typography>
      <Typography variant="subtitle2">{info.text}</Typography>
    </Container>
  );
}

export default ReadMore;
