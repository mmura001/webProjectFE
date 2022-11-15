import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import {
  Box,
  FormControl,
  OutlinedInput,
  Typography,
  useFormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as Api from "../Api";
import "../App.css";

function InsertNew() {
  const [title, setTitle] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [author, setAuthor] = useState("");
  const [degree, setDegree] = useState("");
  const [program, setProgram] = useState("");
  const [textt, setTextt] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  function handleSubmit() {
    var temp = {};
    temp["advisor"] = advisor;
    temp["title"] = title;
    temp["author"] = author;
    temp["degree"] = degree;
    temp["program"] = program;
    temp["text"] = textt;
    temp["title"] = title;
    temp["university"] = university;
    temp["year"] = year;
    // temp["pdf"] = selectedFile;

    try {
      Api.call(
        "/search/insert",
        { method: "POST", body: temp, file: selectedFile },
        (response) => {
          //if success
          response = JSON.parse(response);
        },
        (error, status, content) => {
          //error send to snackbar
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleInputChange = (e, key) => {
    switch (key) {
      case "advisor":
        setTitle(e.target.value);
        break;

      case "author":
        setAuthor(e.target.value);
        break;
      case "degree":
        setDegree(e.target.value);
        break;
      case "program":
        setProgram(e.target.value);
        break;
      case "university":
        setUniversity(e.target.value);
        break;
      case "title":
        setAdvisor(e.target.value);
        break;
      case "textt":
        setTextt(e.target.value);
        break;

      case "year":
        setYear(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="insert">
        <Box style={{ paddingTop: 80 }}>
          <h1>New Creation</h1>
        </Box>
        <Typography>Advisor</Typography>
        <input
          type="text"
          placeholder="advisor"
          onChange={(e) => handleInputChange(e, "advisor")}
        />
        <Typography>author</Typography>
        <input
          type="text"
          placeholder="author"
          onChange={(e) => handleInputChange(e, "author")}
        />
        <Typography>degree</Typography>
        <input
          type="text"
          placeholder="degree"
          onChange={(e) => handleInputChange(e, "degree")}
        />
        <Typography>program</Typography>
        <input
          type="text"
          placeholder="program"
          onChange={(e) => handleInputChange(e, "program")}
        />
        <Typography>university</Typography>
        <input
          type="text"
          placeholder="university"
          onChange={(e) => handleInputChange(e, "university")}
        />
        <Typography>title</Typography>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => handleInputChange(e, "title")}
        />
        <Typography>text</Typography>
        <input
          type="text"
          placeholder="text"
          onChange={(e) => handleInputChange(e, "textt")}
        />
        <Typography>year</Typography>
        <input
          type="text"
          placeholder="year"
          onChange={(e) => handleInputChange(e, "year")}
        />

        <input type="file" name="file" onChange={changeHandler} />
        {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}

        <button onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}

export default InsertNew;
