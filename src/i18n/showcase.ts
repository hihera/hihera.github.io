// 屋小家 · 小屋灵 演示区的数据。
// 截图：开发模式下用手机尺寸截的整页长图（固定的底部导航单独截出，叠在手机框底部）。
// 对话：文字取自产品真实录屏里小屋灵的回答；"调用步骤"是对它实际做的事的说明。
// mark：滚动目标在页面里的位置（CSS 像素，页面宽 390），page：整页高度。

import type { Lang } from './content';

const BASE = '/assets/works/wuxiaojia';

export type Block =
  | { t: 'p'; text: string }          // 段落，逐字打出
  | { t: 'h'; text: string }          // 小标题
  | { t: 'li'; b: string; text: string } // 要点：粗体 + 说明
  | { t: 'ol'; n: number; text: string } // 步骤
  | { t: 'card'; icon: string; name: string; meta: string } // 物品卡片
  | { t: 'btn'; text: string }        // 确认按钮
  | { t: 'src'; text: string };       // 出处

export type Scenario = {
  chip: string;
  screen: number;
  mark: number;
  q: string;
  photo?: string;
  steps: [string, string][];
  a: Block[];
};

const screensMeta = [
  { src: `${BASE}/home.webp`, page: 1586, nav: `${BASE}/nav.webp` },
  { src: `${BASE}/kitchen.webp`, page: 2929 },
  { src: `${BASE}/detail.webp`, page: 1417 },
];

