import { Route, Routes } from "react-router-dom";
import FormCreate from "../components/FormCreate";
import Header from "../layout/Header";
import Main from "../layout/Main";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/product" element={<Main />} />
        <Route path="/product/add" element={<FormCreate />} />
      </Routes>
    </div>
  );
}

export default App;
