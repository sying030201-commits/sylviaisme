import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip,
  Cell,
  AreaChart,
  Area,
  CartesianGrid
} from 'recharts';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Database, 
  Zap, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Code,
  Layout,
  BarChart3,
  Cpu,
  Menu,
  X,
  Sparkles,
  ArrowLeftRight,
  RefreshCw,
  BarChart2,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Play,
  User,
  ArrowLeft,
  Globe,
  Edit3
} from 'lucide-react';
import { EVOLUTION_STAGES, WORK_CASES } from './constants';
import { Stage, WorkCase } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '进化史', href: '#evolution' },
    { name: '项目集', href: '#work' },
    { name: '关于', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-bg-deep/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-now z-50 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-now flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap size={18} className="text-bg-deep" />
          </div>
          SYLVIA<span className="text-now">.</span>LING
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-now transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-now text-bg-deep text-sm font-bold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(196,167,125,0.4)] transition-all">
            联系我
          </a>
        </div>

        <button className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-bg-charcoal border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black tracking-tight hover:text-now transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="w-full py-4 bg-now text-bg-deep text-center font-bold rounded-2xl shadow-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                联系我
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PowerBIDashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const data = [
    { name: 'Mon', competitors: 400, self: 240 },
    { name: 'Tue', competitors: 300, self: 139 },
    { name: 'Wed', competitors: 200, self: 980 },
    { name: 'Thu', competitors: 278, self: 390 },
    { name: 'Fri', competitors: 189, self: 480 },
    { name: 'Sat', competitors: 239, self: 380 },
    { name: 'Sun', competitors: 349, self: 430 },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <div className="w-full h-full bg-[#F3F2F1] rounded-lg overflow-hidden flex flex-col border border-gray-200 shadow-inner select-none">
      {/* PowerBI Header */}
      <div className="h-8 bg-[#111] flex items-center px-3 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-[10px] text-white font-medium">Power BI Desktop - Competitor_Insights_v2.pbix</span>
        </div>
        <div className="flex gap-3">
          <motion.button 
            onClick={handleRefresh}
            animate={isRefreshing ? { rotate: 360 } : {}}
            transition={isRefreshing ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}
            className="text-gray-400 hover:text-white"
          >
            <RefreshCw size={10} />
          </motion.button>
          <div className="flex gap-2">
            <div className="w-2 h-0.5 bg-gray-400 mt-2" />
            <div className="w-2 h-2 border border-gray-400" />
            <div className="w-2 h-2 text-gray-400 flex items-center justify-center text-[8px]">×</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-10 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-4">
          <div className="w-6 h-6 bg-yellow-500/10 rounded flex items-center justify-center text-yellow-600"><BarChart2 size={14} /></div>
          <div className="w-6 h-6 text-gray-400 flex items-center justify-center"><Layout size={14} /></div>
          <div className="w-6 h-6 text-gray-400 flex items-center justify-center"><Database size={14} /></div>
          <div className="mt-auto mb-4 w-6 h-6 text-gray-400 flex items-center justify-center"><Settings size={14} /></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-auto bg-[#F3F2F1]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[12px] font-black text-gray-800">Competitor Price Index Dashboard</h2>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-white border border-gray-200 rounded text-[8px] text-gray-500">Filter: All Regions</div>
              <div className="px-2 py-1 bg-white border border-gray-200 rounded text-[8px] text-gray-500">Last 7 Days</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Total Competitors', value: '124', color: 'text-gray-800', trend: '+12%', up: true },
              { label: 'Avg Price Index', value: '0.92', color: 'text-gray-800', trend: '-3%', up: false },
              { label: 'Market Share', value: '18.4%', color: 'text-gray-800', trend: '+1.2%', up: true },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-3 rounded shadow-sm border border-gray-100">
                <p className="text-[8px] text-gray-400 uppercase font-bold mb-1">{stat.label}</p>
                <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                <p className={`text-[8px] ${stat.up ? 'text-green-500' : 'text-red-500'} flex items-center gap-1 mt-1`}>
                  {stat.up ? <ArrowUpRight size={8} /> : <ArrowDownRight size={8} />} {stat.trend} vs LW
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 h-48 relative">
            {isRefreshing && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <RefreshCw size={24} className="text-yellow-500 animate-spin" />
                  <span className="text-[10px] font-bold text-gray-500">Updating data...</span>
                </div>
              </div>
            )}
            <div className="text-[10px] font-bold text-gray-700 mb-4 flex items-center gap-2">
              <div className="w-1 h-3 bg-yellow-500 rounded-full" /> Price Trend Comparison
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F2C811" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F2C811" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#999' }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ fontSize: '10px', borderRadius: '4px', border: '1px solid #eee' }}
                />
                <Area type="monotone" dataKey="competitors" stroke="#F2C811" strokeWidth={2} fillOpacity={1} fill="url(#colorComp)" />
                <Area type="monotone" dataKey="self" stroke="#111" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visualizations Panel */}
        <div className="w-32 bg-white border-l border-gray-200 p-2 flex flex-col gap-2">
          <p className="text-[8px] font-bold text-gray-400 uppercase mb-1">Visualizations</p>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`aspect-square border border-gray-100 rounded flex items-center justify-center ${i === 4 ? 'bg-yellow-500/20 border-yellow-500/40' : 'bg-gray-50'}`}>
                <div className={`w-3 h-3 rounded-sm ${i === 4 ? 'bg-yellow-500' : 'bg-gray-200'}`} />
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-gray-100 pt-2">
            <p className="text-[8px] font-bold text-gray-400 uppercase mb-1">Filters</p>
            <div className="space-y-2">
              {['Region', 'Category', 'Brand'].map(f => (
                <div key={f} className="p-1.5 bg-gray-50 border border-gray-200 rounded text-[8px] text-gray-600 flex justify-between items-center">
                  {f} <ChevronDown size={8} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PowerBI Footer */}
      <div className="h-6 bg-white border-t border-gray-200 flex items-center px-3 gap-4">
        <div className="flex gap-2 h-full">
          <div className="px-2 text-[8px] font-bold text-gray-800 border-b-2 border-yellow-500 flex items-center">Overview</div>
          <div className="px-2 text-[8px] font-medium text-gray-400 flex items-center">Price Analysis</div>
          <div className="px-2 text-[8px] font-medium text-gray-400 flex items-center">SKU Details</div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[8px] text-gray-400">
          Page 1 of 3 <ChevronRight size={8} />
        </div>
      </div>
    </div>
  );
};

