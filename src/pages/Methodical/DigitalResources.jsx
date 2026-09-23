import React from 'react';
import { 
  Globe, 
  ExternalLink, 
  Compass, 
  CheckSquare, 
  BookOpenCheck, 
  GraduationCap,
  Sparkles, 
  CheckCircle2, 
  Tag, 
  Code2, 
  Layers,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';
import digitalDevelopmentsData from '../../data/digitalDevelopments';

const iconMap = {
  Compass: Compass,
  CheckSquare: CheckSquare,
  BookOpenCheck: BookOpenCheck,
  GraduationCap: GraduationCap,
};

const DigitalResources = () => {
  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-10">
      {/* Page Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Авторські цифрові продукти</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Цифрові розробки та освітні вебресурси
        </h1>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Як вчитель інформатики та розробник освітніх рішень, я створюю практичні цифрові інструменти, 
            вебзастосунки та інформаційні платформи. Вони покликані автоматизувати процеси, допомагати 
            колегам-педагогам у професійному самоаналізі та розвитку, а також відкривати нові можливості 
            для учнів, батьків і всієї освітньої спільноти.
          </p>
        </div>
      </header>

      {/* Projects List */}
      <div className="space-y-10">
        {digitalDevelopmentsData.map((project) => {
          const IconComponent = iconMap[project.icon] || Globe;

          return (
            <article 
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Card Header Bar */}
              <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-inner">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm mb-1.5">
                        {project.badge}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {project.isOffline ? (
                    <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-white/20 text-white border border-white/30 font-semibold rounded-xl backdrop-blur-sm self-start md:self-auto shrink-0 text-xs sm:text-sm shadow-inner">
                      <AlertCircle className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Хостинг неактивний</span>
                    </div>
                  ) : (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-blue-50 hover:text-blue-700 transition-all transform hover:-translate-y-0.5 self-start md:self-auto shrink-0 text-sm"
                    >
                      <span>Відкрити ресурс</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Author's Description */}
                <div>
                  <div className="flex items-center space-x-2 text-gray-900 font-bold text-lg mb-3">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <h3>Про розробку від автора</h3>
                  </div>
                  <div className="text-gray-700 space-y-3 leading-relaxed text-sm sm:text-base whitespace-pre-line bg-gray-50/70 p-5 rounded-xl border border-gray-100">
                    {project.description}
                  </div>
                </div>

                {/* Screenshot / Interface Preview (if available) */}
                {project.image && (
                  <div>
                    <div className="flex items-center space-x-2 text-gray-900 font-bold text-base mb-3">
                      <ImageIcon className="w-5 h-5 text-blue-600" />
                      <h4>Інтерфейс ресурсу (демонстраційний вигляд)</h4>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                      <img 
                        src={project.image} 
                        alt={project.imageAlt || project.title} 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 text-gray-900 font-bold text-base mb-3">
                      <Layers className="w-5 h-5 text-indigo-600" />
                      <h4>Ключовий функціонал та можливості</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer with Tags and Direct URL / Offline Status */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.isOffline ? (
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs sm:text-sm font-medium">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{project.statusNotice || 'Хостинг проєкту тимчасово призупинено'}</span>
                    </div>
                  ) : (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center space-x-1"
                    >
                      <span className="truncate max-w-xs">{project.url}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default DigitalResources;
