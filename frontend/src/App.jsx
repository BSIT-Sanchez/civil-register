import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard"
import AdminUsers from "./pages/AdminDashboard/AdminUsers"
import AdminAnnouncements from "./pages/AdminDashboard/AdminAnnouncements"
import BirthCertificate from "./pages/AdminDashboard/BirthCertificate/BirthCertificate"
import BirthRecord from "./pages/AdminDashboard/BirthCertificate/BirthRecords"
import BirthIssuance from "./pages/AdminDashboard/BirthCertificate/BirthIssuance"
import MarriageCertificate from "./pages/AdminDashboard/MarriageCertificate/MarriageCertificate"
import MarriageIssuance from "./pages/AdminDashboard/MarriageCertificate/MarriageIssuance"
import MarriageRecords from "./pages/AdminDashboard/MarriageCertificate/MarriageRecords"
import DeathCertificate from "./pages/AdminDashboard/DeathCertificate/DeathCertificate"
import DeathIssuance from "./pages/AdminDashboard/DeathCertificate/DeathIssuance"
import DeathRecords from "./pages/AdminDashboard/DeathCertificate/DeathRecords"
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard"
import Notfound from "./pages/Notfound"
import Login from "./pages/Login"
import ResidentDashboard from "./pages/ResidentDashboard/ResidentDashboard"
import Register from "./pages/Register";
import AdminProfile from "./pages/AdminDashboard/AdminProfile"
import ResidentBirthCertificate from "./pages/ResidentDashboard/BirthCertificate/ResidentBirthCertificate"
import ResidentDeathCertificate from "./pages/ResidentDashboard/DeathCertificate/ResidentDeathCertificate"
import ResidentMarriageCertificate from "./pages/ResidentDashboard/MarriageCertificate/ResidentMarriageCertificate"
import ResidentMarriageRequest from "./pages/ResidentDashboard/MarriageCertificate/ResidentMarriageRequest"
import ResidentDeathDocumentStatus from "./pages/ResidentDashboard/DeathCertificate/ResidentDeathDocumentStatus"
import ResidentDeathRequest from "./pages/ResidentDashboard/DeathCertificate/ResidentDeathRequest"
import ResidentMarriageDocumentStatus from "./pages/ResidentDashboard/MarriageCertificate/ResidentMarriageDocumetStatus"
import ResidentBirthRequest from "./pages/ResidentDashboard/BirthCertificate/ResidentBirthRequest"
import ResidentBirthDocumentStatus from "./pages/ResidentDashboard/BirthCertificate/ResidentBirthDocumentStatus"
 

const App = () => {
  
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

       
      <Route path="/AdminDashboard" element={<AdminDashboard /> }/>
      <Route path="/AdminDashboards/users" element={<AdminUsers/>}/>
      <Route path="/AdminDashboards/profile" element={<AdminProfile/>}/>
      <Route path="/AdminDashboards/announcements" element={<AdminAnnouncements/>}/>

      <Route path="/AdminDashboards/birthCertificate" element={<BirthCertificate/>}/>
      <Route path="/AdminDashboards/birthCertificate/registration"  element={<BirthCertificate/>}/>
      <Route path="/AdminDashboards/birthCertificate/records"  element={<BirthRecord/>}/>
      <Route path="/AdminDashboards/birthCertificate/issuance"  element={<BirthIssuance/>}/>

      <Route path="/AdminDashboards/marriageCertificate"  element={<MarriageCertificate/>}/>
      <Route path="/AdminDashboards/marriageCertificate/registration"  element={<MarriageCertificate/>}/>
      <Route path="/AdminDashboards/marriageCertificate/issuance"  element={<MarriageIssuance/>}/>
      <Route path="/AdminDashboards/marriageCertificate/records"  element={<MarriageRecords/>}/>

      <Route path="/AdminDashboards/deathCertificate"  element={<DeathCertificate/>}/>
      <Route path="/AdminDashboards/deathCertificate/registration"  element={<DeathCertificate/>}/>
      <Route path="/AdminDashboards/deathCertificate/issuance"  element={<DeathIssuance/>}/>
      <Route path="/AdminDashboards/deathCertificate/records"  element={<DeathRecords/>}/>


      <Route path="/EmployeeDashboard" element={<EmployeeDashboard />}/>






      <Route path="/ResidentDashboard" element={ <ResidentDashboard />}/>
      <Route path="/ResidentDashboards/birthCertificate" element={<ResidentBirthCertificate/>}/>
      <Route path="/ResidentDashboards/birthCertificate/registration"  element={<ResidentBirthCertificate/>}/>
      <Route path="/ResidentDashboards/birthCertificate/request"  element={<ResidentBirthRequest/>}/>
      <Route path="/ResidentDashboards/birthCertificate/documentStatus"  element={<ResidentBirthDocumentStatus/>}/>

      <Route path="/ResidentDashboards/marriageCertificate"  element={<MarriageCertificate/>}/>
      <Route path="/ResidentDashboards/marriageCertificate/registration"  element={<ResidentMarriageCertificate/>}/>
      <Route path="/ResidentDashboards/marriageCertificate/request"  element={< ResidentMarriageRequest/>}/>
      <Route path="/ResidentDashboards/marriageCertificate/documentStatus"  element={<ResidentMarriageDocumentStatus/>}/>

      <Route path="/ResidentDashboards/deathCertificate"  element={<ResidentDeathCertificate/>}/>
      <Route path="/ResidentDashboards/deathCertificate/registration"  element={<ResidentDeathCertificate/>}/>
      <Route path="/ResidentDashboards/deathCertificate/request"  element={<ResidentDeathRequest/>}/>
      <Route path="/ResidentDashboards/deathCertificate/documentStatus"  element={<ResidentDeathDocumentStatus/>}/>
      
     


    </Routes>
  )
}
export default App