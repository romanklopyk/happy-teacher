import React from 'react';
import { Trophy, Award, Calendar, Users } from 'lucide-react';
import competitionsData from '../../data/competitions';

const Competitions = () => {
  const getPlaceStyles = (place) => {
    switch (place) {
      case "1":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          border: "border-yellow-200",
          importance: "ring-2 ring-yellow-400 ring-offset-2"
        };
      case "2":
        return {
          bg: "bg-slate-100",
          text: "text-slate-700",
          border: "border-slate-200",
          importance: ""
        };
      case "3":
        return {
          bg: "bg-orange-100",
          text: "text-orange-700",
          border: "border-orange-200",
          importance: ""
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          border: "border-gray-100",
          importance: ""
        };
    }
  };

  const getLevelBadge = (level) => {
    if (!level) return null;
    const lowerLevel = level.toLowerCase();
    
    let styles = "bg-gray-100 text-gray-600 border-gray-200";
    if (lowerLevel.includes("область")) styles = "bg-purple-100 text-purple-700 border-purple-200";
    else if (lowerLevel.includes("район")) styles = "bg-blue-100 text-blue-700 border-blue-200";
    else if (lowerLevel.includes("отг")) styles = "bg-green-100 text-green-700 border-green-200";

    return (
      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${styles}`}>
        {level}
      </span>
    );
  };

  const renderCategory = (title, data, iconColor) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className={`p-3 rounded-xl ${iconColor} bg-opacity-10`}>
          <Trophy className={`w-8 h-8 ${iconColor.replace('bg-', 'text-')}`} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-8">
        {data.map((item, idx) => (
          <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200">
            <div className="absolute left-0 top-2 w-2 h-2 -ml-[4.5px] rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"></div>
            
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{item.year}</span>
              </div>
              {getLevelBadge(item.level)}
            </div>

            <div className="grid gap-4">
              {item.winners.map((winner, wIdx) => {
                const styles = getPlaceStyles(winner.place);
                return (
                  <div 
                    key={wIdx} 
                    className={`bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${styles.importance}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">{winner.name}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Users className="w-3.5 h-3.5 mr-1" />
                          <span>Клас: {winner.grade}</span>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg border font-bold ${styles.bg} ${styles.text} ${styles.border}`}>
                        <Award className="w-4 h-4" />
                        <span className="text-sm whitespace-nowrap">{winner.text || winner.place + " місце"}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Переможці олімпіад та МАН</h1>
        <p className="text-gray-600 max-w-3xl">
          Досягнення моїх учнів на олімпіадах різних рівнів.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {renderCategory("Інформатика", competitionsData.informatics, "bg-blue-600")}
        {renderCategory("Інформаційні технології", competitionsData.it, "bg-indigo-600")}
      </div>
    </div>
  );
};

export default Competitions;
