import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data";

import Home from "../Home";
import Studentpage from "../StudentPages";
import ScoresPerAssignment from "../ScoresPerAssignment";
import studentProfiles from "../../data/dataStudentProfiles";

const App = () => {
  const [state] = useState(data);
  const [rightAssignment, setStateRightAssignment] = useState([]);
  const [checkedDifficult, setStateCheckedDifficult] = useState(true);
  const [checkedFunFactor, setStateCheckedFunFactor] = useState(true);

  const numberedStateData = state.map((object) => ({
    name: object.name,
    assignment: object.assignment,
    scoreDifficulty: parseInt(object.scoreDifficulty),
    scoreFunFactor: parseInt(object.scoreFunFactor),
  }));

  const getDataOfRightStudent = (student) => {
    return numberedStateData.filter((item) => item.name === student);
  };

  const getDataOfRightAssignment = (assignment) => {
    const rightAssignment = numberedStateData.filter(
      (item) => item.assignment === assignment
    );
    setStateRightAssignment(rightAssignment);
  };

  const allPersons = state.map((data) => data.name);
  const allUniquePersons = [...new Set(allPersons)];
  const allAssignments = state.map((data) => data.assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];

  const studentProfileInfo = studentProfiles.map((student, key) => (
    <div className="student-profile" key={allUniquePersons[key]}>
      <img src={`${student.photo}`} alt="Profile" />
      <p className="student-name">
        {allUniquePersons[key]} {student.lastName}
      </p>
      <div className="student-info">
        <p>{student.age} jaar oud</p>
        <p>{student.phoneNumber}</p>
        <p>{student.email}</p>
      </div>
    </div>
  ));

  const linkItemsNav = allUniquePersons.map((person) => (
    <li key={person} className="students">
      <Link to={`/${person}`}>{person}</Link>
    </li>
  ));

  const routeItemsNav = allUniquePersons.map((person) => (
    <Route path={`/${person}`} key={person}>
      <Studentpage
        person={person}
        getDataOfRightStudent={getDataOfRightStudent}
        assignments={allUniqueAssignments}
        studentProfiles={studentProfileInfo}
        checkedDifficult={checkedDifficult}
        setStateDifficult={setStateCheckedDifficult}
        checkedFunFactor={checkedFunFactor}
        setStateFunFactor={setStateCheckedFunFactor}
      />
    </Route>
  ));

  const getAverageScores = (assignment, typeOfScore) => {
    const filteredData = numberedStateData
      .filter((item) => item.assignment === assignment)
      .map((score) => score[typeOfScore]);
    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;
    return averageScore;
  };

  const dataWithAverageScores = allUniqueAssignments.map((assignment) => ({
    assignment: assignment,
    scoreDifficulty: getAverageScores(assignment, "scoreDifficulty"),
    scoreFunFactor: getAverageScores(assignment, "scoreFunFactor"),
  }));

  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <div>
            <ul>
              <li className="home">
                <Link className="home-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="home">
                <Link className="students-link" to="/">
                  Students
                </Link>
              </li>
              {linkItemsNav}
              <li className="assignments">
                <Link to="/score-per-assignment" className="home-link">
                  Assignments
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Switch>
            {routeItemsNav}
            <Route path="/score-per-assignment">
              <ScoresPerAssignment
                filterAssignments={getDataOfRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
              />
            </Route>
            <Route path="/">
              <Home
                dataAverageScore={dataWithAverageScores}
                filterAssignments={getDataOfRightAssignment}
                dataRightAssignment={rightAssignment}
                assignments={allUniqueAssignments}
                persons={allUniquePersons}
                checkedDifficult={checkedDifficult}
                setStateDifficult={setStateCheckedDifficult}
                checkedFunFactor={checkedFunFactor}
                setStateFunFactor={setStateCheckedFunFactor}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;