const zh = {
  name: '屋小家',
  agent: '小屋灵',
  tag: '家庭物品智能管家',
  badge: '初版 · 自用中',
  desc: '家里有什么、放在哪里、什么时候过期、什么时候补货，说明书怎么说，问一句小屋灵管家就知道。',
  why: '家庭物品管理工具不少，几乎都死在同一个地方：录入太累，录完没人维护。',
  points: [
    ['让录入几乎零成本', '拍一张照片认出多件物品，也能聊天、语音、导入订单'],
    ['让维护变成游戏', '过期怪物、60 秒时间胶囊盘点，获取经验值和小屋等级'],
    ['让收藏变成乐趣', '设计了主题图鉴，满足不同人的收藏爱好'],
  ],
  screenLabels: ['我的家', '厨房 · 过期怪物', '物品详情'],
  status: 'AI 助手 · 在线',
  demoTag: '演示',
  placeholder: '发消息或按住说话…',
  note: '演示：对话文字取自产品真实录屏',
  photoLabel: '[发送了 1 张照片]',
  scenarios: [
    {
      chip: '找东西', screen: 2, mark: 398,
      q: '我的耳机放哪里了？',
      steps: [['检索物品库：找到 2 副耳机', '0.3s']],
      a: [
        { t: 'p', text: '你说的是 AirPods 还是 AirPods Max 呀？我帮你查了下位置哦~' },
        { t: 'li', b: 'AirPods', text: '在卧室' },
        { t: 'li', b: 'AirPods Max', text: '在书房' },
        { t: 'p', text: '要是找的不是这两个，可能还没录入哦😅' },
      ],
    },
    {
      chip: '查说明书', screen: 1, mark: 2458,
      q: '用长帝烤箱烤红薯要多少温度、多长时间，什么模式？',
      steps: [['找到物品：长帝蒸汽风炉烤箱 S1 Pro', '0.2s'], ['读取说明书 · 第 7、17 页', '0.6s']],
      a: [
        { t: 'p', text: '根据你的长帝 S1 Pro 蒸汽风炉说明书，烤红薯可以直接选菜单 21 模式，用空气炸 230°C 烤 45 分钟就可以啦，不需要预热。' },
        { t: 'h', text: '具体操作步骤：' },
        { t: 'ol', n: 1, text: '红薯洗干净，可以在表皮抹一层蜂蜜' },
        { t: 'ol', n: 2, text: '红薯放在烤盘上，放到烤箱第 2 层，选择菜单 21 先烤 35 分钟' },
        { t: 'ol', n: 3, text: '给红薯翻个面，继续烤 10 分钟就能出炉' },
        { t: 'src', text: '📖 出处：《长帝 S1 Pro 蒸汽风炉说明书》第 7、17 页' },
      ],
    },
    {
      chip: '过期提醒', screen: 1, mark: 482,
      q: '家里有什么东西快过期了？',
      steps: [['扫描保质期：3 件需要处理', '0.4s']],
      a: [
        { t: 'p', text: '家里目前有 3 件物品涉及过期情况哦~' },
        { t: 'h', text: '已经过期的要尽快处理：' },
        { t: 'li', b: '过期牛奶', text: '放在厨房冰箱里，到期 2026-10-22' },
        { t: 'li', b: '过期面膜', text: '放在厨房冰箱，到期 2026-10-12' },
        { t: 'h', text: '即将过期的记得尽快食用：' },
        { t: 'li', b: '鸡蛋', text: '放在厨房冰箱里，2026-10-29 到期，没剩几天啦，可以安排做炒蛋或者煮茶叶蛋🍳' },
      ],
    },
    {
      chip: '需要补货', screen: 0, mark: 438,
      q: '有啥需要补货的吗？',
      steps: [['检查消耗品余量：7 样快用完', '0.4s']],
      a: [
        { t: 'p', text: '现在有 7 样消耗品快用完啦，按紧急程度给你整理好了哦~' },
        { t: 'h', text: '马上就要用完（3 天内要补）：' },
        { t: 'li', b: '牙膏', text: '卫生间洗手台，只剩 3 天用量，建议买 1 支' },
        { t: 'li', b: '大米', text: '厨房米桶，只剩 3 天用量，建议买 1 袋 5kg 装' },
        { t: 'li', b: '咖啡', text: '厨房，挂耳只剩 2 包，建议买 1 盒' },
        { t: 'li', b: '洗衣液', text: '卫生间洗衣机旁，只剩 3 次用量，建议买 1 瓶' },
        { t: 'h', text: '一周内需要补：' },
        { t: 'li', b: '垃圾袋', text: '卫生间，只剩最后 1 卷，建议买 1 提' },
        { t: 'li', b: '卷纸', text: '卫生间马桶旁收纳架，只剩 2 卷，建议买 1 提 10 卷装' },
        { t: 'p', text: '全部买齐大概 222 元，可以凑单一起下单更划算🛒' },
      ],
    },
    {
      chip: '拍照录入', screen: 0, mark: 853,
      q: '', photo: `${BASE}/photo.webp`,
      steps: [['识别照片：发现 4 件物品', '1.1s']],
      a: [
        { t: 'p', text: '我看到了这些物品：' },
        { t: 'card', icon: '⌨️', name: '机械键盘', meta: '未选位置 · 1 件 · ¥200' },
        { t: 'card', icon: '📱', name: '手机支架', meta: '未选位置 · 1 件 · ¥20' },
        { t: 'card', icon: '🔌', name: '扩展坞', meta: '未选位置 · 2 件 · ¥150' },
        { t: 'card', icon: '🔗', name: '数据线', meta: '未选位置 · 1 件 · ¥20' },
        { t: 'btn', text: '全部确认 · 4 件 ✨' },
        { t: 'p', text: '搞定！4 件新朋友已经入住家里啦🏠 还有别的要录吗？' },
      ],
    },
  ] as Scenario[],
};

