import React from 'react';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = (props) => {
  return (
    <ul className='goal-list'>
      {props.items.map((goal) => (
        <CourseGoalItem>{goal.text}</CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
