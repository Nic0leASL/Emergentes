import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './../../Context/AuthContext';

import hospitalIcon from '../../assets/Images/hospital.png';
import especialidadesIcon from '../../assets/Images/especialista.png';
import serviciosIcon from '../../assets/Images/servicio.png';
import miHospitalIcon from '../../assets/Images/MyHospital.png';
import redIcon from '../../assets/Images/red.png';
import hospitalInfoIcon from '../../assets/Images/hospitalinfo.png'; 

interface SidebarProps {
  isOpen: boolean;
}

const SidebarLink: React.FC<{ to: string; icon: string; label: string; }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <li className="group">
      <Link
        to={to}
        className={`block px-4 py-2 text-gray-200 rounded-md transform transition-all duration-200 ease-in-out group-hover:bg-blue-700 group-hover:text-white group-hover:translate-x-1 ${isActive ? 'bg-blue-700 font-bold' : ''}`}
      >
        <div className="flex items-center space-x-2">
          <img src={icon} alt={label} className="w-6 h-6 group-hover:opacity-80 transition-opacity duration-300" />
          <span className="group-hover:font-bold">{label}</span>
        </div>
      </Link>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { hasPermission } = useAuth(); 

  const navLinks = useMemo(() => [
    { to: '/establecimientos', label: 'Hospitales', icon: hospitalIcon, permissions: ['Admin Sedes'] },
    { to: '/especialidades', label: 'Especialidades', icon: especialidadesIcon, permissions: ['Admin Sedes', 'Admin Hospital'] },
    { to: '/servicios', label: 'Servicios', icon: serviciosIcon, permissions: ['Admin Sedes', 'Admin Hospital'] },
    { to: '/red-coordinacion', label: 'Red Coordinación', icon: redIcon, permissions: ['Admin Sedes'] },
    { to: '/hospitales-info', label: 'Hospitales Info', icon: hospitalInfoIcon, permissions: ['Admin Sedes', 'Admin Hospital', 'Doctor'] },
    { to: '/miHospital', label: 'Mi Hospital', icon: miHospitalIcon, permissions: ['Admin Hospital', 'Doctor'] },
    { to: '/personal-salud', label: 'Personal Salud', icon: miHospitalIcon, permissions: ['Admin Hospital', 'Admin Sedes'] },
    { to: '/cama', label: 'Cama', icon: miHospitalIcon, permissions: ['Doctor', 'Enfermera', 'Admin Hospital'] },
    { to: '/cronograma-turnos', label: 'Rol de turnos', icon: miHospitalIcon, permissions: ['Admin Hospital', 'Doctor', 'Admin Sedes'] },
    { to: '/consulta-externa', label: 'Consulta Externa', icon: miHospitalIcon, permissions: ['Admin Hospital', 'Doctor', 'Admin Sedes'] },
    { to: '/reporte-especialidades', label: 'Reporte', icon: miHospitalIcon, permissions: ['Admin Sedes'] },
    { to: '/referencia', label: 'Referencias', icon: miHospitalIcon, permissions: ['Admin Hospital', 'Doctor', 'Admin Sedes'] },
  ], []);

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out bg-gradient-to-b from-blue-900 to-blue-800 shadow-lg w-64`}
    >
      <div className="flex items-center justify-center h-16 bg-blue-900 text-white shadow-md">
        <Link to="/inicio" className="text-lg font-extrabold tracking-wider hover:text-blue-300 transition-colors duration-300">
          SEDES Referencias
        </Link>
      </div>
      <nav className="mt-5">
        <ul className="space-y-4">
          {navLinks.map((link) =>
            hasPermission(link.permissions) ? (
              <SidebarLink key={link.to} to={link.to} icon={link.icon} label={link.label} />
            ) : null
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
