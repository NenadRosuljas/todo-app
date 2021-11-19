import React from 'react';

const CourseGoalList = (props) => {
  return (
    <ul className='goal-list'>
      {props.items.map((goal) => (
        <p>{goal.text}</p>
      ))}
    </ul>
  );
};

export default CourseGoalList;