const en: typeof zh = {
  name: 'Wuxiaojia',
  agent: 'Xiaowuling',
  tag: 'A home inventory agent',
  badge: 'Early version · in daily use',
  desc: "What's at home, where it is, when it expires, when to restock, what the manual says — just ask Xiaowuling, your home butler.",
  why: 'Home inventory apps are everywhere, and nearly all die the same way: logging is tedious, and nobody keeps the records up.',
  points: [
    ['Make logging nearly effortless', 'One photo recognizes several items; chat, voice and order import also work'],
    ['Make upkeep a game', 'Expiry monsters and a 60-second "time capsule" check earn XP and level up your home'],
    ['Make collecting fun', 'Themed collection albums for every kind of collector'],
  ],
  screenLabels: ['My home', 'Kitchen · expiry monsters', 'Item details'],
  status: 'AI assistant · online',
  demoTag: 'Demo',
  placeholder: 'Type a message or hold to talk…',
  note: "Demo: replies are taken from a real screen recording (translated)",
  photoLabel: '[Sent 1 photo]',
  scenarios: [
    {
      chip: 'Find things', screen: 2, mark: 398,
      q: 'Where did I put my headphones?',
      steps: [['Searching the inventory: 2 pairs found', '0.3s']],
      a: [
        { t: 'p', text: 'Do you mean the AirPods or the AirPods Max? I checked where they are~' },
        { t: 'li', b: 'AirPods', text: 'in the bedroom' },
        { t: 'li', b: 'AirPods Max', text: 'in the study' },
        { t: 'p', text: "If it's neither, maybe it hasn't been logged yet 😅" },
      ],
    },
    {
      chip: 'Ask the manual', screen: 1, mark: 2458,
      q: 'What temperature, time and mode for roasting sweet potatoes in the Changdi oven?',
      steps: [['Item found: Changdi S1 Pro steam oven', '0.2s'], ['Reading the manual · pages 7 & 17', '0.6s']],
      a: [
        { t: 'p', text: 'According to your Changdi S1 Pro manual, pick menu 21 and air-fry at 230°C for 45 minutes — no preheating needed.' },
        { t: 'h', text: 'Steps:' },
        { t: 'ol', n: 1, text: 'Wash the sweet potatoes; brush a little honey on the skin if you like' },
        { t: 'ol', n: 2, text: 'Put them on the tray on rack 2 and run menu 21 for 35 minutes' },
        { t: 'ol', n: 3, text: 'Flip them and roast another 10 minutes' },
        { t: 'src', text: '📖 Source: Changdi S1 Pro steam oven manual, pages 7 & 17' },
      ],
    },
    {
      chip: 'Expiry alerts', screen: 1, mark: 482,
      q: "What's about to expire?",
      steps: [['Checking expiry dates: 3 items need attention', '0.4s']],
      a: [
        { t: 'p', text: '3 items at home have expiry issues~' },
        { t: 'h', text: 'Already expired — deal with these soon:' },
        { t: 'li', b: 'Milk', text: 'kitchen fridge, expired 2026-10-22' },
        { t: 'li', b: 'Face masks', text: 'kitchen fridge, expired 2026-10-12' },
        { t: 'h', text: 'Expiring soon:' },
        { t: 'li', b: 'Eggs', text: 'kitchen fridge, expire 2026-10-29 — maybe scrambled eggs or tea eggs this week 🍳' },
      ],
    },
    {
      chip: 'Restock', screen: 0, mark: 438,
      q: 'Anything I need to restock?',
      steps: [['Checking consumables: 7 running low', '0.4s']],
      a: [
        { t: 'p', text: '7 consumables are running low — sorted by urgency~' },
        { t: 'h', text: 'Run out within 3 days:' },
        { t: 'li', b: 'Toothpaste', text: 'bathroom sink, 3 days left, buy 1 tube' },
        { t: 'li', b: 'Rice', text: 'kitchen rice bin, 3 days left, buy a 5 kg bag' },
        { t: 'li', b: 'Coffee', text: 'kitchen, 2 drip bags left, buy 1 box' },
        { t: 'li', b: 'Laundry detergent', text: 'next to the washer, 3 washes left, buy 1 bottle' },
        { t: 'h', text: 'Within a week:' },
        { t: 'li', b: 'Trash bags', text: 'bathroom, last roll, buy 1 pack' },
        { t: 'li', b: 'Toilet paper', text: 'bathroom shelf, 2 rolls left, buy a 10-roll pack' },
        { t: 'p', text: 'About RMB 222 for everything — order together to save 🛒' },
      ],
    },
    {
      chip: 'Log by photo', screen: 0, mark: 853,
      q: '', photo: `${BASE}/photo.webp`,
      steps: [['Recognizing the photo: 4 items', '1.1s']],
      a: [
        { t: 'p', text: 'Here is what I found:' },
        { t: 'card', icon: '⌨️', name: 'Mechanical keyboard', meta: 'No location · 1 · RMB 200' },
        { t: 'card', icon: '📱', name: 'Phone stand', meta: 'No location · 1 · RMB 20' },
        { t: 'card', icon: '🔌', name: 'USB hub', meta: 'No location · 2 · RMB 150' },
        { t: 'card', icon: '🔗', name: 'Cable', meta: 'No location · 1 · RMB 20' },
        { t: 'btn', text: 'Confirm all · 4 items ✨' },
        { t: 'p', text: 'Done! 4 new friends have moved in 🏠 Anything else to log?' },
      ],
    },
  ],
};

export const showcase = { zh, en } satisfies Record<Lang, typeof zh>;
export const screens = screensMeta;
export const spiritIcon = `${BASE}/spirit.svg`;
