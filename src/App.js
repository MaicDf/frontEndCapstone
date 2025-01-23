import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected imports
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import BookingPage from './component/Booking';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
