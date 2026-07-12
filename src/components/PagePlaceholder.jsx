import React from 'react';

const PagePlaceholder = ({ title, subtitle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600 mb-8">{subtitle}</p>}
      <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-12 flex flex-col items-center justify-center text-blue-400">
        <p className="text-lg font-medium">Контент розділу знаходиться в розробці</p>
        <p className="text-sm">Тут буде розміщено: {title}</p>
      </div>
    </div>
  );
};

export default PagePlaceholder;
