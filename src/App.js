
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Quiz from "./component/Quiz";
import Result from "./component/Result";


function App() {

  return (

 <>

<BrowserRouter>
 <Routes>
  <Route path='/' element={<Quiz/>}/>
  <Route path="/result" element={<Result/>}/>
  <Route path="*" element={<>
  <h2>No Page Found 404 Error</h2>
  </>}/>
 </Routes>
 </BrowserRouter>


 </>
  )
}

export default App;
