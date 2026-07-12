import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Quote, Trophy, Lightbulb, GraduationCap, Users, FlaskConical, MonitorCheck } from 'lucide-react';
import usserPhoto from '../assets/img/DSC_6900.jpg';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="md:flex">
          <div className="md:w-1/3 bg-blue-600 flex items-center justify-center p-12">
            <div className="w-48 h-48 rounded-full border-4 border-white/30 overflow-hidden bg-blue-500 flex items-center justify-center">
               <img src={usserPhoto} alt="User" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Хлопик Роман Зіновійович</h1>
            <p className="text-xl text-blue-600 font-medium mb-6">вчитель інформатики, ліцей №2 Дрогобицької міської ради</p>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Вітаю вас на моєму професійному сайті-портфоліо! Тут ви знайдете інформацію про мій педагогічний шлях, методичні напрацювання та досягнення моїх учнів.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credo Section */}
      <section className="bg-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <Quote className="absolute top-4 left-4 h-16 w-16 text-white/10" />
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Педагогічне кредо</h2>
        <p className="text-2xl md:text-3xl italic font-serif">
          "Навчати — значить подвійно вчитися. Кожна дитина — це цілий світ, який чекає на відкриття."
        </p>
        <Quote className="absolute bottom-4 right-4 h-16 w-16 text-white/10 rotate-180" />
      </section>

      {/* Quick Links / Navigation Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Experience */}
        <Link to="/experience" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <GraduationCap className="text-blue-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Педагогічний досвід</h3>
          <p className="text-gray-600 text-sm">Мій професійний шлях та методи роботи</p>
        </Link>

        {/* Card 2: Methodical */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="text-green-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Методична скарбничка</h3>
          <p className="text-gray-600 text-sm mb-4">Сучасні методики, цифрові ресурси та професійна співпраця</p>
          <div className="space-y-2">
            <Link 
              to="/methodical/communities" 
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              <Users className="w-4 h-4 mr-2" />
              Професійні спільноти
            </Link>
            <Link 
              to="/methodical/projects" 
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              <FlaskConical className="w-4 h-4 mr-2" />
              Проєкти та експерименти
            </Link>
            <Link 
              to="/methodical/digital-developments" 
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              <MonitorCheck className="w-4 h-4 mr-2" />
              Цифрові розробки
            </Link>
          </div>
        </div>

        {/* Card 3: Students Success (Special structure) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
            <Trophy className="text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Успіхи учнів</h3>
          <p className="text-gray-600 text-sm mb-4">Досягнення моїх вихованців у навчанні та творчості</p>
          <div className="space-y-2">
            <Link 
              to="/students/competitions" 
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Олімпіади та МАН
            </Link>
            <Link 
              to="/students/projects" 
              className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Творчі проєкти
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
