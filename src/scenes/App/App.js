import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./App.css";

const Main = lazy(() => import("../../components/Page/Main"));
const Article1 = lazy(() => import("../../components/Page/Article-1"));

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<h1>Chargement...</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/article-1" element={<Article1 />} />
          </Routes>{" "}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
