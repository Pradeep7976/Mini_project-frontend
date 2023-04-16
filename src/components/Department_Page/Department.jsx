import React, { useEffect } from "react";
import Header from "./Header/Header";
import ReportedProblem from "./Reported_Problems/R_Problems";
import axios from "axios";
import { useState } from "react";
const Department = () => {
  localStorage.setItem("did", 3);
  const [Name, setname] = useState();
  const Port = "https://expensive-hem-elk.cyclic.app";
  const port = "http://localhost:7000";
  useEffect(() => {
    axios
      .post(port + "/api/dept/getdeptname", {
        did: localStorage.getItem("did"),
      })
      .then((result) => {
        console.log(result.data);
        setname(result.data);
      });
  }, []);
  return (
    <>
      <Header name={Name} />
      <ReportedProblem name={Name} />
    </>
  );
};

export default Department;
