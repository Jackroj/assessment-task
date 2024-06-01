import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import Default from "./views/Default";
import Modal from "./components/Modal";
import DeleteModal from "./components/Modal/DeleteModal";
import { Toaster } from 'react-hot-toast';

function App() {
  return (<>
  <BrowserRouter>
  <Routes>
      <Route path="posts/delete/:id*" element={<DeleteModal/>} />
      <Route path="posts/:id" element={<Modal />} />
      <Route path="posts" element={ <Default/>} /> 
      <Route path="/" element={<Navigate to="/posts" replace />} />
    </Routes>
  </BrowserRouter>
  <Toaster/>
  </> 
  );
}

export default App;
