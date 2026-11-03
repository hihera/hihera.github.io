// 首页中英文内容。改文案只改这里。
// 字段里允许少量 HTML（强调、换行、待补标记），页面用 set:html 渲染。
// 图片为空字符串时，页面显示"图片待补"占位。
//
// 模块取舍（每个模块回答面试官的一个问题）：
//   首屏 + 成就条 → 这人是谁、什么级别
//   01 作品       → 现在真的懂 AI、能亲手做吗
//   02 业务       → 能扛一条业务线吗
//   03 方法       → 怎么思考、有没有方法论
//   04 研究       → 有没有持续的行业判断（只放已完成的）
//   05 关于       → 是个什么样的人
// 写法：做了什么一句话 → 为什么做 → 关键决策 → 价值或结果。只换表达的坐标系，不改事实。

export type Lang = 'zh' | 'en';

const TODO = (s: string) => `<span class="todo">${s}</span>`;

export const content = {
  zh: {
    htmlLang: 'zh-CN',
    title: 'Hera · AI 产品负责人',
    description: '研发出身的 AI 产品负责人。把视觉 AI 从定制项目做成标准产品线，累计营收 3 亿+，落地亚太 8 个国家和地区；联合创办 AI 医养公司，从 0 跑通垂直 Agent 商业闭环；现在亲手做 AI 产品。',
    switchLabel: 'EN',
    switchHref: '/en/',
    nav: [['works', '作品'], ['business', '业务'], ['principles', '方法'], ['thinking', '研究'], ['about', '关于']],
    imgTodo: '图片待补',

    hero: {
      hello: '你好，我是 Hera，连接技术、场景与商业的 AI 产品负责人。',
      h1: '模型定义能力上限，<br>产品决定<span class="hl">用户触达多少</span>。',
      intro: '研发出身，对新技术永远好奇。从推荐算法、视觉 AI 到大模型，每一轮技术浪潮我都在一线：在商汤，我把企业级视觉 AI 产品线从 0 到 1 孵化出来，做到数亿级营收；大模型来了，我联合创办 AI 医养公司，从 0 跑通垂直 Agent 商业闭环。有时，我也用 AI 编程亲手做产品，判断一个想法好不好，先做出来试试。',
      creds: ['前商汤 · 视觉 AI 商业化负责人', '乘黄智医联合创始人 / CPO', '清华 MEM', '越野跑者'],
      cta: ['看我做的 AI 产品', '联系我'],
      photoAlt: 'Hera',
    },

    strip: {
      label: '这些年做成的事',
      work: [['10', '年 AI 产品商业化'], ['3 亿+', '业务线累计营收'], ['8', '个落地国家和地区'], ['50+', '项已授权专利软著']],
      build: [['5', '个自研 AI 产品'], ['4', '个开源 Skill']],
      github: 'GitHub ↗',
    },

    works: {
      kicker: '01 · 作品',
      h: '亲手做的 AI 产品',
      p: '全链路产品落地实践案例。从需求、设计、开发到上线，每一个都是我用 AI 编程从 0 做出来、每天自己在用的。做过，才知道问题在哪里。',
      flag: {
        badge: '旗舰作品 · 持续迭代',
        name: 'PMCopilot',
        tag: '企业级 AI 提效解决方案',
        desc: '为 ToB 产品团队搭建的 AI 工作流：把散落在会议、群聊、知识库里的信息收拢到一处，从客户和商务沟通，到调研报告、需求文档、解决方案和报价测算，一句话启动，数据一路贯通。',
        kv: [
          ['为什么做', 'ToB AI 公司的瓶颈往往不在模型，而在如何把能力变成订单。调研、需求、方案、报价，每一步都靠资深产品经理手工拼装，重复又低效；经验锁在个人手里，团队产能被少数人卡住。'],
          ['核心价值', '把资深产品经理的方法论沉淀成团队的系统，先服务产品团队，再延伸到销售和售前，让一线当天就能给出方案和报价。'],
        ],
        tabs: [
          ['报告', '13 种报告随叫随到：一句话发起，自动匹配报告类型，子 Agent 并行调研，结论可回溯到来源'],
          ['需求', '先大纲后全文：自动读取飞书里的客户沟通纪要，信息不全就追问，按 20 章标准结构输出需求文档'],
          ['方案', '按客户场景匹配产品能力，生成能直接演示的方案 PPT，能力边界和合规自动检查'],
          ['报价', '计算引擎按价格表出报价并测算毛利；超出折扣权限转人工审批，对外导出时自动隐藏成本'],
        ],
      },
      // 屋小家：作品区小卡片；showDemo 改成 true 会恢复“小屋灵”在线助手演示
      wxj: {
        meta: 'C 端产品 · 初版自用中',
        name: '屋小家',
        tag: '家庭物品智能管家',
        desc: '家里有什么、放在哪里、什么时候过期，问一句小屋灵就知道。拍照即录入，用游戏化让人愿意持续维护。',
        shots: ['/assets/works/wuxiaojia/home.webp', '/assets/works/wuxiaojia/kitchen.webp', '/assets/works/wuxiaojia/detail.webp'],
        showDemo: false,
      },
      reposHead: '把验证过的工作方法开源',
      reposTitle: '开源 Skill',
      reposSub: '装进 Claude Code / Codex 就能用',
      repos: [
        ['book-deep-read', '通过 AI 拆书 Skill 生成 15 种可核验的交付物，帮你深度吸收一本书，形成一套可随时调用的知识资产。', '/assets/works/skills/book.svg', 'AI 拆书 Skill'],
        ['deep-content-extract', '长视频和播客最大的问题是吸收时间长，没法随时引用。它把内容变成观点、故事和思维框架，外加一张核心结构图。', '/assets/works/skills/extract.svg', '深度内容提取'],
        ['hera-content-radar-skill', '获取信息的途径远比信息本身更重要。它是知识雷达背后的引擎：只追踪精选的全球顶尖信源，每条结论都有出处。', '/assets/works/skills/radar.svg', '每日 AI 资讯'],
        ['hera-article-illustrations', '给文章生成统一的 HERA 机器人场景插画和手绘方法图，让文章更生动，更容易理解。', '/assets/works/skills/illustration.svg', '文章生成配图'],
      ],
      repoGo: '查看仓库 ↗',
      workflows: '另有自用工作流：大模型接入飞书，自动写文档、盯群聊、做定期复盘和消息日报。每天琐碎的信息整理交给 AI，时间留给判断和决策。',
      labTitle: '更多作品',
      whyLabel: '为什么做',
      valueLabel: '价值',
      visit: '在线访问 ↗',
      lab: [
        {
          name: '知识雷达', tag: "Hera's Daily",
          desc: 'AI 信息从来不缺，缺的是判断：每天把几十条 AI 动态，压缩成十条左右有出处、可验证的判断。',
          why: '',
          points: [
            '每条洞察 = 一个判断 + 接下来该关注的重点 + 可点开的原始出处',
            '每天追踪 YouTube、播客、Newsletter、93 位 X 博主和 30 个网站',
            '740 篇 Lenny、Stratechery 长文进入知识库，按 8 个方向整理成笔记',
          ],
          value: '相当于一个人的行业研究部：每天产出判断和结论，长期沉淀成可检索的知识库。',
          status: '每天自动更新',
          imgs: ['/assets/works/radar/insight.webp', '/assets/works/radar/knowledge.webp', '/assets/works/radar/directory.webp'],
          link: '',
          linkLabel: '开源 Skill ↗',
          hidden: false,
        },
        {
          name: '复利人生', tag: 'Lifewin',
          desc: '把每一次行动，变成看得见的成就；把每天的时间，投进真正值得的长期方向。时间花在哪里，成长就在哪里。',
          why: '',
          points: [
            '定方向：想清楚人生中值得长期深耕的几个方向，比如表达、运动、英语',
            '看投入：每天的时间投到了哪里，计划和实际一对照，偏差一眼就能看到',
            '定今天：根据长期方向和投入缺口，知道今天最该做的那件事',
            '做复盘：定期复盘、调整方向和节奏，让成长形成闭环，越走越快',
          ],
          value: '方法来自《原子习惯》：每一次行动，都是在为想成为的人投票。系统把长期投入变成看得见的积累，让成长像复利一样发生。',
          status: '每天记录时间',
          imgs: [],
          video: '/assets/works/lifewin/wall.mp4',
          poster: '/assets/works/lifewin/wall-poster.webp',
          link: '',
          linkLabel: '',
          hidden: false,
        },
        {
          // 没有独特卖点之前先不展示
          name: '英语学习', tag: '',
          desc: TODO('【做什么、AI 用在哪，待补】'),
          why: TODO('【待补】'),
          points: [],
          value: '',
          status: '初版',
          imgs: [],
          link: '',
          linkLabel: '',
          hidden: true,
        },
      ],
    },

    business: {
      kicker: '02 · 业务',
      h: '负责过的业务',
      p: '每一段经历都从一个难题开始：从 0 到 1 跑通，再闯过标准化、规模化、商业化三关。',
      go: '查看案例 →',
      clientsLabel: '服务过的客户与项目',
      clients: ['北京冬奥会', '香港赛马会', '新鸿基地产', '南丰集团', '日本 USEN', '软银', '海尔', '中国商飞', 'HANCOM', 'SUPREMA', 'MAGNUM', 'KENT', '新潮传媒', '高思教育', '微博', 'BIGO'],
      cases: [
        {
          img: '/assets/projects/hkjc-smart-retail.webp',
          meta: '商汤科技 · 业务线负责人 · 2017 – 2023',
          title: '从 0 到 1 孵化视觉 AI 产品线，从单点项目走向生态与出海',
          desc: '带 20 人团队：从数字广告转向商业洞察，自研“端-边-云”方案；标准化后交给集成商复制；出海拿下软银等海外客户，全球累计 30+ 家头部客户。',
          stats: [['3 亿+', '3 年累计营收'], ['10000+', '路设备部署'], ['8', '个国家和地区']],
        },
        {
          img: '/assets/projects/olympics-curling.webp',
          meta: '商汤科技 · 产品负责人 · 2020 – 2023',
          title: '冬奥冰壶：主导零容错的国家级项目，孵化出一条新的工业产品线',
          desc: '国家级科研课题：42 路摄像机实时还原冰壶三维轨迹，亮相冬奥会、残奥会和世锦赛，产出 10+ 项专利；整套架构和方案再复用到工业产品线。',
          stats: [['3.3cm', '三维还原精度'], ['0', '次现场故障'], ['3000 万+', '工业线营收']],
        },
        {
          img: '/assets/projects/eldercare-scene.webp',
          meta: '乘黄智医 · 联合创始人 · 2023 – 2026',
          title: '创新 AI 医养融合模式：从 0 创办公司，跑通垂直 Agent 商业闭环',
          desc: '面向中高端养老机构，以“全科医生 + AI”提供医养融合和数字化服务：帮机构提升运营质量和服务效率，用慢病管理让老人活得更久、更健康。',
          stats: [['12', '家养老机构'], ['4 倍', '医生接诊效率'], ['2400', '服务人数']],
        },
      ],
    },

    principles: {
      kicker: "03 · 方法",
      h: "我做 AI 产品的四条原则",
      p: "离客户近一点，离结果近一点。",
      items: [
        ["做离客户最近的产品", "设计功能的同时就要设计怎么卖：谁付钱、为什么买、凭什么现在买。站在采购者和使用者的视角，而不只是功能的视角。", ["零售：客户说“数据看了不知道怎么用”，于是把看板接到会员营销，系统才变成能带来营收的工具"]],
        ["客户买的是结果，不是精度", "不追求工程师的浪漫。花高成本把精度提升 1%，客户未必有感觉，他关心的是 ROI。算法、工程、规则和指标定义组合起来解决问题。", ["零售：用端-边-云方案和工程手段，把目标从 99% 的实验室精度，换成客户认可的 85% 业务指标"]],
        ["好不好，验证过才算", "AI 让做产品变容易了，判断什么是好产品反而更难。建立多层评测，深挖坏案例，不把客户当测试员。", ["零售：自建门店视频测试集，走完 4 轮 UAT", "医养：1200+ 条用例的评测集"]],
        ["先完成，再完美；验证了，再放大", "先用小切口快速验证能不能落地、能不能卖：只服务一类客户，只解决一个问题，跑通再复制，不一开始就做大而全。", ["医养：先服务医生和护工，先用规则引擎，验证后才上 Agent", "创业教训：两条产品线同时做，资源被摊薄"]],
      ],
    },

    thinking: {
      kicker: '04 · 研究',
      h: '研究与思考',
      p: '我形成判断的方式：拆产品、做竞调、读一手材料、做动手实践、把思考写下来。',
      read: '阅读全文 →',
      readReport: '阅读报告 →',
      sysTitle: '先从自用开始，我给自己搭的两个系统',
      cards: [
        ['创业复盘 · 2026.10', '产品成立之后：一家 AI 医养公司教会我的商业课', '我们证明了产品有用，却没能证明生意能规模化。问题不在产品本身，而在产品之外的四笔账。', '/thinking/after-product-market/'],
        ['行业思考 · 2026.10', '从计算机视觉到 Agent：AI 产品最贵的错误，是把技术当成目的', '跨视觉 AI 和大模型两轮浪潮，同一种错误反复出现。客户最终买的，是更低的总成本和更确定的结果。', '/thinking/technology-is-not-the-goal/'],
      ],
      // 调研报告：页面由 Downloads/AI调研报告/_tools/sync-site.cjs 同步到 public/research/
      reports: [
        ['研究报告 · 2026.11', '编程与办公智能体：12 款产品横向拆解', '两条赛道正在合流，编程 Agent 正在成为办公 Agent 的引擎；能力趋同之后，竞争转向上下文、生态和信任。', '/research/agents/index.html'],
        ['研究报告 · 2026.11', '国内外 11 家大模型厂商调研', '收入由企业和编程驱动；国内厂商集体开放权重；模型厂商全部下场做 Agent，模型和应用的边界正在消失。', '/research/llm/index.html'],
        ['研究报告 · 2026.11', '国内外 14 家人形机器人与具身智能公司调研', '中国公司在出货、成本和盈利上领先，美国公司在估值、大模型和资本上领先；真正在产线常态化干活的机器人仍是少数。', '/research/robotics/index.html'],
      ],
    },

    life: {
      kicker: '05 · 关于',
      h: '工作之外',
      quote: '技术要有温度，<br>生活要有野趣。',
      p: '工作之外，我喜欢跑马拉松和越野。一个人走在山路上，常在转角遇到意想不到的风景；脚下踏实，心里沉静。做产品也是这样：方向是定的，每一步都不确定，但每一步都算数。',
      nums: [['3:30', '全马最好成绩'], ['20+', '完赛场次'], ['70 公里', '腾格里沙漠三天']],
    },

    contact: {
      h: '一起聊聊',
      p: '喝杯咖啡？聊聊 AI，或者约个跑？',
      btn: ['发邮件', 'LinkedIn', '公众号'],
    },
    copy: '© 2026 Hera',
  },

  en: {
    htmlLang: 'en',
    title: 'Hera · AI Product Leader',
    description: "An engineer-turned AI product leader. Incubated a vision AI product line from 0 to 1 — ¥300M+ revenue in 3 years across 8 markets; co-founded an AI eldercare company and proved a vertical agent business model from scratch; now builds AI products hands-on.",
    switchLabel: '中文',
    switchHref: '/',
    nav: [['works', 'Work'], ['business', 'Business'], ['principles', 'Method'], ['thinking', 'Research'], ['about', 'About']],
    imgTodo: 'Image coming',

    hero: {
      hello: "Hi, I'm Hera — I connect technology, use cases and business.",
      h1: 'Models set the ceiling.<br>Products set <span class="hl">the reach</span>.',
      intro: "Engineer by training, endlessly curious about new tech, and on the front line of every AI wave. At SenseTime, I took an enterprise vision AI product line from 0 to 1 and grew it to hundreds of millions of RMB in revenue. When LLMs arrived, I co-founded an AI eldercare company and proved a vertical agent business model. I still build products myself with AI coding — the best way to judge an idea is to build it.",
      creds: ['Ex-SenseTime · Vision AI Business Lead', 'Co-founder & CPO, Chenghuang Zhiyi', 'Tsinghua MEM', 'Trail runner'],
      cta: ['See my AI products', 'Get in touch'],
      photoAlt: 'Hera',
    },

    strip: {
      label: 'Track record',
      work: [['10', 'years in AI'], ['¥300M+', 'revenue in 3 years'], ['8', 'markets'], ['50+', 'patents & copyrights']],
      build: [['5', 'AI products shipped'], ['4', 'open-source skills']],
      github: 'GitHub ↗',
    },

    works: {
      kicker: '01 · Work',
      h: 'AI products I build myself',
      p: "Hands-on, end-to-end: requirements, design, development and launch. I built each one from scratch with AI coding and use it every day. You only find the real problems by building.",
      flag: {
        badge: 'Flagship · actively developed',
        name: 'PMCopilot',
        tag: 'Enterprise AI productivity solution',
        desc: 'An AI workflow for B2B product teams. It pulls information scattered across meetings, group chats and knowledge bases into one place, then carries it from customer conversations to research reports, PRDs, proposals and quotes — started with one sentence, on one connected dataset.',
        kv: [
          ['Why', "In B2B AI, the bottleneck is rarely the model — it's turning capability into contracts. Research, requirements, proposals and quotes are hand-assembled by senior PMs, over and over; the know-how stays in their heads, and team capacity is capped by a few people."],
          ['Core value', "Turns senior PMs' know-how into a team-wide system — first for product teams, then for sales and pre-sales — so the front line can deliver a proposal and quote the same day."],
        ],
        tabs: [
          ['Report', '13 report types on demand: one sentence picks the type, sub-agents research in parallel, and every conclusion traces back to a source'],
          ['PRD', 'Outline first, then full text: reads customer call notes from Feishu, asks when information is missing, and writes a 20-chapter requirements doc'],
          ['Proposal', 'Matches product capabilities to the customer scenario and produces presentation-ready slides, with capability and compliance checks'],
          ['Quote', 'A pricing engine builds the quote and the margin; discounts above your limit go to approval, and costs are hidden on export'],
        ],
      },
      wxj: {
        meta: 'Consumer app · v1, in daily use',
        name: 'Wuxiaojia',
        tag: 'AI home inventory butler',
        desc: "What's at home, where it is, when it expires — just ask Xiaowuling. Snap a photo to add items; game mechanics keep people coming back to update it.",
        shots: ['/assets/works/wuxiaojia/home.webp', '/assets/works/wuxiaojia/kitchen.webp', '/assets/works/wuxiaojia/detail.webp'],
        showDemo: false,
      },
      reposHead: 'Proven working methods, open-sourced',
      reposTitle: 'Open-source skills',
      reposSub: 'ready to use in Claude Code / Codex',
      repos: [
        ['book-deep-read', 'Breaks a book down into 15 verifiable deliverables, so you absorb it in depth and keep knowledge you can draw on anytime.', '/assets/works/skills/book.svg', 'AI book breakdown'],
        ['deep-content-extract', 'Long videos and podcasts are slow to absorb and hard to cite. It distills them into ideas, stories and frameworks, plus a core-structure diagram.', '/assets/works/skills/extract.svg', 'Deep content extraction'],
        ['hera-content-radar-skill', "Where you get information matters more than the information itself. It powers Knowledge Radar: curated top sources only, and every conclusion cites one.", '/assets/works/skills/radar.svg', 'Daily AI digest'],
        ['hera-article-illustrations', 'Generates on-brand HERA robot scenes and hand-drawn method diagrams that make articles livelier and easier to follow.', '/assets/works/skills/illustration.svg', 'Article illustrations'],
      ],
      repoGo: 'View repo ↗',
      workflows: 'Plus internal workflows that connect LLMs to Feishu — drafting docs, watching group chats, regular reviews and daily digests. The daily busywork of sorting information goes to AI; my time goes to judgment and decisions.',
      labTitle: 'More work',
      whyLabel: 'Why',
      valueLabel: 'Value',
      visit: 'Visit ↗',
      lab: [
        {
          name: 'Knowledge Radar', tag: "Hera's Daily",
          desc: 'AI news is never scarce; judgment is. Every day it compresses dozens of AI updates into about ten sourced, verifiable calls.',
          why: '',
          points: [
            'Each insight = one call + what to focus on next + a clickable original source',
            'Tracks YouTube, podcasts, newsletters, 93 people on X and 30 websites daily',
            '740 long reads from Lenny, Stratechery and others, organized into notes across 8 topics',
          ],
          value: 'A one-person research desk: daily calls and conclusions, compounding into a searchable knowledge base.',
          status: 'Updated daily',
          imgs: ['/assets/works/radar/insight.webp', '/assets/works/radar/knowledge.webp', '/assets/works/radar/directory.webp'],
          link: '',
          linkLabel: 'Open-source skill ↗',
          hidden: false,
        },
        {
          name: 'Compound Life', tag: 'Lifewin',
          desc: "Turn every action into an achievement you can see — and every day's time into the long-term directions that truly matter. Where your time goes, your growth follows.",
          why: '',
          points: [
            'Set directions: decide the few areas worth investing in for years — speaking, exercise, English',
            "See the investment: where each day's time actually went, plan against actual, gaps visible at a glance",
            'Pick today: from long-term directions and investment gaps, know the one thing that matters most today',
            'Review: regular reviews adjust direction and pace, closing the loop so growth speeds up',
          ],
          value: 'Built on Atomic Habits: every action is a vote for who you want to become. Long-term effort becomes visible, so growth compounds.',
          status: 'Time logged daily',
          imgs: [],
          video: '/assets/works/lifewin/wall.mp4',
          poster: '/assets/works/lifewin/wall-poster.webp',
          link: '',
          linkLabel: '',
          hidden: false,
        },
        {
          name: 'English learning', tag: '',
          desc: TODO('[What it does and where AI helps — TBD]'),
          why: TODO('[TBD]'),
          points: [],
          value: '',
          status: 'Early version',
          imgs: [],
          link: '',
          linkLabel: '',
          hidden: true,
        },
      ],
    },

    business: {
      kicker: '02 · Business',
      h: "Businesses I've led",
      p: 'Every chapter started with a hard problem: get it working from 0 to 1, then clear the hurdles of standardization, scale and commercialization.',
      go: 'Read the case →',
      clientsLabel: 'Clients and projects',
      clients: ['Beijing 2022 Winter Olympics', 'The Hong Kong Jockey Club', 'Sun Hung Kai Properties', 'Nan Fung Group', 'USEN Japan', 'SoftBank', 'Haier', 'COMAC', 'Hancom', 'Suprema', 'Magnum', 'Kent', 'Xinchao Media', 'Gaosi Education', 'Weibo', 'Bigo'],
      cases: [
        {
          img: '/assets/projects/hkjc-smart-retail.webp',
          meta: 'SenseTime · Business line head · 2017 – 2023',
          title: 'Incubated a vision AI product line from 0 to 1, then grew it into an ecosystem and a global business',
          desc: 'Led a 20-person team: pivoted from digital ads to business insights on an in-house edge-to-cloud stack; standardized it for integrators; went global with SoftBank and other overseas clients — 30+ leading clients in total.',
          stats: [['¥300M+', '3-year revenue'], ['10,000+', 'devices deployed'], ['8', 'markets']],
        },
        {
          img: '/assets/projects/olympics-curling.webp',
          meta: 'SenseTime · Product lead · 2020 – 2023',
          title: 'Olympic curling: led a zero-fault national project and incubated a new industrial line',
          desc: 'National research project: 42 cameras track curling stones in 3D in real time, showcased at the Olympics, Paralympics and Worlds, with 10+ patents; the full architecture was later reused for an industrial product line.',
          stats: [['3.3 cm', '3D accuracy'], ['0', 'on-site failures'], ['¥30M+', 'industrial revenue']],
        },
        {
          img: '/assets/projects/eldercare-scene.webp',
          meta: 'Chenghuang Zhiyi · Co-founder · 2023 – 2026',
          title: 'A new AI eldercare model: co-founded from scratch, proving a vertical agent business model',
          desc: 'Integrated eldercare and digital services for upscale care homes, built on "GP + AI": better operations and service efficiency for the home, and chronic-disease care that helps seniors live longer, healthier lives.',
          stats: [['12', 'care homes'], ['4×', 'doctor throughput'], ['2,400', 'seniors served']],
        },
      ],
    },

    principles: {
      kicker: "03 · Method",
      h: "Four principles for building AI products",
      p: "Closer to customers, closer to results.",
      items: [
        ["Build the product closest to the customer", "Design how it sells while designing what it does: who pays, why they buy, and why now. Think like the buyer and the user, not just like a feature list.", ["Retail: when clients said “we see the data but don't know how to use it”, we wired the dashboard into member marketing — and it started driving revenue"]],
        ["Customers buy results, not accuracy", "Skip the engineering romance: a costly 1% accuracy gain may go unnoticed, but ROI won't. Combine models, engineering, rules and metrics to solve the problem.", ["Retail: an edge-to-cloud design plus engineering shifted the target from 99% lab accuracy to an 85% business metric customers actually accept"]],
        ["It's only good once it's verified", "AI makes building easy, so judging what is good gets harder. Build layered evaluation, dig into bad cases, and never use customers as testers.", ["Retail: a test set built from real store video, and 4 rounds of UAT", "Eldercare: an eval set of 1,200+ cases"]],
        ["Done before perfect; prove it, then scale", "Start with one customer type and one problem to test whether it lands and sells. Scale only once it works — don't start big and broad.", ["Eldercare: served doctors and caregivers first, starting with a rules engine before moving to agents", "Startup lesson: running two product lines at once spread resources thin"]],
      ],
    },

    thinking: {
      kicker: '04 · Research',
      h: 'Research & writing',
      p: 'How I form a view: take products apart, study competitors, read primary sources, build things myself, and write my thinking down.',
      read: 'Read (in Chinese) →',
      readReport: 'Read the report (in Chinese) →',
      sysTitle: 'Starting with my own needs: two systems I built for myself',
      cards: [
        ['Founder retrospective · 2026.10', 'After the product works: business lessons from an AI eldercare startup', 'We proved the product worked, but not that the business could scale. The problem was not the product — it was four sets of numbers outside it.', '/thinking/after-product-market/'],
        ['Industry view · 2026.10', 'From computer vision to agents: the costliest mistake in AI products is treating technology as the goal', 'Across two waves — vision AI and LLMs — the same mistake keeps coming back. What customers buy is lower total cost and more certain outcomes.', '/thinking/technology-is-not-the-goal/'],
      ],
      reports: [
        ['Report · 2026.11', 'Coding and office agents: 12 products compared', 'The two markets are merging — coding agents are becoming the engine of office agents; as capabilities converge, competition shifts to context, ecosystem and trust.', '/research/agents/index.html'],
        ['Report · 2026.11', '11 LLM vendors in China and abroad', 'Revenue is driven by enterprise and coding; Chinese vendors have all gone open-weight; every model vendor now ships agents, and the line between model and application is disappearing.', '/research/llm/index.html'],
        ['Report · 2026.11', '14 humanoid and embodied-AI companies in China and abroad', 'Chinese companies lead on shipments, cost and profitability; US companies lead on valuation, models and capital. Few robots yet do routine work on production lines.', '/research/robotics/index.html'],
      ],
    },

    life: {
      kicker: '05 · About',
      h: 'Outside work',
      quote: 'Technology with warmth,<br>life with a wild side.',
      p: "Outside work, I love marathons and trail running. Running alone on a mountain trail, I often find an unexpected view around the bend; the ground is solid underfoot and my mind goes quiet. Building products is the same: the direction is set, each step is uncertain, but every step counts.",
      nums: [['3:30', 'marathon PB'], ['20+', 'races finished'], ['70 km', '3 days in the Tengger Desert']],
    },

    contact: {
      h: "Let's talk",
      p: 'Grab a coffee? Talk AI — or go for a run?',
      btn: ['Email', 'LinkedIn', 'WeChat'],
    },
    copy: '© 2026 Hera',
  },
} as const;

export const lifePhotos = [
  '/assets/races/chongli168-finish.webp',
  '/assets/races/yasha-dune.webp',
  '/assets/races/greatwall-running.webp',
  '/assets/races/moganshan-bamboo.webp',
  '/assets/races/siguniang-mountain.webp',
];

export const links = {
  github: 'https://github.com/hihera',
  email: 'mailto:sunheran1012@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sunheran1012',
  wechat: '#',
};
