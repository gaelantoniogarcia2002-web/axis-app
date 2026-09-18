import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Especialidades from './pages/Especialidades';
import Medicos from './pages/Medicos';
import MedicoDetalle from './pages/medicos/MedicoDetalle';
import Modelo from './pages/Modelo';
import Contacto from './pages/Contacto';
import AgendaCita from './pages/AgendaCita';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'especialidades', element: <Especialidades /> },
      { path: 'medicos', element: <Medicos /> },
      { path: 'medicos/:slug', element: <MedicoDetalle /> },
      { path: 'modelo', element: <Modelo /> },
      { path: 'contacto', element: <Contacto /> },
      { path: 'agenda-cita', element: <AgendaCita /> },
    ],
  },
]);
