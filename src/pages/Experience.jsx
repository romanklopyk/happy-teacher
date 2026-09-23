import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Cpu, 
  UserCheck, 
  Lightbulb, 
  Bot, 
  Target, 
  Code2, 
  Gamepad2, 
  Compass, 
  Globe, 
  Award, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  Layers, 
  Quote, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap
} from 'lucide-react';
import experienceData from '../data/experience';

const iconMap = {
  Laptop,
  Cpu,
  UserCheck,
  Lightbulb,
  Bot,
  Target,
  Code2,
  Gamepad2,
  Compass,
  Globe,
  Award,
  Sparkles,
  BookOpen,
  TrendingUp,
  Layers,
  GraduationCap
};

const Experience = () => {
  const { generalInfo, principles, methods, systemStages, results } = experienceData;

  return (
    <div className="max-w-6xl mx-auto pb-16 space-y-16">
      {/* 1. Header & Pedagogical Problem */}
      <header className="space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span>Педагогічна система та досвід роботи</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Педагогічний досвід
        </h1>

        {/* Pedagogical Topic Card */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-100">
              Науково-методична тема досвіду
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-white">
              «{generalInfo.pedagogicalTheme}»
            </h2>
            <div className="pt-4 border-t border-white/20 text-blue-100 text-sm sm:text-base flex flex-wrap items-center gap-y-2 gap-x-6">
              <span className="font-medium text-white">{generalInfo.teacherName}</span>
              <span>•</span>
              <span>{generalInfo.position}</span>
              <span>•</span>
              <span>{generalInfo.school}</span>
            </div>
          </div>
        </div>

        {/* Intro Overview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>{generalInfo.intro}</p>
        </div>
      </header>

      {/* 2. Key Pedagogical Principles */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ключові педагогічні принципи</h2>
            <p className="text-gray-500 text-sm sm:text-base">Цінності та орієнтири, що визначають підхід до навчання</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const IconComponent = iconMap[principle.icon] || Lightbulb;
            return (
              <div 
                key={index}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Credo Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
        <Quote className="absolute top-6 left-6 w-20 h-20 text-white/5 pointer-events-none" />
        <Quote className="absolute bottom-6 right-6 w-20 h-20 text-white/5 rotate-180 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
            Педагогічне кредо
          </span>
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-blue-50 leading-relaxed">
            "{generalInfo.credo}"
          </p>
        </div>
      </section>

      {/* 4. Methodology & Modern Teaching Practices */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Методичний інструментарій та форми роботи</h2>
            <p className="text-gray-500 text-sm sm:text-base">Практичні методики формування стійких навичок розробки</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method) => {
            const MethodIcon = iconMap[method.icon] || Code2;
            return (
              <article 
                key={method.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Method Top Bar */}
                <div className={`p-6 bg-gradient-to-r ${method.color} text-white flex items-center justify-between`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
                      <MethodIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white mb-1">
                        {method.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {method.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Method Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Практична реалізація:
                    </h4>
                    <ul className="space-y-2.5">
                      {method.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. System Stages / Learning Roadmap */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Етапи педагогічної системи зростання учня</h2>
            <p className="text-gray-500 text-sm sm:text-base">Покрокова траєкторія від перших спроб до успішних IT-проєктів</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systemStages.map((stage, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3">
                <span className="text-4xl font-black text-blue-100 block font-mono">
                  {stage.step}
                </span>
                <h3 className="font-bold text-gray-900 text-lg leading-snug">
                  {stage.title}
                </h3>
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {stage.subtitle}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  {stage.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Results & Metrics */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-amber-100 text-amber-600 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Результативність та практичний вимір</h2>
            <p className="text-gray-500 text-sm sm:text-base">Підсумки впровадження педагогічного досвіду на практиці</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((res, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200/70 shadow-sm text-center flex flex-col justify-center items-center space-y-2 hover:border-blue-300 transition-colors"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
                {res.metric}
              </span>
              <h3 className="font-bold text-gray-900 text-base leading-snug">
                {res.label}
              </h3>
              <p className="text-xs text-gray-500">
                {res.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Quick Navigation to Related Sections */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Детальніше про матеріали досвіду</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Ознайомтеся з конкретними результатами учнів, авторськими розробками та сертифікатами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            to="/methodical/digital-developments"
            className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                Цифрові розробки
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Авторські вебзастосунки та сервіси</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </Link>

          <Link 
            to="/students/competitions"
            className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                Олімпіади та МАН
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Перемоги та досягнення учнів</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </Link>

          <Link 
            to="/students/projects"
            className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex items-center justify-between group"
          >
            <div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                Учнівські проєкти «Еврика»
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Дослідницькі та практичні роботи</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;
