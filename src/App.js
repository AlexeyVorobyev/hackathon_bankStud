import {Routes,Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Landing} from "./components/Landing/Landing";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Landing/>}/>
          </Route>
      </Routes>
  );
}
export default App;
