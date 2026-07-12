import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { title: 'Головна', path: '/' },
    { title: 'Педагогічний досвід', path: '/experience' },
    { 
      title: 'Методична скарбничка', 
      path: '/methodical',
      subItems: [
        { title: 'Цифрові розробки', path: '/methodical/digital-developments' },
        { title: 'Проєкти та експерименти', path: '/methodical/projects' },
        { title: 'Професійні спільноти', path: '/methodical/communities' },
      ]
    },
    { 
      title: 'Успіхи учнів', 
      path: '/students',
      subItems: [
        { title: 'Олімпіади та МАН', path: '/students/competitions' },
        { title: 'Творчі проєкти', path: '/students/projects' },
      ]
    },
    { 
      title: 'Зростання', 
      path: '/growth',
      subItems: [
        { title: 'Дипломи та сертифікати', path: '/growth/certificates' },
      ]
    },

  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-800 hidden md:block">Сайт-портфоліо Хлопика Романа </span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex xl:items-center xl:space-x-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.subItems ? (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}

                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.subItems.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm ${
                              isActive ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-100'
                            }`
                          }
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(idx)}
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubmenu === idx && (
                      <div className="pl-4 space-y-1">
                        {item.subItems.map((sub, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm font-medium rounded-md ${
                                isActive ? 'text-primary bg-blue-50' : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                              }`
                            }
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base font-medium rounded-md ${
                        isActive ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
