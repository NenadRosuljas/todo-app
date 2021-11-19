import './App.css';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

function App() {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'></section>
    </div>
  );
}

export default App;
