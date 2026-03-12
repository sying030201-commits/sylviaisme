import { EvolutionStage, WorkCase } from './types';

export const EVOLUTION_STAGES: EvolutionStage[] = [
  {
    id: 'THEN',
    year: '2024',
    title: '人工时代',
    subtitle: '在Hourglass、YSL、Dior，我学会了用人工精度打磨内容',
    description: '手工时代 · 业务深耕',
    color: '#4A5568',
    tags: ['KOL全流程', 'SQL数据分析', '竞品研究', '线下活动', '新闻稿本地化', '内容优化']
  },
  {
    id: 'NOW',
    year: '2025',
    title: 'AI重构',
    subtitle: '用AI重构每一个重复环节，把省下的时间还给策略与创意',
    description: 'AI重构 · 效率杠杆',
    color: '#C4A77D',
    tags: ['ChatGPT', 'Claude', 'SQL', 'Power BI', 'Python', 'Automation']
  },
  {
    id: 'FUTURE',
    year: 'FUTURE',
    title: '持续进化',
    subtitle: '寻找下一个值得被AI优化的业务场景',
    description: '持续进化 · 寻找下一个场景',
    color: '#F5F5F5',
    tags: ['AI视频生成', '智能用户分层', '自动化投放', '多Agent协作']
  }
];

