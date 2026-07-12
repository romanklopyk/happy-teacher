import React, { useState } from 'react';
import { FileText, Calendar, Eye, X, Award, Medal } from 'lucide-react';
import certificatesData from '../../data/certificates';
import diplomasData from '../../data/diplomas';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeTab, setActiveTab] = useState('certificates');

  const openModal = (cert, year) => {
    setSelectedCert({ ...cert, year });
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="space-y-8 pb-12">
      <header className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">Професійне зростання</h1>
        <p className="mt-2 text-lg text-gray-600">
          Мої досягнення, дипломи та сертифікати за останні роки.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('certificates')}
          className={`pb-4 px-2 text-sm font-bold transition-all flex items-center space-x-2 ${
            activeTab === 'certificates'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Сертифікати</span>
        </button>
        <button
          onClick={() => setActiveTab('diplomas')}
          className={`pb-4 px-2 text-sm font-bold transition-all flex items-center space-x-2 ${
            activeTab === 'diplomas'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Medal className="w-4 h-4" />
          <span>Грамоти та подяки</span>
        </button>
      </div>

      {activeTab === 'certificates' ? (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {certificatesData.map((group) => (
            <section key={group.year} className="relative">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full flex items-center shadow-md">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-bold text-lg">{group.year} рік</span>
                </div>
                <div className="flex-grow ml-4 h-px bg-gray-200"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.items.map((cert) => {
                  const filePath = `/assets/sert/${group.year}/${cert.file}`;
                  const isImage = cert.type === 'image';

                  return (
                    <div 
                      key={cert.id} 
                      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
                    >
                      {/* Thumbnail Area */}
                      <div 
                        className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer"
                        onClick={() => openModal(cert, group.year)}
                      >
                        {isImage ? (
                          <img 
                            src={filePath} 
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-red-400 bg-red-50 group-hover:bg-red-100 transition-colors">
                            <FileText className="w-12 h-12 mb-2" />
                            <span className="text-xs font-bold uppercase tracking-wider">PDF Документ</span>
                          </div>
                        )}
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Eye className="text-white w-8 h-8" />
                        </div>
                      </div>

                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-gray-900 font-semibold text-sm mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {cert.title}
                        </h3>
                        
                        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            {cert.type}
                          </span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openModal(cert, group.year)}
                              className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                              title="Переглянути"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {diplomasData.length > 0 ? (
            diplomasData.map((group) => (
              <section key={group.year} className="relative">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-500 text-white px-4 py-1 rounded-full flex items-center shadow-md">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-bold text-lg">{group.year} рік</span>
                  </div>
                  <div className="flex-grow ml-4 h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.items.map((item) => {
                    const filePath = `/assets/diploma/${item.file}`;
                    const isImage = item.type === 'image';

                    return (
                      <div 
                        key={item.id} 
                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
                      >
                        <div 
                          className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer"
                          onClick={() => openModal(item, group.year)}
                        >
                          {isImage ? (
                            <img 
                              src={filePath} 
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-red-400 bg-red-50 group-hover:bg-red-100 transition-colors">
                              <FileText className="w-12 h-12 mb-2" />
                              <span className="text-xs font-bold uppercase tracking-wider">PDF Документ</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Eye className="text-white w-8 h-8" />
                          </div>
                        </div>

                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-gray-900 font-semibold text-sm mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              {item.type}
                            </span>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => openModal(item, group.year)}
                                className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                title="Переглянути"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <div className="py-20 flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-dashed border-gray-200 text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Medal className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Грамоти та подяки</h3>
              <p className="text-gray-500 max-w-md px-4">
                Цей розділ наразі наповнюється.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal / Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            {selectedCert.type === 'image' ? (
              <img 
                src={selectedCert.id >= 100 ? `/assets/diploma/${selectedCert.file}` : `/assets/sert/${selectedCert.year}/${selectedCert.file}`} 
                alt={selectedCert.title}
                className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
              />
            ) : (
              <iframe 
                src={selectedCert.id >= 100 ? `/assets/diploma/${selectedCert.file}` : `/assets/sert/${selectedCert.year}/${selectedCert.file}`} 
                title={selectedCert.title}
                className="w-full h-[80vh] bg-white rounded shadow-2xl"
              />
            )}
            
            <div className="mt-6 text-center text-white">
              <h2 className="text-xl font-bold">{selectedCert.title}</h2>
              <p className="text-white/60 text-sm mt-1">{selectedCert.year} рік</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a 
                  href={selectedCert.id >= 100 ? `/assets/diploma/${selectedCert.file}` : `/assets/sert/${selectedCert.year}/${selectedCert.file}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Eye className="w-4 h-4 mr-2" /> Відкрити в новій вкладці
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
