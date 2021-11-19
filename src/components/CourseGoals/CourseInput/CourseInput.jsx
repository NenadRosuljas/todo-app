import React from 'react';
import './CourseInput.css';

const CourseInput = () => {
  return (
    <form>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' />
      </div>
      <button type='submit'>Add goal</button>
    </form>
  );
};

export default CourseInput;
