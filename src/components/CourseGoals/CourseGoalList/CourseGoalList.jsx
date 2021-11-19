import React from 'react';

const CourseGoalList = (props) => {
  return (
    <ul>
      {props.items.map((goal) => (
        <p>{goal.text}</p>
      ))}
    </ul>
  );
};

export default CourseGoalList;
