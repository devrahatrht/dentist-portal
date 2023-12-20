import {  Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Pages/About/About';
import Appointment from './component/Pages/Appointment/Appointment';
import Contact from './component/Pages/Contact/Contact';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import RequireAuth from './component/Pages/Login/RequireAuth';
import Review from './component/Pages/Review/Review';
import SignUp from './component/Pages/SignUp/SignUp';
import Footer from './component/Shared/Footer/Footer';
import Navbar from './component/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './component/Pages/Dashboard/Dashboard';
import MyAppointments from './component/Pages/Dashboard/MyAppointments';
import MyReview from './component/Pages/Dashboard/MyReview';
import Users from './component/Pages/Dashboard/Users';
import AddDoctor from './component/Pages/Dashboard/AddDoctor';
import RequireAdmin from './component/Pages/Login/RequireAdmin';
import ManageDoctors from './component/Pages/Dashboard/ManageDoctors';
import Payment from './component/Pages/Dashboard/Payment';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } > 
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path="/review" element={<Review></Review>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
