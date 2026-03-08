import React, { useState } from 'react';
import { 
  Calendar, MapPin, ShoppingBag, Utensils, Coffee, 
  Camera, Info, Heart, User, Baby, Car, Clock, ArrowRight, ExternalLink, Navigation, Map as MapIcon, Sparkles, Tent, Landmark
} from 'lucide-react';

const App = () => {
  const [activeDay, setActiveDay] = useState(0);

  // 구글 맵 링크용 헬퍼
  const getGoogleMapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const schedule = [
    {
      day: "1일차: 5/27(수)",
      title: "후쿠오카의 첫인상",
      theme: "City Adventure",
      themeDesc: "도심 랜드마크와 맛있는 첫 만남",
      concept: "아이의 호기심과 도심의 활기를 느끼는 날",
      image: "https://images.unsplash.com/photo-1590253503507-6a4a6e8b492b?auto=format&fit=crop&q=80&w=1000",
      plans: [
        { time: "14:00", activity: "공항 도착", location: "후쿠오카 공항", desc: "입국 수속 및 짐 찾기", icon: <MapPin size={18} />, travelTime: "", pos: { x: 80, y: 20 } },
        { time: "15:30", activity: "하카타 숙소", location: "하카타역", desc: "체크인 및 짐 보관", icon: <MapPin size={18} />, travelTime: "15분", pos: { x: 50, y: 40 } },
        { time: "17:00", activity: "라라포트", location: "라라포트 후쿠오카", desc: "실물 건담 쇼 및 쇼핑", icon: <ShoppingBag size={18} />, travelTime: "20분", pos: { x: 70, y: 70 } },
        { time: "19:30", activity: "나카스 저녁", location: "요시즈카 우나기야", desc: "장어 요리 식사", icon: <Utensils size={18} />, travelTime: "20분", pos: { x: 30, y: 50 } }
      ]
    },
    {
      day: "2일차: 5/28(목)",
      title: "전통 문화와 온천",
      theme: "Traditional Healing",
      themeDesc: "부모님을 위한 고즈넉한 힐링 투어",
      concept: "전통 가옥과 온천욕으로 피로를 푸는 효도 여행의 정점",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1000",
      plans: [
        { time: "09:30", activity: "다자이후", location: "다자이후 텐만구", desc: "신사 산책 및 가족 건강 기원", icon: <Landmark size={18} />, travelTime: "", pos: { x: 40, y: 20 } },
        { time: "12:30", activity: "현지 점심", location: "다자이후역", desc: "소바 맛집 식사", icon: <Utensils size={18} />, travelTime: "10분", pos: { x: 45, y: 30 } },
        { time: "15:30", activity: "유후인 마을", location: "유노츠보 거리", desc: "상점가 구경 및 산책", icon: <ShoppingBag size={18} />, travelTime: "1시간 20분", pos: { x: 70, y: 60 } },
        { time: "17:30", activity: "료칸 체크인", location: "유후인 료칸", desc: "온천 및 가이세키", icon: <Heart size={18} />, travelTime: "10분", pos: { x: 85, y: 80 } }
      ]
    },
    {
      day: "3일차: 5/29(금)",
      title: "여유로운 힐링",
      theme: "Nature & Luxury",
      themeDesc: "아침 호수 산책과 오후의 세련된 쇼핑",
      concept: "여유로운 자연 경관과 도심 백화점 쇼핑의 완벽한 조화",
      image: "https://images.unsplash.com/photo-1570160893345-236b28169623?auto=format&fit=crop&q=80&w=1000",
      plans: [
        { time: "09:00", activity: "긴린코 호수", location: "긴린코 호수", desc: "아침 물안개 산책", icon: <Camera size={18} />, travelTime: "", pos: { x: 80, y: 20 } },
        { time: "12:00", activity: "유후인 점심", location: "유후인역", desc: "현지 특산물 식사", icon: <Utensils size={18} />, travelTime: "15분", pos: { x: 75, y: 40 } },
        { time: "15:30", activity: "텐진 도심", location: "이와타야 백화점", desc: "본격적인 백화점 쇼핑", icon: <ShoppingBag size={18} />, travelTime: "1시간 40분", pos: { x: 30, y: 60 } },
        { time: "19:00", activity: "야키니쿠", location: "텐진 야키니쿠", desc: "최고급 와규 만찬", icon: <Utensils size={18} />, travelTime: "10분", pos: { x: 20, y: 80 } }
      ]
    },
    {
      day: "4일차: 5/30(토)",
      title: "마지막 선물",
      theme: "Peaceful Farewell",
      themeDesc: "공원에서의 휴식과 귀중한 선물 준비",
      concept: "여행의 마무리를 차분하게 정리하고 추억을 담아가는 날",
      image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&q=80&w=1000",
      plans: [
        { time: "10:00", activity: "오호리 공원", location: "오호리 공원", desc: "호수 산책 및 아이 놀이터", icon: <Baby size={18} />, travelTime: "", pos: { x: 20, y: 40 } },
        { time: "12:00", activity: "브런치", location: "오호리 공원 카페", desc: "여유로운 브런치 타임", icon: <Coffee size={18} />, travelTime: "10분", pos: { x: 30, y: 50 } },
        { time: "14:00", activity: "하카타 쇼핑", location: "한큐 백화점", desc: "마지막 지인 선물 구매", icon: <ShoppingBag size={18} />, travelTime: "15분", pos: { x: 50, y: 60 } },
        { time: "16:30", activity: "공항 이동", location: "후쿠오카 공항", desc: "귀국 절차 및 면세점 이용", icon: <MapPin size={18} />, travelTime: "15분", pos: { x: 80, y: 40 } }
      ]
    }
  ];

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000";
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Unified Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] shadow-sm border border-slate-200/50">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-200">
              <Sparkles size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">후쿠오카 <span className="text-blue-600">가족 테마 보드</span></h1>
              <p className="text-slate-500 font-bold flex items-center gap-2 mt-1 text-sm md:text-base">
                <Calendar size={16} className="text-blue-400" /> 5.27(수) - 5.30(토) | 3박 4일
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-[2rem] border border-slate-100">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-white"><User size={14} /></div>)}
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white bg-pink-200 flex items-center justify-center text-pink-600"><Baby size={16} /></div>
            </div>
            <div className="text-xs md:text-sm font-black text-slate-600 tracking-tight whitespace-nowrap">성인 4 / 아이 1</div>
          </div>
        </header>

        {/* Day Navigation with Themes */}
        <nav className="flex gap-3 mb-8 overflow-x-auto pb-4 no-scrollbar">
          {schedule.map((s, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`flex-none min-w-[140px] px-6 py-4 rounded-3xl transition-all shadow-sm flex flex-col items-center gap-1 ${activeDay === idx ? 'bg-slate-900 text-white shadow-lg scale-105' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
            >
              <span className="text-[10px] font-black tracking-widest uppercase">DAY 0{idx + 1}</span>
              <span className="font-bold text-xs">{s.theme}</span>
            </button>
          ))}
        </nav>

        {/* Combined Dashboard Card */}
        <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-200/60 transition-all duration-500">
          
          {/* Day Hero Section with Expanded Theme */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={schedule[activeDay].image} alt="Day Hero" onError={handleImageError} className="w-full h-full object-cover transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent flex flex-col justify-end p-10 md:p-14">
              <div className="bg-blue-600 text-white w-fit px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-lg">
                TODAY'S CONCEPT
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">{schedule[activeDay].day} : {schedule[activeDay].themeDesc}</h2>
              <p className="text-blue-300 font-bold text-sm md:text-lg flex items-center gap-2">
                <Sparkles size={18} /> {schedule[activeDay].concept}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Detail Itinerary */}
            <div className="lg:col-span-7 p-8 md:p-14 space-y-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">상세 타임라인</h3>
                </div>
              </div>
              
              <div className="space-y-14">
                {schedule[activeDay].plans.map((p, pIdx) => (
                  <div key={pIdx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="text-[10px] font-black text-slate-400 mb-2 group-hover:text-blue-600 transition-colors tracking-tighter">{p.time}</div>
                      <div className="w-14 h-14 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-blue-200 group-hover:scale-110">
                        {pIdx + 1}
                      </div>
                      {pIdx !== schedule[activeDay].plans.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-100 my-4 group-hover:bg-blue-100"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-10 border-b border-slate-50 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">{p.activity}</h4>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5 block flex items-center gap-1">
                            <MapPin size={10} /> {p.location}
                          </span>
                        </div>
                        <a href={getGoogleMapUrl(p.location)} target="_blank" rel="noopener noreferrer" className="bg-slate-50 hover:bg-blue-600 hover:text-white p-3 rounded-2xl transition-all text-slate-400 shadow-sm">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                      <p className="text-slate-500 mt-4 text-base md:text-lg leading-relaxed font-medium">{p.desc}</p>
                      {p.travelTime && (
                        <div className="mt-5 flex items-center gap-2 text-[10px] font-black text-blue-500 bg-blue-50/50 w-fit px-4 py-2 rounded-2xl border border-blue-100/50 shadow-sm">
                          <Car size={14} /> 이동 소요시간: 약 {p.travelTime}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Route Visualization Plot */}
            <div className="lg:col-span-5 bg-slate-50/50 p-8 md:p-14 border-l border-slate-100 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black flex items-center gap-2 tracking-tight text-slate-800">
                  <Navigation size={22} className="text-blue-500" /> 오늘의 동선 맵
                </h3>
                <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Route Guide</div>
              </div>

              {/* Enhanced Visual Plotting */}
              <div className="relative w-full aspect-square bg-white rounded-[3rem] shadow-xl shadow-slate-200 p-8 flex items-center justify-center group overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                  {/* Connection Lines with Animation */}
                  {schedule[activeDay].plans.map((p, i) => {
                    if (i === 0) return null;
                    const prev = schedule[activeDay].plans[i-1];
                    return (
                      <line 
                        key={`line-${i}`}
                        x1={prev.pos.x} y1={prev.pos.y} 
                        x2={p.pos.x} y2={p.pos.y} 
                        stroke="#3b82f6" 
                        strokeWidth="0.8" 
                        strokeDasharray="2,2"
                        className="animate-pulse"
                      />
                    );
                  })}
                  {/* Location Nodes */}
                  {schedule[activeDay].plans.map((p, i) => (
                    <g key={`point-${i}`} className="cursor-pointer group/point">
                      <circle cx={p.pos.x} cy={p.pos.y} r="3.5" fill="#3b82f6" className="group-hover/point:r-5 transition-all duration-300" />
                      <circle cx={p.pos.x} cy={p.pos.y} r="8" fill="#3b82f6" fillOpacity="0.08" />
                      <text x={p.pos.x} y={p.pos.y - 7} fontSize="4.5" fill="#1e293b" fontWeight="black" textAnchor="middle" className="pointer-events-none drop-shadow-sm">{p.activity}</text>
                      <text x={p.pos.x} y={p.pos.y + 1} fontSize="2.5" fill="white" fontWeight="black" textAnchor="middle" className="pointer-events-none">{i+1}</text>
                    </g>
                  ))}
                </svg>
                
                {/* Visual Legend */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-slate-900/90 backdrop-blur-md p-5 rounded-[2rem] border border-white/10 flex items-center justify-between shadow-2xl">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Schedule Stats</span>
                      <span className="text-white text-sm font-black italic tracking-tight">총 4개 목적지 | 맞춤 동선</span>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                       <Sparkles size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Restoration of Legend Info */}
              <div className="mt-10 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                     <Info size={20} />
                   </div>
                   <h4 className="text-base font-black text-slate-800">동선 가이드</h4>
                 </div>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">
                   {activeDay === 0 && "1일차는 하카타역을 중심으로 동쪽과 서쪽을 오가는 집약적인 동선입니다. 공항 근처라 첫날 부담 없이 즐기기 좋습니다."}
                   {activeDay === 1 && "2일차는 후쿠오카를 벗어나 남동쪽으로 길게 이동하는 교외 코스입니다. 료칸 입실 시간을 맞추는 것이 핵심입니다."}
                   {activeDay === 2 && "3일차는 자연(유후인)에서 도심(텐진)으로 복귀하는 동선입니다. 오후 쇼핑 시간 확보를 위해 일찍 출발하는 것을 권장합니다."}
                   {activeDay === 3 && "4일차는 서쪽 공원에서 하카타역으로 복귀하는 원형 동선입니다. 마지막 쇼핑 후 공항으로 가는 시간이 15분 내외로 매우 짧아 여유롭습니다."}
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Expanded Tips Section (Keep User Requested) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-amber-50 p-10 rounded-[3.5rem] border border-amber-100/50 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-amber-200/20 transition-all">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-amber-200/40 rounded-3xl flex items-center justify-center text-amber-700 mb-8 group-hover:scale-110 transition-transform"><User size={32} /></div>
              <h4 className="font-black text-2xl text-slate-900 mb-6 tracking-tighter">장인·장모님 케어 포인트</h4>
              <ul className="space-y-5">
                {[
                  "다자이후나 유후인 이동 시, 가족 전용 대형 택시 투어를 이용하면 무릎 피로가 훨씬 줄어듭니다.",
                  "전통 일식(카이세키)은 시각적 즐거움이 크지만, 간혹 입맛에 안 맞으실 수 있으니 한국식 김이나 반찬을 소량 준비하면 좋습니다.",
                  "온천 후 갑작스러운 온도 변화에 주의하시도록 가디건을 늘 준비해 주세요."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-amber-900/80 text-sm md:text-base leading-relaxed font-bold italic">
                    <span className="w-2.5 h-2.5 bg-amber-400 rounded-full mt-2 flex-shrink-0 shadow-sm"></span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-sky-50 p-10 rounded-[3.5rem] border border-sky-100/50 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-sky-200/20 transition-all">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-sky-200/40 rounded-3xl flex items-center justify-center text-sky-700 mb-8 group-hover:scale-110 transition-transform"><Baby size={32} /></div>
              <h4 className="font-black text-2xl text-slate-900 mb-6 tracking-tighter">만 3세 아이 동반 포인트</h4>
              <ul className="space-y-5">
                {[
                  "오호리 공원 내 '어린이 숲' 놀이터는 현지 아이들과 자연스럽게 어울릴 수 있는 안전한 공간입니다.",
                  "이동 시간이 긴 2일차 유후인 가는 길에는 아이가 지루해하지 않도록 영상물이나 간식을 충분히 준비하세요.",
                  "라라포트 내 키자니아나 대형 완구 코너는 아이가 가장 흥분할 수 있는 장소이니 미아 방지 끈이나 팔찌를 권장합니다."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-sky-900/80 text-sm md:text-base leading-relaxed font-bold italic">
                    <span className="w-2.5 h-2.5 bg-sky-400 rounded-full mt-2 flex-shrink-0 shadow-sm"></span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

