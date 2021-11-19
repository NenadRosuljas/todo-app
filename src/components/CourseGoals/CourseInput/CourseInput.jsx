import React, { useState } from 'react';
import Button from './../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const goalInputChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
