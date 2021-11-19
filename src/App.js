import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} />;
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>{content}</section>
    </div>
  );
}

export default App;
