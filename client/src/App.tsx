import './App.css'
import { Navbar } from "./components/Navbar";
import { Editor } from './Editor';

const App = () => {
  return (<>
      <Navbar />
      <div className='mx-20 mt-20 py-4 bg-amber-100'>

      <Editor />
      </div>
  </>
  )
}

export default App;
