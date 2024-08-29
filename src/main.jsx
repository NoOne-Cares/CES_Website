import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/HomePage/Home';
import Events from './pages/EventPage/Events';
import Team from './pages/TeamPage/Team';
import Gallery from './pages/GalleryPage/Gallery';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Event" element={<Events />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Gallery" element={<Gallery />} />
        </Route>
    )
);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
