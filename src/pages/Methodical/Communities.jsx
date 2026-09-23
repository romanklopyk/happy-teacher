import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Award, 
  Network, 
  HeartHandshake, 
  TrendingUp, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  Calendar, 
  Briefcase,
  Share2
} from 'lucide-react';
import communitiesData, { communityPrinciples } from '../../data/communities';

const iconMap = {
  Users: Users,
  GraduationCap: GraduationCap,
  Award: Award,
  Network: Network,
  HeartHandshake: HeartHandshake,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  Target: Target,
};

const Communities = () => {
  return (
    <div className="max-w-6xl mx-auto pb-12 space-y-12">
      {/* Page Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
          <Users className="w-4 h-4 text-blue-600" />
          <span>Професійна взаємодія та партнерство</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Участь у професійних спільнотах
        </h1>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Сучасний педагог — це не лише викладач у класі, а й активний учасник освітньої спільноти. 
            Співпраця з колегами, обмін передовим досвідом, експертна діяльність та спільні цифрові ініціативи 
            дозволяють мені постійно вдосконалювати власну педагогічну майстерність та робити вагомий внесок 
            у розвиток цифрової освіти міста й регіону.
          </p>
        </div>
      </header>

      {/* Principles Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <Share2 className="w-5 h-5 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Принципи моєї професійної взаємодії</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityPrinciples.map((principle, idx) => {
            const IconComp = iconMap[principle.icon] || Sparkles;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{principle.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Communities List */}
      <section className="space-y-8">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-5 h-5 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Фахова діяльність у спільнотах та експертних групах</h2>
        </div>

        <div className="space-y-8">
          {communitiesData.map((community) => {
            const CommunityIcon = iconMap[community.icon] || Users;

            return (
              <article 
                key={community.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Header Banner */}
                <div className={`p-6 sm:p-7 bg-gradient-to-r ${community.color} text-white`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 shadow-inner">
                        <CommunityIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm mb-1.5">
                          {community.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                          {community.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-black/15 backdrop-blur-sm px-3.5 py-1.5 rounded-xl self-start sm:self-auto text-sm font-medium border border-white/10">
                      <Calendar className="w-4 h-4 text-white/80" />
                      <span>{community.period}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Role */}
                  <div className="flex items-center space-x-2 text-blue-700 bg-blue-50/70 px-4 py-2.5 rounded-xl border border-blue-100 font-semibold text-sm sm:text-base">
                    <span className="text-gray-500 font-normal">Роль:</span>
                    <span>{community.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {community.description}
                  </p>

                  {/* Activities */}
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Ключові форми участі та результати діяльності:</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {community.activities.map((act, aIdx) => (
                        <li 
                          key={aIdx} 
                          className="flex items-start space-x-3 p-3 bg-gray-50/80 rounded-xl border border-gray-100 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{act}</span>
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
    </div>
  );
};

export default Communities;
