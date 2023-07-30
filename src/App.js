import {Routes,Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Landing} from "./components/Landing/Landing";
import {Cabinet} from "./components/Cabinet/Cabinet";
import {Applications} from "./components/Applications/Applications";
import {Tree} from "./components/Tree/Tree";
import {TreeSpecialities} from "./components/Tree/TreeSpecialities/TreeSpecialities";
import {TreeSpecialitiesDescript} from "./components/Tree/TreeSpecialitiesDescript/TreeSpecialitiesDescript";
import {Services} from "./components/Services/Services";
import {Specialities} from "./components/Services/Specialities/Specialities";
import {Loans} from "./components/Services/Loans/Loans";
import {Proforient} from "./components/Proforient/Proforient";
import {Start} from "./components/Proforient/Start/Start";
import {Question} from "./components/Proforient/Question/Question";
import {Finish} from "./components/Proforient/Finish/Finish";
import {LoansApplication} from "./components/Services/LoansApplication/LoansApplication";
import {MyLoansApplication} from "./components/Services/MyLoansApplication/MyLoansApplication";
import {MyLoanApplicationInfo} from "./components/Services/MyLoanApplicationInfo/MyLoanApplicationInfo";
import {Universities} from "./components/Services/Universities/Universities";
import {UniversityInfo} from "./components/Services/UniversityInfo/UniversityInfo";
import {Steps} from "./components/Steps/Steps";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigation/>}>
              <Route index element={<Landing/>}/>
              <Route path="cabinet" element={<Cabinet/>}/>
              <Route path="proforient" element={<Proforient/>}>
                  <Route path="start" element={<Start/>}/>
                  <Route path="question" element={<Question/>}/>
                  <Route path="finish" element={<Finish/>}/>
              </Route>
              <Route path="services" element={<Services/>}>
                  <Route path="specialities" element={<Specialities/>}/>
                  <Route path="universities" element={<Universities/>}/>
                  <Route path="university_info" element={<UniversityInfo/>}/>
                  <Route path="loans" element={<Loans/>}/>
                  <Route path="loans_application" element={<LoansApplication/>}/>
                  <Route path="my_loans_application" element={<MyLoansApplication/>}/>
                  <Route path="my_loan_application_info" element={<MyLoanApplicationInfo/>}/>
              </Route>
              <Route path="applications" element={<Applications/>}/>
              <Route path="tree" element={<Tree/>}>
                  <Route path="tree_specialities" element={<TreeSpecialities/>}/>
                  <Route path="tree_specialities_descript" element={<TreeSpecialitiesDescript/>}/>
              </Route>
              <Route path="steps" element={<Steps/>}/>
          </Route>
      </Routes>
  );
}
export default App;
