import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ShowTodo from './components/showTodo/ShowTodo';
import CreateTodo from './components/createTodo/CreateTodo';

function App() {
  return (
    <div className="appContents">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShowTodo/>}/>
          <Route path="createtodo" element={<CreateTodo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
