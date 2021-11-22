import React, { useState } from 'react';
import Button from './../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredText, setEnteredText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
