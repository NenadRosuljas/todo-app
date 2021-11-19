import React from 'react';

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