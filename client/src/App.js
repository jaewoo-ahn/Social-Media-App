import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, Navbar, ProfilePage } from "scenes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/profile/:userId" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