export const WORK_CASES: WorkCase[] = [
  {
    id: 'kol-audit',
    title: 'KOL内容审核系统',
    subtitle: '从30分钟/条到5分钟/条的进化',
    then: {
      time: '2024.09 - 2024.12',
      location: 'HOURGLASS · Marketing',
      scenario: '2025限定彩盘中国市场种草',
      workflow: [
        '理解核心卖点，沟通产品brief',
        '达人提交脚本，微信/邮件接收',
        '逐条阅读，标记问题（卖点缺失、调性不符、互动弱）',
        '撰写修改建议，反馈给达人',
        '等待修改，再次确认',
        '最终审核，确认上线'
      ],
      timeCost: '单条30min | 30条总计15h | 每周3-4轮',
      painPoints: [
        '标准依赖个人经验，难以统一传承',
        '高频重复劳动，策略思考时间被挤压',
        '达人反复修改，沟通成本高'
      ],
      insight: '懂业务——知道什么是好内容，知道平台调性，知道用户痛点。这为后来的AI重构打下了基础。'
    },
    now: {
      time: '2025 重构方案',
      logic: '基于Hourglass经验，用AI重构审核流程',
      workflow: ['批量导入脚本', 'AI自动评分', '人工复核低分内容', '输出优化建议'],
      architecture: {
        input: ['达人原始脚本', '产品核心卖点清单', '平台调性要求'],
        process: ['5维度评估算法', '自然语言理解', '结构化输出'],
        output: ['总体评分', '分维度雷达图', '具体优化建议', '优先级标记']
      },
      innovations: [
        { title: '评分维度标准化', content: '卖点覆盖率30% | 平台适配度25% | 情感真诚度20% | 互动引导力15% | 合规安全度10%' },
        { title: 'Prompt工程', content: '角色设定 + 任务描述 + 输入格式 + 输出规范，让AI输出稳定可预期' }
      ],
      efficiency: {
        then: '30分钟/条',
        now: '5分钟/条',
        multiplier: '6倍'
      },
      tools: ['ChatGPT API', 'Google Sheets', 'Power BI'],
      insight: 'AI不是万能，只有知道审核的痛点在哪，才能设计出有效的AI协作流程。'
    }
  },
  {
    id: 'comp-monitor',
    title: '竞品监测引擎',
    subtitle: '从手动整理到AI实时洞察',
    then: {
      time: '2024.09 - 2024.12',
      location: 'HOURGLASS · Marketing',
      scenario: '每月输出竞品与内容趋势报告',
      workflow: [
        '手动浏览小红书、抖音，截图保存爆款笔记',
        'Excel记录：标题、封面、互动数据、内容结构',
        'PPT整理分析，提炼可复用规律'
      ],
      timeCost: '每周8+小时 | 月度报告3-4天',
      painPoints: [
        '手动采集，覆盖面有限',
        '个人记忆，难以传承',
        '报告制作，重复排版'
      ],
      insight: '这些经历让我意识到：很多时间被重复劳动吃掉，策略思考被挤压。'
    },
    now: {
      time: '2025 重构方案',
      logic: '从手动监测到AI引擎',
      workflow: ['数据采集', 'AI分析', '洞察生成', '自动报告'],
      architecture: {
        input: ['八爪鱼爬虫/平台API', '热门笔记字段'],
        process: ['标题公式提取', '内容结构拆解', '趋势预警'],
        output: ['Canva自动排版', 'Power BI Dashboard', '邮件定时推送']
      },
      innovations: [
        { title: '标题公式提取', content: '从100个高互动标题中提取5大可复用结构' },
        { title: '趋势预警', content: '本月vs上月关键词频次，热度上升/下降TOP10' }
      ],
      efficiency: {
        then: '8小时/周',
        now: '30分钟/周',
        multiplier: '16倍'
      },
      tools: ['八爪鱼', 'ChatGPT', 'Canva', 'Power BI'],
      insight: 'AI不是替代我的行业理解，而是把我从数据采集解放出来，专注洞察提炼。'
    }
  },
  {
    id: 'data-assistant',
    title: '数据复盘助手',
    subtitle: '从SQL查询到自然语言洞察',
    then: {
      time: '2024.05 - 2025.06',
      location: 'SAINT LAURENT · PR',
      scenario: '全年15+ campaign投放数据复盘',
      workflow: [
        'SQL查询：按达人类型、内容形式提取数据',
        'Excel透视：计算互动率、CPM、ROI',
        '报告撰写：人工分析数据，提炼优化建议'
      ],
      timeCost: '单份报告2.5h',
      painPoints: [
        'SQL编写耗时',
        '数据清洗繁琐',
        '人工分析主观性强'
      ],
      insight: '熟练使用SQL进行多表关联、数据清洗、分组聚合，为AI生成SQL打下基础。'
    },
    now: {
      time: '2025 重构方案',
      logic: '从SQL查询到自然语言洞察',
      workflow: ['需求描述', 'AI生成SQL', '运行查询', 'AI解读', '自动报告'],
      architecture: {
        input: ['自然语言需求'],
        process: ['AI生成SQL', 'AI数据洞察'],
        output: ['PPT初稿', '邮件摘要', '异常点标注']
      },
      innovations: [
        { title: '自然语言转SQL', content: '输入需求，AI生成带注释的SQL代码' },
        { title: 'AI数据解读', content: '自动生成关键发现、异常标注及执行建议' }
      ],
      efficiency: {
        then: '2.5小时/份',
        now: '32分钟/份',
        multiplier: '4.7倍'
      },
      tools: ['SQL', 'ChatGPT', 'Canva'],
      insight: '我会SQL，所以能判断AI生成的代码是否正确；我会业务，所以能判断AI的洞察是否有价值。'
    }
  },
  {
    id: 'multi-platform',
    title: '一稿多平台适配',
    subtitle: '从人工本地化到AI智能适配',
    then: {
      time: '2024.05 - 2025.06',
      location: 'SAINT LAURENT · PR',
      scenario: '新闻稿本地化 + 双平台内容运营',
      workflow: [
        '总部英文新闻稿 → 中国市场适配',
        '同一campaign → 微博短文案/小红书长图文改写',
        '跨部门协作：海外团队、法务、媒体沟通'
      ],
      timeCost: '3平台共90min',
      painPoints: [
        '重复改写，效率低下',
        '多平台调性切换耗神',
        '人工本地化速度慢'
      ],
      insight: '懂品牌调性（保持YSL的酷感），懂平台差异（微博快传播 vs 小红书深种草）。'
    },
    now: {
      time: '2025 重构方案',
      logic: '从人工本地化到AI智能适配',
      workflow: ['素材输入', 'AI多平台生成', '人工精修', '统一发布'],
      architecture: {
        input: ['产品核心信息', '卖点清单', '目标人群'],
        process: ['平台调性库匹配', '多版本并行生成'],
        output: ['微博版', '小红书版', '抖音版']
      },
      innovations: [
        { title: '平台调性库', content: '基于运营经验训练的结构化Prompt' },
        { title: '智能适配引擎', content: '同时生成三平台版本，保持核心卖点一致' }
      ],
      efficiency: {
        then: '90分钟/套',
        now: '20分钟/套',
        multiplier: '4.5倍'
      },
      tools: ['ChatGPT', 'Notion'],
      insight: 'AI生成的是"合格的60分"，我的价值是把它打磨到"品牌调性的90分"。'
    }
  }
];
