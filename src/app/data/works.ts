export type WorkCategory = '平面設計' | 'UI/UX 設計' | '3D 創作' | '插畫作品' | '動態設計';

export interface Work {
  id: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  year: string;
  client: string;
  description: string;
  tags: string[];
  coverImage: string;
  images: string[];
  hasVideo: boolean;
}

export const works: Work[] = [
  {
    id: 'coffee-brand',
    title: '山霧咖啡品牌識別',
    subtitle: 'Mountain Mist Coffee Brand Identity',
    category: '平面設計',
    year: '2024',
    client: '山霧咖啡',
    description: '為精品咖啡品牌「山霧咖啡」設計完整品牌識別系統，包含 Logo 設計、品牌色彩規範、名片、包裝及各式行銷物料。設計靈感取自台灣高山雲霧繚繞的意境，以柔和的線條與自然色調傳達品牌的溫度與質感。',
    tags: ['品牌識別', 'Logo 設計', '包裝設計', '印刷品設計'],
    coverImage: 'public/images/works/3D/Sweet BonBons-1.webp',
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: false,
  },
  {
    id: 'health-app',
    title: '日常健康管理 App',
    subtitle: 'Daily Health Management App UI/UX',
    category: 'UI/UX 設計',
    year: '2024',
    client: '科技新創公司',
    description: '為健康科技新創公司設計直覺且溫暖的健康管理應用程式介面，透過資料視覺化與人性化互動設計，讓用戶輕鬆追蹤日常健康數據。專案涵蓋使用者研究、資訊架構、線框圖、高擬真度原型設計及設計規範文件。',
    tags: ['UI 設計', 'UX 研究', '原型設計', 'Figma'],
    coverImage: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: true,
  },
  {
    id: '3d-product',
    title: '香水瓶 3D 產品視覺化',
    subtitle: 'Perfume Bottle 3D Product Visualization',
    category: '3D 創作',
    year: '2023',
    client: '頂級香氛品牌',
    description: '運用 Blender 與 Substance Painter 為頂級香氛品牌創作高擬真度的 3D 產品視覺化，透過精密的材質模擬與燈光設計，呈現玻璃瓶身的光折射效果與金屬配件的質感，打造令人驚豔的視覺表現。',
    tags: ['Blender', 'Substance Painter', '3D 渲染', '產品視覺化'],
    coverImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: true,
  },
  {
    id: 'editorial-illustration',
    title: '雜誌封面插畫系列',
    subtitle: 'Magazine Cover Illustration Series',
    category: '插畫作品',
    year: '2023',
    client: '設計雜誌社',
    description: '受邀為知名設計雜誌創作一系列四幅封面插畫，以「四季情感」為主題，融合傳統水彩技法與數位繪圖，每幅作品呼應不同季節的情緒與色彩，展現溫柔而細膩的視覺敘事。',
    tags: ['數位插畫', '水彩', '雜誌封面', '插畫創作'],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1608501357813-b53edb0a55f6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: false,
  },
  {
    id: 'brand-motion',
    title: '品牌動態識別設計',
    subtitle: 'Brand Motion Identity Design',
    category: '動態設計',
    year: '2023',
    client: '創意設計公司',
    description: '為設計公司打造完整的動態品牌識別系統，包含 Logo 動態演繹、開場片頭、社群動態貼文模板及展場視覺等。運用 After Effects 製作流暢自然的過場動畫，在運動中傳遞品牌活力與創造力。',
    tags: ['After Effects', '動態設計', '品牌動態', '影片製作'],
    coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1551817958-d9d86fb29431?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: true,
  },
  {
    id: 'festival-poster',
    title: '春日音樂節視覺設計',
    subtitle: 'Spring Music Festival Visual Design',
    category: '平面設計',
    year: '2022',
    client: '春日音樂節',
    description: '承接春日音樂節整體視覺設計，包含主視覺海報、票券設計、場地導引系統、舞台背板及周邊商品。以盛開的花卉與音符為設計語言，打造充滿生命力與歡慶氛圍的節慶視覺體驗。',
    tags: ['海報設計', '活動視覺', '印刷品', 'Illustrator'],
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: false,
  },
  {
    id: 'elearning-platform',
    title: '線上學習平台介面設計',
    subtitle: 'E-Learning Platform Interface Design',
    category: 'UI/UX 設計',
    year: '2022',
    client: '教育科技公司',
    description: '為教育科技公司設計現代化線上學習平台，整合課程管理、學習進度追蹤、互動測驗及社群功能。透過以學習者為中心的設計思考，打造簡潔直觀的學習體驗，提升用戶留存率達 40%。',
    tags: ['UI/UX', '教育科技', '使用者研究', '原型測試'],
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: false,
  },
  {
    id: 'children-book',
    title: '夢遊仙境兒童繪本',
    subtitle: 'Wonderland Children\'s Book Illustration',
    category: '插畫作品',
    year: '2022',
    client: '親子出版社',
    description: '為親子出版社創作「夢遊仙境」兒童繪本全套插畫，共 32 頁，以溫柔的色調與圓潤的線條描繪奇幻世界，陪伴孩童進入充滿想像力的故事旅程。本書榮獲 2022 年台灣最美的書入選。',
    tags: ['兒童插畫', '繪本', '數位繪圖', '出版設計'],
    coverImage: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=800&h=600&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1585974738771-84483dd9f89f?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=800&fit=crop&auto=format',
    ],
    hasVideo: false,
  },
];

export const featuredWorks = works.slice(0, 4);

export const categories: WorkCategory[] = ['平面設計', 'UI/UX 設計', '3D 創作', '插畫作品', '動態設計'];
