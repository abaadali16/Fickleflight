// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./assets/pages/Home"
// import Hotel from "./assets/pages/Hotel";
// import Offers from "./assets/pages/Offers";
import Crud from "./assets/pages/Crud";
// import Search from "./assets/pages/Search";
import Callapi from "./assets/components/Callapi"
import Saveuser from "./assets/components/saveUser";
import Dbdata from "./assets/components/Dbdata";
export function App() {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router> */}
      {/* <Callapi/> */}
      <Crud/>
       
      

    </>
  )
}
