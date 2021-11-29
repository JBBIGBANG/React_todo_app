import React, { useState } from 'react';

import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
const App = () => {
  const [courseGoals, setCourseGoals] = useState( [
    {id: 'cg1', text: 'Finish The course'},
    {id: 'cg2', text: 'Learn all about the course main topic'},
    {id: 'cg3', text: 'Help Other students in the ccourse'},
    {id: 'cg4', text: 'Fine'},
  ]);
  

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal);
    });
  };

  return (
    <div className = "course-goal">
      <h2>Course Goals</h2>  
      <NewGoal onAddGoal = {addNewGoalHandler} /> 
      <GoalList goals = {courseGoals}/>   
    </div>
  );
};

export default App;




