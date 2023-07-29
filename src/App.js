import {Routes,Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Landing} from "./components/Landing/Landing";
import {Cabinet} from "./components/Cabinet/Cabinet";
import {Applications} from "./components/Applications/Applications";
import {Tree} from "./components/Tree/Tree";
import {TreeSpecialities} from "./components/Tree/TreeSpecialities/TreeSpecialities";
import {TreeSpecialitiesDescript} from "./components/Tree/TreeSpecialitiesDescript/TreeSpecialitiesDescript";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Landing/>}/>
              <Route path="cabinet" element={<Cabinet/>}/>
              <Route path="applications" element={<Applications/>}/>
              <Route path="tree" element={<Tree/>}>
                  <Route path="tree_specialities" element={<TreeSpecialities/>}/>
                  <Route path="tree_specialities_descript" element={<TreeSpecialitiesDescript/>}/>
              </Route>
          </Route>
      </Routes>
  );
}
export default App;
