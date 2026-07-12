import React from 'react';
import { Lightbulb, Calendar, User, BookOpen, GraduationCap } from 'lucide-react';
import projectsData from '../../data/projects';

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto pb-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Дослідницькі та творчі проєкти учнів</h1>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
          <p className="text-gray-700 leading-relaxed text-lg">
            Щорічно учні беруть участь у ліцейному науковому товаристві захисті проєктів
            <span className="font-bold text-blue-700 mx-1">"Еврика"</span>. 
            Це товариство для реалізації найсміливіших ідей, де теорія перетворюється на практичні рішення,
            що змінюють життя громади та школи.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {projectsData.map((yearGroup, yearIdx) => (
          <div key={yearIdx} className="relative">
            <div className="flex items-center mb-8">
              <div className="bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center space-x-2 z-10">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-bold text-gray-800">{yearGroup.year} навчальний рік</span>
              </div>
              <div className="flex-grow h-px bg-gray-200 ml-4"></div>
            </div>

            <div className="grid gap-6">
              {yearGroup.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-yellow-500 fill-yellow-100" />
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {project.topic}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3">
                          <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg">
                            <User className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                            <span className="font-medium">{project.student}</span>
                          </div>
                          {project.grade && (
                            <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg">
                              <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                              <span>{project.grade} клас</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0 opacity-60" />
                        <p className="text-gray-600 leading-relaxed italic">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
