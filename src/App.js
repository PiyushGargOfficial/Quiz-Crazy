import Login from "./components/loginPage/Login";
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Quiz from './components/QuizPage/Quiz'

function App() {
  return (
    <Router>
      <div className="app">
      
        <Routes>
          <Route path ='/' exact element={<Login/>} />
          <Route path ='/quiz' exact element={<Quiz/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
