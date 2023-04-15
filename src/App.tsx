import * as React from 'react';

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { Loader } from './features/loader/Loader';
const TopNews = React.lazy(() => import('./features/top_news/TopNews'));
const Search = React.lazy(() => import('./features/search/Search'));
const Categories = React.lazy(() => import('./features/categories/Categories'));
const Navbar = React.lazy(() => import('./features/navbar/Navbar'));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<TopNews />} />
            <Route path="/categories" element={<Categories />} />
              <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
