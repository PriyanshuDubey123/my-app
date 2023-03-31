import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";
import { Route, Routes} from "react-router-dom";
import Vehicle from "./Vehicle";
import Tractor from "./vehicles/tractor";
import Cultivator from "./vehicles/cultivator";
import Profile from "./ProfileComponents/Profile";
import Selling from "./ProfileComponents/Selling";
import Community from "./ProfileComponents/Community";
import Requests from "./ProfileComponents/Requests";
import Announcement from "./ProfileComponents/Announcement";
import EquipmentSell from "./ProfileComponents/EquipmentSell";

function App() {
  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) :(

   <Routes>
    <Route path="/" element = {<div className="App">
     <Header />
     <div className="app-body">
     <Sidebar />
     <Feed />     
     <RightSideBar />
     
     </div>
    </div>}></Route>
    <Route path="/vehicle" element={<Vehicle/>}></Route>
    <Route path="/tractor" element={<Tractor/>}></Route>
    <Route path="/cultivator" element={<Cultivator/>}></Route>
    <Route path="/user-profile" element={<Profile/>}></Route>
    <Route path="/selling-portal" element={<Selling/>}></Route>
    <Route path="/your-community" element={<Community/>}></Route>
    <Route path="/your-requests" element={<Requests/>}></Route>
    <Route path="/announcement" element={<Announcement/>}></Route>
    <Route path="/Sell" element={<EquipmentSell/>}></Route>
   </Routes>   
      )
    }
  
    </>
  );
}

export default App;
