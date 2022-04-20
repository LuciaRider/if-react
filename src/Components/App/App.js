import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomesSection from '../../HomesSection/HomesSection';
import LoginPage from '../../TopSection/LoginPage/LoginPage';
import Footer from '../../Footer/Footer';

function App() {
  
  const [serverData, setServerData] = useState([]);
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);

//   return (
//     <Router>
//       <>
//         <TopSection serverData={serverData} setServerData={setServerData} setShowAvailableHotels={setShowAvailableHotels}/>
//         <Route path="signin" element={<LoginPage/>}/>
//         <main>
//           <Routes>
//             <HomesSection/>
//           </Routes>
//         </main>
//       </>
//     </Router>
//   );
// }

  return (
    <>
      {/* <TopSection serverData={serverData} setServerData={setServerData} setShowAvailableHotels={setShowAvailableHotels}/> */}
      <LoginPage/>
      <main>
          <HomesSection/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