const CodeSimulation = ({ type }: { type: 'SQL' | 'PROMPT' }) => {
  const [typedText, setTypedText] = useState('');
  const [showSql, setShowSql] = useState(false);
  
  const aiResponse = '正在分析上周美妆产品销售趋势...\n已为您生成 SQL 查询代码：';
  const generatedSql = `SELECT 
    region, 
    SUM(sales) as total_sales,
    AVG(price) as avg_price
FROM beauty_products
WHERE price BETWEEN 200 AND 500
  AND region = '上海'
  AND week = '2025-W10'
GROUP BY region;`;

  useEffect(() => {
    if (type === 'PROMPT') {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(aiResponse.slice(0, i));
        i++;
        if (i > aiResponse.length) {
          clearInterval(interval);
          setTimeout(() => setShowSql(true), 500);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [type]);

  return (
    <div className="w-full h-full bg-[#0D0D0D] rounded-xl overflow-hidden flex flex-col border border-white/10 shadow-2xl font-mono select-none">
      <div className="h-10 bg-[#1A1A1A] flex items-center px-4 justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
          </div>
          <span className="text-[10px] text-gray-500 ml-3 font-bold tracking-widest uppercase">
            {type === 'SQL' ? 'manual_query.sql' : 'ai_data_assistant.sh'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 w-[1px] bg-white/10" />
          <button className="px-3 py-1 bg-now/10 hover:bg-now/20 rounded-md text-[9px] text-now font-black flex items-center gap-1.5 transition-all border border-now/20">
            <Play size={10} fill="currentColor" /> RUN
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-5 text-[11px] overflow-auto custom-scrollbar">
        {type === 'SQL' ? (
          <div className="space-y-1.5 text-gray-400">
            <p><span className="text-[#569CD6]">SELECT</span></p>
            <p className="pl-5">t1.user_id,</p>
            <p className="pl-5">t1.order_date,</p>
            <p className="pl-5"><span className="text-[#DCDCAA]">SUM</span>(t1.amount) <span className="text-[#569CD6]">AS</span> daily_total,</p>
            <p className="pl-5">t2.category_name</p>
            <p><span className="text-[#569CD6]">FROM</span> orders t1</p>
            <p><span className="text-[#569CD6]">LEFT JOIN</span> categories t2 <span className="text-[#569CD6]">ON</span> t1.cat_id = t2.id</p>
            <p><span className="text-[#569CD6]">WHERE</span> t1.order_date {'>'} <span className="text-[#CE9178]">'2024-01-01'</span></p>
            <p><span className="text-[#569CD6]">GROUP BY</span> 1, 2, 4</p>
            <p><span className="text-[#569CD6]">ORDER BY</span> 2 <span className="text-[#569CD6]">DESC</span>;</p>
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-now/40 inline-block align-middle ml-1"
            />
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-muted shrink-0 border border-white/10"><User size={14} /></div>
              <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 text-white/70 max-w-[90%] text-[12px] leading-relaxed">
                分析上周上海地区 200-500元 美妆产品的销售趋势。
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-now flex items-center justify-center text-bg-deep shrink-0 shadow-[0_0_15px_rgba(196,167,125,0.4)]"><Zap size={14} /></div>
              <div className="bg-now/5 p-4 rounded-2xl rounded-tl-none border border-now/20 text-now max-w-[90%] text-[12px] leading-relaxed">
                <p className="whitespace-pre-wrap mb-3">{typedText}</p>
                {typedText.length < aiResponse.length && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-now inline-block align-middle ml-1"
                  />
                )}
                <AnimatePresence>
                  {showSql && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-black/40 rounded-xl border border-now/10 font-mono text-[10px] text-now/80 relative group/sql"
                    >
                      <div className="absolute top-2 right-2 opacity-0 group-hover/sql:opacity-100 transition-opacity">
                        <Code size={12} />
                      </div>
                      <pre className="whitespace-pre-wrap">{generatedSql}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const LocalizationSimulation = () => {
  return (
    <div className="w-full h-full bg-[#0D0D0D] rounded-xl overflow-hidden flex flex-col border border-white/10 shadow-2xl font-sans select-none">
      <div className="h-10 bg-[#1A1A1A] flex items-center px-4 justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[10px] text-gray-500 ml-3 font-bold tracking-widest uppercase">
            manual_localization_draft_v3.docx
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-5 text-[11px] overflow-auto custom-scrollbar space-y-6">
        {/* Source Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-then font-black text-[9px] uppercase tracking-widest">
            <Globe size={10} /> Source (Global Brief)
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-white/40 italic">
            "The new collection embodies the spirit of Parisian elegance with a modern edge. Perfect for the confident woman who values timeless style."
          </div>
        </div>

        {/* Manual Process Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-then font-black text-[9px] uppercase tracking-widest">
            <Edit3 size={10} /> Manual Adaptation (In Progress...)
          </div>
          
          <div className="space-y-3">
            {/* Weibo Draft */}
            <div className="p-3 bg-white/5 rounded-lg border border-then/20 relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-[8px] font-bold text-then/60">WEIBO DRAFT</div>
              <p className="text-white/60 line-through decoration-then/40 mb-1">全新系列体现了巴黎优雅的精神...</p>
              <p className="text-white/80">#YSL全新系列# 诠释巴黎时髦态度，经典与现代的碰撞。给每一位自信的你。</p>
              <div className="mt-2 flex gap-2">
                <span className="px-1.5 py-0.5 bg-then/10 text-then text-[8px] rounded">太正式了</span>
                <span className="px-1.5 py-0.5 bg-then/10 text-then text-[8px] rounded">加话题</span>
              </div>
            </div>

            {/* Xiaohongshu Draft */}
            <div className="p-3 bg-white/5 rounded-lg border border-then/20 relative overflow-hidden group">
              <div className="absolute top-2 right-2 text-[8px] font-bold text-then/60">RED DRAFT</div>
              <p className="text-white/80">✨ 巴黎名媛风天花板！YSL这波新品真的绝绝子... <span className="text-then">[待优化：语气太口语？]</span></p>
              <div className="mt-2 flex gap-2">
                <span className="px-1.5 py-0.5 bg-then/10 text-then text-[8px] rounded">表情包不够</span>
                <span className="px-1.5 py-0.5 bg-then/10 text-then text-[8px] rounded">排版乱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[9px] text-text-muted">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-then rounded-full animate-pulse" />
            Waiting for Legal Approval...
          </div>
          <div className="font-mono">Drafting Time: 45min</div>
        </div>
      </div>
    </div>
  );
};


const MagneticButton = ({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
      className={className}
    >
      <button onClick={onClick} className="w-full h-full flex items-center justify-center">
        {children}
      </button>
    </motion.div>
  );
};

interface WorkCardProps {
  work: WorkCase;
  initialMode?: 'THEN' | 'NOW';
}

const WorkCard: React.FC<WorkCardProps> = ({ work, initialMode = 'THEN' }) => {
  const [mode, setMode] = useState<'THEN' | 'NOW'>(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const radarData = [
    { subject: '卖点覆盖', A: 30, fullMark: 100 },
    { subject: '平台适配', A: 60, fullMark: 100 },
    { subject: '情感真诚', A: 45, fullMark: 100 },
    { subject: '互动引导', A: 50, fullMark: 100 },
    { subject: '合规安全', A: 90, fullMark: 100 },
  ];

  const efficiencyData = [
    { name: 'THEN', value: 30, color: '#4A5568' },
    { name: 'NOW', value: 5, color: '#C4A77D' },
  ];

  return (
    <div className="group relative">
      {/* Evolution Toggle - More prominent and intuitive */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
        <div className="relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            className="absolute -bottom-2 left-0 h-1 bg-now/30 rounded-full"
          />
          <h3 className="text-4xl font-black tracking-tighter mb-1">{work.title}</h3>
          <p className="text-text-muted text-sm font-medium tracking-wide uppercase">{work.subtitle}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mode === 'THEN' ? (
          <motion.div 
            key="then"
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="glass-card p-10 border-then/20 relative overflow-hidden group/card"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/card:opacity-[0.07] transition-opacity duration-700">
              <Clock size={240} />
            </div>

            {/* Centered Toggle Inside Card - Enhanced Visibility */}
            <div className="flex flex-col items-center mb-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-then/20 via-now/20 to-then/20 blur-xl opacity-50 group-hover/card:opacity-100 transition-opacity duration-1000" />
              <div className="relative flex items-center bg-bg-deep/80 backdrop-blur-xl p-2 rounded-[24px] border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)] group/toggle">
                {/* Animated Scan Line */}
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                />
                
                <motion.div 
                  layoutId={`toggle-bg-${work.id}`}
                  className={`absolute inset-y-2 rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${mode === 'THEN' ? 'left-2 w-[calc(50%-8px)] bg-then shadow-[0_0_25px_rgba(74,85,104,0.5)]' : 'left-[calc(50%+2px)] w-[calc(50%-8px)] bg-now shadow-[0_0_25px_rgba(196,167,125,0.5)]'}`}
                />
                <button 
                  onClick={() => setMode('THEN')}
                  className={`relative z-10 px-10 py-4 rounded-[18px] text-[11px] font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${mode === 'THEN' ? 'text-white scale-105' : 'text-text-muted hover:text-white'}`}
                >
                  <Clock size={16} className={mode === 'THEN' ? 'animate-pulse' : ''} /> 过去：手动时代
                </button>
                <button 
                  onClick={() => setMode('NOW')}
                  className={`relative z-10 px-10 py-4 rounded-[18px] text-[11px] font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${mode === 'NOW' ? 'text-bg-deep scale-105' : 'text-text-muted hover:text-white'}`}
                >
                  <Zap size={16} className={mode === 'NOW' ? 'animate-pulse' : ''} /> 现在：AI 进化
                </button>
              </div>
              
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-now/30" />
                  <motion.p 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1, 1.02, 1, 0.98] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="text-[10px] font-black text-now uppercase tracking-[0.4em] flex items-center gap-2"
                  >
                    <ArrowLeftRight size={12} className="text-now animate-bounce-x" />
                    点击切换 见证进化过程
                  </motion.p>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-now/30" />
                </div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-now/60"
                >
                  <ChevronDown size={14} />
                </motion.div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-10 text-xs font-mono">
              <span className="flex items-center gap-2 px-3 py-1 bg-then/10 text-then rounded-full border border-then/20">
                <Clock size={14} /> {work.then.time}
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-white/5 text-text-muted rounded-full border border-white/10">
                <MapPin size={14} /> {work.then.location}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="mb-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-then rounded-full" /> 场景还原
                  </h4>
                  <p className="text-2xl font-medium text-white/90 leading-snug">"{work.then.scenario}"</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-4">传统工作流</h4>
                    <div className="space-y-4 relative">
                      <div className="absolute left-2 top-2 bottom-2 w-px bg-then/20" />
                      {work.then.workflow.map((step, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-4 text-sm text-text-muted relative pl-6"
                        >
                          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-bg-deep border border-then/40 flex items-center justify-center text-[8px] font-mono text-then">
                            {i + 1}
                          </div>
                          {step}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-4">痛点分析</h4>
                    <div className="space-y-3">
                      {work.then.painPoints.map((point, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-then/30 transition-all"
                        >
                          <AlertCircle size={16} className="text-then shrink-0 mt-0.5" />
                          <p className="text-xs text-text-muted leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {work.id === 'multi-platform' && (
                  <div className="mt-12">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-then rounded-full" /> 手动本地化工作台
                    </h4>
                    <div className="h-[300px]">
                      <LocalizationSimulation />
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                {work.id === 'data-assistant' ? (
                  <div className="h-full min-h-[350px] flex flex-col">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-4">手动 SQL 查询模拟</h4>
                    <div className="flex-1">
                      <CodeSimulation type="SQL" />
                    </div>
                  </div>
                ) : work.id === 'multi-platform' ? (
                  <div className="h-full flex flex-col justify-center items-center">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-8 self-start">移动端适配存档</h4>
                    <div className="relative group/img">
                        <motion.div 
                          whileHover={{ y: -5, rotateY: -2, rotateX: 2 }}
                          className="relative w-[260px] h-[520px] bg-[#0a0a0a] rounded-[45px] border-[8px] border-[#1a1a1a] shadow-[0_0_60px_rgba(0,0,0,0.6)] overflow-hidden group/phone"
                        >
                          {/* Dynamic Island / Notch */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-1.5 px-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                          </div>
                          
                          {/* Screen Content - No Scroll */}
                          <div className="w-full h-full bg-white">
                            <img 
                              src="/elle.jpg" 
                              alt="Mobile Content"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          {/* Glass Reflection */}
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-40 z-20" />
                        </motion.div>
                        
                        {/* Decorative background glow */}
                        <div className="absolute -inset-20 bg-then/5 blur-[100px] rounded-full -z-10" />
                        
                        <div className="absolute bottom-6 -right-4 flex items-center gap-3 z-30 bg-bg-deep/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl">
                          <div className="w-2 h-2 bg-then rounded-full animate-pulse" />
                          <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                            Elle China Adaptation
                          </span>
                        </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-8 bg-then/5 rounded-2xl border border-then/10 relative overflow-hidden">
                      <div className="relative z-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-then mb-6">资源投入可视化</h4>
                        <div className="h-48 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={efficiencyData}>
                              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#737373' }} />
                              <Tooltip 
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ backgroundColor: '#141414', border: '1px solid #4A5568', borderRadius: '8px', fontSize: '10px' }}
                              />
                              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                                {efficiencyData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-[10px] text-text-muted uppercase font-bold">时间成本</span>
                          <span className="text-sm font-mono text-then">{work.then.timeCost.split('|')[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden aspect-video relative group/img border border-white/10 shadow-2xl">
                        <img 
                          src={work.id === 'kol-audit' 
                            ? "/hourglass.jpg" 
                            : work.id === 'comp-monitor'
                              ? "/com.JPG"
                              : `https://picsum.photos/seed/${work.id}-then-v2/800/450?grayscale`
                          } 
                          alt={work.id === 'kol-audit' ? "Hourglass Luxury Palettes" : "Manual era"} 
                          className={`w-full h-full object-cover transition-all duration-1000 ${work.id === 'kol-audit' || work.id === 'comp-monitor' ? 'opacity-100 group-hover/img:scale-105' : 'opacity-40 group-hover/img:scale-110 grayscale'}`}
                          referrerPolicy="no-referrer"
                        />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3 z-30">
                        <div className="w-2 h-2 bg-then rounded-full animate-pulse shadow-[0_0_10px_#4A5568]" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] drop-shadow-md">
                          {work.id === 'kol-audit' ? 'Hourglass 2025 限定彩盘' : work.id === 'comp-monitor' ? 'Competitor Report Archive' : 'Manual Process Archive'}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="text-then font-black uppercase tracking-widest mr-3">Insight</span> 
                  {work.then.insight}
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode('NOW')}
                className="px-6 py-3 bg-then/10 border border-then/30 rounded-xl text-xs font-bold text-then flex items-center gap-2 hover:bg-then hover:text-white transition-all"
              >
                查看 AI 重构方案 <ArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="now"
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="glass-card p-10 border-now/30 shadow-[0_0_80px_rgba(196,167,125,0.08)] relative overflow-hidden group/card"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity duration-700">
              <Zap size={240} />
            </div>

            {/* Centered Toggle Inside Card - Enhanced Visibility */}
            <div className="flex flex-col items-center mb-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-then/20 via-now/20 to-then/20 blur-xl opacity-50 group-hover/card:opacity-100 transition-opacity duration-1000" />
              <div className="relative flex items-center bg-bg-deep/80 backdrop-blur-xl p-2 rounded-[24px] border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)] group/toggle">
                {/* Animated Scan Line */}
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                />
                
                <motion.div 
                  layoutId={`toggle-bg-${work.id}`}
                  className={`absolute inset-y-2 rounded-[18px] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${mode === 'THEN' ? 'left-2 w-[calc(50%-8px)] bg-then shadow-[0_0_25px_rgba(74,85,104,0.5)]' : 'left-[calc(50%+2px)] w-[calc(50%-8px)] bg-now shadow-[0_0_25px_rgba(196,167,125,0.5)]'}`}
                />
                <button 
                  onClick={() => setMode('THEN')}
                  className={`relative z-10 px-10 py-4 rounded-[18px] text-[11px] font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${mode === 'THEN' ? 'text-white scale-105' : 'text-text-muted hover:text-white'}`}
                >
                  <Clock size={16} className={mode === 'THEN' ? 'animate-pulse' : ''} /> 过去：手动时代
                </button>
                <button 
                  onClick={() => setMode('NOW')}
                  className={`relative z-10 px-10 py-4 rounded-[18px] text-[11px] font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${mode === 'NOW' ? 'text-bg-deep scale-105' : 'text-text-muted hover:text-white'}`}
                >
                  <Zap size={16} className={mode === 'NOW' ? 'animate-pulse' : ''} /> 现在：AI 进化
                </button>
              </div>
              
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-now/30" />
                  <motion.p 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1, 1.02, 1, 0.98] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="text-[10px] font-black text-now uppercase tracking-[0.4em] flex items-center gap-2"
                  >
                    <ArrowLeftRight size={12} className="text-now animate-bounce-x" />
                    点击切换 见证进化过程
                  </motion.p>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-now/30" />
                </div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-now/60"
                >
                  <ChevronDown size={14} />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-10 text-xs font-mono">
              <span className="flex items-center gap-2 px-3 py-1 bg-now/10 text-now rounded-full border border-now/20">
                <Zap size={14} className="animate-pulse" /> {work.now.time}
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-white/5 text-text-muted rounded-full border border-white/10">
                <Sparkles size={14} /> {work.now.logic}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="mb-12">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-now rounded-full shadow-[0_0_8px_#C4A77D]" /> AI 驱动流程
                  </h4>
                  <div className="flex flex-wrap items-center gap-4">
                    {work.now.workflow.map((step, i) => (
                      <React.Fragment key={i}>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-5 py-3 bg-now/5 border border-now/20 rounded-xl text-sm font-bold text-now shadow-sm"
                        >
                          {step}
                        </motion.div>
                        {i < work.now.workflow.length - 1 && (
                          <motion.div 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <ChevronRight size={16} className="text-now/40" />
                          </motion.div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-6">核心架构</h4>
                    <div className="space-y-4">
                      <div className="group/item p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-now/20 transition-all">
                        <span className="text-[9px] font-black text-now/60 uppercase tracking-widest block mb-2">Data Input</span>
                        <div className="flex flex-wrap gap-2">
                          {work.now.architecture.input.map(item => (
                            <span key={item} className="text-[11px] text-white/80 flex items-center gap-1.5">
                              <div className="w-1 h-1 bg-now/40 rounded-full" /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="group/item p-4 bg-now/5 rounded-2xl border border-now/10 hover:border-now/30 transition-all">
                        <span className="text-[9px] font-black text-now uppercase tracking-widest block mb-2">AI Engine</span>
                        <div className="flex flex-wrap gap-2">
                          {work.now.architecture.process.map(item => (
                            <span key={item} className="text-[11px] text-now font-bold flex items-center gap-1.5">
                              <Sparkles size={10} /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="group/item p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-now/20 transition-all">
                        <span className="text-[9px] font-black text-now/60 uppercase tracking-widest block mb-2">Intelligence Output</span>
                        <div className="flex flex-wrap gap-2">
                          {work.now.architecture.output.map(item => (
                            <span key={item} className="text-[11px] text-white/80 flex items-center gap-1.5">
                              <div className="w-1 h-1 bg-now/40 rounded-full" /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-6">AI 评估模型</h4>
                    <div className="h-64 w-full bg-white/5 rounded-2xl border border-white/5 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                          <PolarGrid stroke="#ffffff10" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#737373', fontSize: 10 }} />
                          <Radar
                            name="AI Score"
                            dataKey="A"
                            stroke="#C4A77D"
                            fill="#C4A77D"
                            fillOpacity={0.3}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                {work.id === 'comp-monitor' ? (
                  <div className="h-full min-h-[450px] flex flex-col">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-4">PowerBI 自动化看板模拟</h4>
                    <div className="flex-1">
                      <PowerBIDashboard />
                    </div>
                  </div>
                ) : work.id === 'data-assistant' ? (
                  <div className="h-full min-h-[350px] flex flex-col">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-4">AI 智能对话生成 SQL</h4>
                    <div className="flex-1">
                      <CodeSimulation type="PROMPT" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-8 bg-now/5 rounded-2xl border border-now/10 relative overflow-hidden group/efficiency">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/efficiency:scale-110 transition-transform duration-700">
                        <Zap size={80} className="text-now" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-8">效率飞跃对比</h4>
                        <div className="flex items-end gap-6 mb-8">
                          <div className="flex-1">
                            <div className="flex justify-between text-[10px] text-text-muted mb-2 font-bold">
                              <span>手动耗时</span>
                              <span>{work.now.efficiency.then}</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-then/40"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-end gap-6">
                          <div className="flex-1">
                            <div className="flex justify-between text-[10px] text-now mb-2 font-bold">
                              <span>AI 耗时</span>
                              <span>{work.now.efficiency.now}</span>
                            </div>
                            <div className="h-3 bg-now/10 rounded-full overflow-hidden border border-now/20">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '5%' }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                className="h-full bg-now shadow-[0_0_15px_#C4A77D]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-8 bg-now/10 rounded-2xl border border-now/20 flex flex-col justify-between relative overflow-hidden">
                      <div className="relative z-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-now mb-4">核心创新</h4>
                        <div className="space-y-4">
                          {work.now.innovations.slice(0, 2).map((inn, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                              <h5 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-now rounded-full" /> {inn.title}
                              </h5>
                              <p className="text-[10px] text-text-muted leading-relaxed">{inn.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12">
                        <Zap size={160} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm text-text-muted leading-relaxed">
                  <span className="text-now font-black uppercase tracking-widest mr-3">Insight</span> 
                  {work.now.insight}
                </p>
              </div>
              <div className="flex gap-3">
                {work.now.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-text-muted">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Interactive Mouse Follower */}
      <motion.div 
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-now/5 blur-[120px] rounded-full pointer-events-none z-0"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 50 }}
      />
      
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/50 via-bg-deep to-bg-deep" />
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-now/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-then/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-now rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Evolution of a Marketer</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            从人工到<br />
            <span className="text-gradient-now">智能</span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-md mb-10 leading-relaxed">
            Hourglass、YSL、Dior教会我业务，<br />
            AI赋予我效率杠杆。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-now text-bg-deep font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
              查看进化史 <ArrowRight size={18} />
            </a>
            <a href="#about" className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-colors">
              关于我
            </a>
          </div>
        </motion.div>

        <div className="relative h-[600px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1px] h-full bg-gradient-to-b from-then via-now to-future opacity-30" />
          </div>
          
          <div className="space-y-24 relative">
            {EVOLUTION_STAGES.map((stage, i) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-bg-deep z-10 group-hover:border-now transition-colors">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted mb-1 block">{stage.year}</span>
                  <h3 className="text-xl font-bold group-hover:text-now transition-colors">{stage.title}</h3>
                  <p className="text-xs text-text-muted max-w-[200px]">{stage.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Evolution = () => {
  return (
    <section id="evolution" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
          alt="Tech background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">能力跃迁</h2>
          <p className="text-text-muted">THEN (过去) → NOW (现在) → FUTURE (未来)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVOLUTION_STAGES.map((stage) => (
            <motion.div 
              key={stage.id}
              whileHover={{ y: -10 }}
              className="glass-card p-8 border-white/5 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${stage.color}20`, border: `1px solid ${stage.color}40` }}>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: stage.color }} />
              </div>
              
              <span className="text-xs font-mono text-text-muted mb-2 block">{stage.year}</span>
              <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
              <p className="text-sm text-text-muted mb-8 leading-relaxed">{stage.subtitle}</p>
              
              <div className="flex flex-wrap gap-2">
                {stage.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const [globalMode, setGlobalMode] = useState<'THEN' | 'NOW'>('THEN');

  return (
    <section id="work" className="py-32 bg-bg-charcoal/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-now/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-then/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-now rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-now">Evolution Showcase</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">项目进化集</h2>
          <p className="text-xl text-text-muted max-w-2xl mb-16 leading-relaxed">
            每一个项目都是一次从人工到智能的思考优化，见证从“明白深耕”到“效率杠杆”的跃迁。
          </p>

          {/* Global Evolution Controller */}
          <div className="relative group/global-toggle">
            {/* Discovery Hint */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="px-4 py-2 bg-now text-bg-deep text-[10px] font-black rounded-full shadow-xl flex items-center gap-2 animate-bounce">
                <ArrowLeftRight size={12} /> 试试点击这里，见证全域进化
              </div>
            </motion.div>

            <div className="absolute -inset-4 bg-gradient-to-r from-then/20 via-now/20 to-then/20 blur-2xl opacity-0 group-hover/global-toggle:opacity-100 transition-opacity duration-700" />
            <div className="relative flex items-center bg-bg-deep p-2 rounded-[32px] border border-white/10 shadow-2xl">
              <motion.div 
                animate={{ 
                  left: globalMode === 'THEN' ? '8px' : 'calc(50% + 1px)',
                  width: 'calc(50% - 9px)'
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                className={`absolute inset-y-2 rounded-[24px] ${globalMode === 'THEN' ? 'bg-then shadow-[0_0_20px_rgba(74,85,104,0.4)]' : 'bg-now shadow-[0_0_20px_rgba(196,167,125,0.4)]'}`}
              />
              <button 
                onClick={() => setGlobalMode('THEN')}
                className={`relative z-10 px-12 py-5 rounded-[24px] text-sm font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${globalMode === 'THEN' ? 'text-white' : 'text-text-muted hover:text-white'}`}
              >
                <Clock size={20} className={globalMode === 'THEN' ? 'animate-spin-slow' : ''} /> 全局过去
              </button>
              <button 
                onClick={() => setGlobalMode('NOW')}
                className={`relative z-10 px-12 py-5 rounded-[24px] text-sm font-black tracking-widest transition-all duration-500 flex items-center gap-3 ${globalMode === 'NOW' ? 'text-bg-deep' : 'text-text-muted hover:text-white'}`}
              >
                <Zap size={20} className={globalMode === 'NOW' ? 'animate-pulse' : ''} /> 全局现在
              </button>
            </div>
            <p className="mt-6 text-[10px] font-black text-now uppercase tracking-[0.4em] opacity-40">
              一键切换 见证全域进化
            </p>
          </div>
        </div>

        <div className="space-y-40">
          {WORK_CASES.map((work) => (
            <WorkCard key={`${work.id}-${globalMode}`} work={work} initialMode={globalMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const skillData = [
    { name: 'Manual MKT', value: 90, full: 100 },
    { name: 'AI Prompting', value: 85, full: 100 },
    { name: 'Data Analysis', value: 75, full: 100 },
    { name: 'Strategy', value: 80, full: 100 },
    { name: 'Efficiency', value: 95, full: 100 },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="mb-12 rounded-2xl overflow-hidden h-80 border border-white/10 shadow-2xl group/img relative">
              <img 
                src="/me.JPG" 
                alt="Sylvia Ling" 
                className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-black text-white">Sylvia Ling</h3>
                <p className="text-now text-xs font-mono font-bold uppercase tracking-widest">AI-Driven Marketer</p>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12">关于我</h2>
            
            <div className="space-y-12 relative">
              <div className="absolute left-[23px] top-0 w-[1px] h-full bg-white/10" />
              
              <div className="flex gap-8 relative">
                <div className="w-12 h-12 rounded-full bg-then flex items-center justify-center z-10 border-4 border-bg-deep">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-then font-bold mb-1 block">2024</span>
                  <h4 className="text-lg font-bold mb-1">THEN</h4>
                  <p className="text-sm text-text-muted">手工时代 · 明白深耕</p>
                </div>
              </div>

              <div className="flex gap-8 relative">
                <div className="w-12 h-12 rounded-full bg-now flex items-center justify-center z-10 border-4 border-bg-deep">
                  <Zap size={20} className="text-bg-deep" />
                </div>
                <div>
                  <span className="text-xs font-mono text-now font-bold mb-1 block">2025</span>
                  <h4 className="text-lg font-bold mb-1">NOW</h4>
                  <p className="text-sm text-text-muted">AI重构 · 效率杠杆</p>
                </div>
              </div>

              <div className="flex gap-8 relative">
                <div className="w-12 h-12 rounded-full bg-future flex items-center justify-center z-10 border-4 border-bg-deep">
                  <ArrowRight size={20} className="text-bg-deep" />
                </div>
                <div>
                  <span className="text-xs font-mono text-future font-bold mb-1 block">FUTURE</span>
                  <h4 className="text-lg font-bold mb-1">持续进化</h4>
                  <p className="text-sm text-text-muted">寻找下一个场景</p>
                </div>
              </div>
            </div>

            <div id="contact" className="mt-20 pt-12 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <MagneticButton 
                  onClick={() => copyToClipboard('im.sylvia@outlook.com', 'email')}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors relative group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Mail size={24} className="text-now group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Email</span>
                    <span className="text-xs font-bold truncate max-w-full">{copied === 'email' ? '已复制' : '邮件'}</span>
                  </div>
                </MagneticButton>
                <MagneticButton 
                  onClick={() => copyToClipboard('195 3329 6523', 'phone')}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors relative group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Phone size={24} className="text-now group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Phone</span>
                    <span className="text-xs font-bold">{copied === 'phone' ? '已复制' : '电话'}</span>
                  </div>
                </MagneticButton>
              </div>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-now/10 flex items-center justify-center text-now">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Location</p>
                  <span className="text-sm font-medium">上海</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-16">
          <div>
            <h3 className="text-3xl font-black mb-10 tracking-tight">为什么会产生这些思考？</h3>
            <div className="space-y-10 text-text-muted leading-relaxed">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-8 border-l-2 border-then/30"
              >
                <span className="text-then font-black uppercase tracking-widest block mb-3 text-xs">第一幕：过去的实习</span>
                <p className="text-lg text-white/80">
                  Hourglass、YSL、Dior，三个品牌，教会我：什么是好内容。我审核过30+条脚本，管理过60+场活动，写过16份数据报告。
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 border-l-2 border-white/10"
              >
                <span className="text-white font-black uppercase tracking-widest block mb-3 text-xs">第二幕：遇到的瓶颈</span>
                <p className="text-lg text-white/80">
                  但我也被困住了。每天重复同样的审核、整理、改写，时间被切割成碎片，策略思考成了奢侈。我开始怀疑：这就是工作的全部吗？
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative pl-8 border-l-2 border-now/30"
              >
                <span className="text-now font-black uppercase tracking-widest block mb-3 text-xs">第三幕：AI 带来的可能性</span>
                <p className="text-lg text-white/80">
                  ChatGPT 出现时，我没有焦虑，而是兴奋。我发现那些困住我的重复劳动，恰恰是最适合 AI 优化的环节。
                </p>
              </motion.div>
            </div>
          </div>

          <div className="p-10 bg-now/5 border border-now/20 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Sparkles size={120} className="text-now" />
            </div>
            <h4 className="text-now font-black uppercase tracking-[0.2em] text-[10px] mb-6">核心认知 / Core Insight</h4>
            <p className="text-2xl text-white font-bold leading-tight relative z-10">
              "我不需要 AI 替代我，我需要 AI 放大我的思考。懂业务的人 + AI 工具，才是完整的竞争力。"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-8">能力图谱 / Skill Radar</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#ffffff10" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#737373', fontSize: 10 }} />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#C4A77D"
                      fill="#C4A77D"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="glass-card p-8 border-white/5 flex-1">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-6">教育背景</h4>
                <div>
                  <h5 className="text-xl font-bold mb-1">上海商学院</h5>
                  <p className="text-sm text-text-muted mb-6">商务经济学 | 2026 届本科</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-now uppercase mb-1">相关课程</p>
                      <p className="text-xs text-text-muted">经济学、市场营销、商业数据分析</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-now uppercase mb-1">专业技能</p>
                      <p className="text-xs text-text-muted">SQL | Power BI | AI Prompting | LLM Workflow | 雅思 6.5 | PS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/10 text-center relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-now flex items-center justify-center">
            <Zap size={20} className="text-bg-deep" />
          </div>
          <span className="text-xl font-black tracking-tighter">SYLVIA LING</span>
        </div>
        
        <div className="flex gap-8 mb-12">
          <a href="#evolution" className="text-sm text-text-muted hover:text-white transition-colors">进化史</a>
          <a href="#work" className="text-sm text-text-muted hover:text-white transition-colors">项目集</a>
          <a href="#about" className="text-sm text-text-muted hover:text-white transition-colors">关于我</a>
        </div>

        <p className="text-xs text-text-muted mb-4">
          © {new Date().getFullYear()} SYLVIA LING. Built with AI & Passion.
        </p>
        <p className="text-[10px] text-text-muted uppercase tracking-widest opacity-30">
          Crafted for the future of marketing
        </p>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 w-14 h-14 bg-now text-bg-deep rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
          >
            <ChevronRight size={24} className="-rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-now/30 selection:text-now">
      <Navbar />
      <main>
        <Hero />
        <Evolution />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}
