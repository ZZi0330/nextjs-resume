/**
 * 多语言翻译配置
 * 包含中文(zh)和英文(en)的所有文本翻译
 */
export const translations = {
  zh: {
    // 导航栏
    nav: {
      home: "首页",
      about: "关于",
      skills: "技能",
      projects: "项目",
      contact: "联系"
    },
    // Project1 - 鸡尾酒网站
    project1: {
      nav: {
        cocktails: "鸡尾酒",
        about: "展示",
        menu: "饮品",
        contact: "联系我们"
      },
      hero: {
        title: "莫吉托",
        subtitle: "清凉. 清凉. 清凉.",
        description: "在夏天品尝鸡尾酒",
        content: "我们菜单上的每款鸡尾酒都融合了优质原料、创意天赋和永恒的配方，旨在满足您的感官和味蕾。",
        viewCocktails: "查看鸡尾酒"
      },
      about: {
        tag: "鸡尾酒",
        title: "细节",
        titleAccent: ",",
        subtitle: "从混合到展示",
        description: "我们提供的每一杯鸡尾酒都反映了我们对细节的执着——从第一次混合到最后的展示。正是这种用心，将一杯简单的饮品变成真正令人难忘的饮品。",
        rating: "4.5",
        reviews: "12000+ 评价"
      },
      contact: {
        title: "欢迎来我们的酒吧",
        address: "地址:XXXXXXXXXXX",
        contactUs: "联系我们",
        phone: "电话 +86 123 4567 8901",
        wechat: "微信 二维码",
        openingHours: "营业时间"
      },
      cocktails: [
        {
          id: 1,
          name: "经典莫吉托",
          image: "/project1/images/drink1.png",
          title: "简单配料，浓郁风味",
          description: "玛格丽特由龙舌兰酒、青柠汁和橙味利口酒制成，制作简单，个性十足。加上盐边，是夏夜的完美饮品。"
        },
        {
          id: 2,
          name: "覆盆子莫吉托",
          image: "/project1/images/drink2.png",
          title: "一款永不失败的清新经典",
          description: "玛格丽特是一款经典饮品，它平衡了酸涩的青柠、顺滑的龙舌兰酒和一丝甜味。无论是摇匀、冷冻还是加冰，它总是清爽宜人。"
        },
        {
          id: 3,
          name: "紫罗兰微风",
          image: "/project1/images/drink3.png",
          title: "简单配料，浓郁风味",
          description: "玛格丽特由龙舌兰酒、青柠汁和橙味利口酒制成，制作简单，个性十足。加上盐边，是夏夜的完美饮品。"
        },
        {
          id: 4,
          name: "库拉索莫吉托",
          image: "/project1/images/drink4.png",
          title: "精心制作，倾情奉献",
          description: "每款鸡尾酒都使用新鲜食材，并怀着对完美调制的激情，无论您是庆祝还是仅仅放松，都能尽享其中。"
        }
      ],
      mockTailLists: [
        {
          name: "热带花开",
          country: "美国",
          detail: "瓶装",
          price: "$10"
        },
        {
          name: "百香果薄荷",
          country: "美国",
          detail: "瓶装",
          price: "$49"
        },
        {
          name: "柑橘之光",
          country: "加拿大",
          detail: "750 毫升",
          price: "$20"
        },
        {
          name: "薰衣草气泡",
          country: "爱尔兰",
          detail: "600 毫升",
          price: "$29"
        }
      ],
      cocktailLists: [
        {
          name: "教堂山设拉子",
          country: "澳大利亚",
          detail: "瓶装",
          price: "$10"
        },
        {
          name: "卡特纳马尔贝克",
          country: "澳大利亚",
          detail: "瓶装",
          price: "$49"
        },
        {
          name: "犀牛淡色艾尔",
          country: "加拿大",
          detail: "750 毫升",
          price: "$20"
        },
        {
          name: "爱尔兰健力士",
          country: "爱尔兰",
          detail: "600 毫升",
          price: "$29"
        }
      ],
      goodLists: [
        "食材精选，优质保证",
        "技艺精湛，调配完美",
        "调酒艺术，品味非凡",
        "新鲜混合，风味独特"
      ],
      featureLists: [
        "口感平衡，完美融合",
        "精致装饰，赏心悦目",
        "始终冰镇，清爽宜人",
        "专业调制，匠心独运"
      ],
      openingHours: [
        { day: "周一至周四", time: "上午11:00 – 凌晨12:00" },
        { day: "周五", time: "上午11:00 – 凌晨2:00" },
        { day: "周六", time: "上午9:00 – 凌晨2:00" },
        { day: "周日", time: "上午9:00 – 凌晨1:00" }
      ],
      cocktailsTitle: "鸡尾酒:",
      mockTailsTitle: "无酒精鸡尾酒:",
      artTitle: "技术",
      perfectChoice: "完美之选",
      craftTitle: "工艺精湛，热情满溢",
      craftDescription: "不只是一杯酒，更是为您量身定制的精酿时光"
    },
    // Project2 - 笔记应用
    project2: {
      title: "记录",
      subtitle: "井然有序的笔记让一切变得简单",
      description: "构建属于自己的简单导航,索引的信息,注释",
      login: "登录",
      email: "邮箱",
      password: "密码",
      confirm: "确认",
      loginError: "登录失败，请检查邮箱和密码",
      serverError: "无法连接服务器",
      // SideNav 翻译
      simpleNotes: "简单的笔记",
      newNote: "新建笔记",
      noNotes: "暂无笔记",
      logout: "注销",
      untitledNote: "无标题笔记",
      newNoteEditing: "新建笔记...",
      startTyping: "开始输入内容...",
      unsaved: "(未保存)",
      synced: "(已同步)",
      edited: "(已编辑)",
      characters: "字",
      deleteConfirm: "确定要删除这条笔记吗？",
      switchNoteConfirm: "当前笔记有未保存的更改，确定要切换到其他笔记吗？",
      deleteError: "删除笔记失败，请重试",
      deleteNote: "删除笔记",
      // 时间格式
      justNow: "刚刚",
      minutesAgo: "分钟前",
      hoursAgo: "小时前",
      daysAgo: "天前",
      weeksAgo: "周前",
      // TopNav 翻译
      saving: "保存中...",
      saveSuccess: "保存成功",
      saveNewNote: "保存新笔记",
      updateNote: "更新笔记",
      edit: "编辑",
      preview: "预览",
      saveError: "保存失败:",
      // Editor 翻译
      placeholder: `输入你的笔记 
 1.#前面加在这个符号,字体最大, 
 2.##小一号
 3.无符号,是最小字体
 4.这样写是连接:[点击我](https://github.com) `,
      // MDX 翻译
      startWriting: "开始编写你的笔记..."
    },
    // Project3 - 3D书籍
    project3: {
      cover: "封面",
      page: "第 {number} 页",
      back: "返回"
    },
    // 英雄区域
    hero: {
      greeting: "你好，我是",
      name: "芝芝",
      lastName: "",
      description: "我使用现代技术创建出色的网页。专注于前端开发，构建既美观又实用的界面。",
      viewWork: "查看我的作品"
    },
    // 关于区域
    about: {
      title: "关于",
      me: "我",
      subtitle: "充满激情的网页开发者和技术创作者",
      description1: "拥有网页开发经验，专注于使用现代技术创建响应式、可访问且高性能的网络应用程序, 手机端应用程序。",
      description2: "我热衷于为复杂问题创建优雅的解决方案，并不断学习新技术和技巧，以保持在不断发展的网络领域的前沿。",
      getInTouch: "联系我",
      webDev: "网页开发",
      webDevDesc: "使用现代框架创建响应式网站和网络应用程序。",
      appDev: "应用开发",
      appDevDesc: "使用现代技术构建创新且用户友好的移动和桌面应用程序。",
      uiux: "UI/UX设计",
      uiuxDesc: "设计直观的用户界面和无缝的用户体验。"
    },
    // 技能区域
    skills: {
      title: "我的",
      skills: "技能",
      all: "全部",
      frontend: "前端",
      backend: "后端",
      mobile: "移动端",
      tools: "工具"
    },
    // 项目区域
    projects: {
      title: "最近",
      projects: "项目",
      cocktailTitle: "动画鸡尾酒网站",
      cocktailDesc: "一个精美的动画鸡尾酒展示网站，使用React、Tailwind CSS和GSAP创建流畅的用户体验。",
      notesTitle: "数据同步笔记",
      notesDesc: "一个功能强大的笔记应用，支持实时数据同步，使用Next.js、CSS和Convex构建。",
      bookTitle: "3D体验书",
      bookDesc: "一个创新的3D交互式体验书，使用React、CSS和THREE.js技术创建沉浸式阅读体验。"
    },
    // 联系区域
    contact: {
      title: "联系",
      touch: "我",
      contactInfo: "联系信息",
      email: "邮箱",
      weixin: "微信",
      location: "位置",
      locationValue: "中国浙江杭州",
      sendMessage: "发送消息",
      yourName: "您的姓名",
      yourEmail: "您的邮箱",
      yourMessage: "您的消息",
      namePlaceholder: "您的姓名...",
      emailPlaceholder: "john@gmail.com",
      messagePlaceholder: "您好，我想聊聊关于...",
      send: "发送",
      // Toast 消息
      toast: {
        success: "✅ 信息发送成功！",
        error: "❌ 信息发送失败，请稍后重试。"
      }
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    // Project1 - Cocktail Website
    project1: {
      nav: {
        cocktails: "Cocktails",
        about: "Showcase",
        menu: "Drinks",
        contact: "Contact Us"
      },
      hero: {
        title: "Mojito",
        subtitle: "Cool. Cool. Cool.",
        description: "Taste cocktails in summer",
        content: "Every cocktail on our menu blends premium ingredients, creative flair, and timeless recipes designed to delight your senses and satisfy your palate.",
        viewCocktails: "View Cocktails"
      },
      about: {
        tag: "Cocktails",
        title: "Details",
        titleAccent: ",",
        subtitle: "from mixing to presentation",
        description: "Every cocktail we serve reflects our obsession with detail—from the first mix to the final presentation. It's this attention that transforms a simple drink into something truly memorable.",
        rating: "4.5",
        reviews: "12000+ Reviews"
      },
      contact: {
        title: "Welcome to our bar",
        address: "Address: XXXXXXXXXXX",
        contactUs: "Contact Us",
        phone: "Phone +86 123 4567 8901",
        wechat: "WeChat QR Code",
        openingHours: "Opening Hours"
      },
      cocktails: [
        {
          id: 1,
          name: "Classic Mojito",
          image: "/project1/images/drink1.png",
          title: "Simple Ingredients, Bold Flavor",
          description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights."
        },
        {
          id: 2,
          name: "Raspberry Mojito",
          image: "/project1/images/drink2.png",
          title: "A Zesty Classic That Never Fails",
          description: "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it's always crisp & refreshing."
        },
        {
          id: 3,
          name: "Violet Breeze",
          image: "/project1/images/drink3.png",
          title: "Simple Ingredients, Bold Flavor",
          description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights."
        },
        {
          id: 4,
          name: "Curacao Mojito",
          image: "/project1/images/drink4.png",
          title: "Crafted With Care, Poured With Love",
          description: "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing."
        }
      ],
      mockTailLists: [
        {
          name: "Tropical Bloom",
          country: "US",
          detail: "Bottle",
          price: "$10"
        },
        {
          name: "Passionfruit Mint",
          country: "US",
          detail: "Bottle",
          price: "$49"
        },
        {
          name: "Citrus Glow",
          country: "CA",
          detail: "750 ml",
          price: "$20"
        },
        {
          name: "Lavender Fizz",
          country: "IE",
          detail: "600 ml",
          price: "$29"
        }
      ],
      cocktailLists: [
        {
          name: "Chapel Hill Shiraz",
          country: "AU",
          detail: "Bottle",
          price: "$10"
        },
        {
          name: "Caten Malbec",
          country: "AU",
          detail: "Bottle",
          price: "$49"
        },
        {
          name: "Rhino Pale Ale",
          country: "CA",
          detail: "750 ml",
          price: "$20"
        },
        {
          name: "Irish Guinness",
          country: "IE",
          detail: "600 ml",
          price: "$29"
        }
      ],
      goodLists: [
        "Premium ingredients, quality guaranteed",
        "Masterful technique, perfect mixing",
        "Cocktail artistry, exceptional taste",
        "Fresh blends, unique flavors"
      ],
      featureLists: [
        "Balanced taste, perfect harmony",
        "Elegant presentation, visually stunning",
        "Always chilled, refreshingly cool",
        "Professional craftsmanship, artisan quality"
      ],
      openingHours: [
        { day: "Monday - Thursday", time: "11:00 AM – 12:00 AM" },
        { day: "Friday", time: "11:00 AM – 2:00 AM" },
        { day: "Saturday", time: "9:00 AM – 2:00 AM" },
        { day: "Sunday", time: "9:00 AM – 1:00 AM" }
      ],
      cocktailsTitle: "Cocktails:",
      mockTailsTitle: "Mocktails:",
      artTitle: "Craft",
      perfectChoice: "Perfect Choice",
      craftTitle: "Masterful Craft, Passionate Pour",
      craftDescription: "More than just a drink, it's a crafted moment tailored for you"
    },
    // Project2 - Notes App
    project2: {
      title: "Record",
      subtitle: "Well-organized notes make everything simple",
      description: "Build your own simple navigation, indexed information, annotations",
      login: "Login",
      email: "Email",
      password: "Password",
      confirm: "Confirm",
      loginError: "Login failed, please check email and password",
      serverError: "Unable to connect to server",
      // SideNav translations
      simpleNotes: "Simple Notes",
      newNote: "New Note",
      noNotes: "No notes yet",
      logout: "Logout",
      untitledNote: "Untitled Note",
      newNoteEditing: "New Note...",
      startTyping: "Start typing...",
      unsaved: "(unsaved)",
      synced: "(synced)",
      edited: "(edited)",
      characters: "chars",
      deleteConfirm: "Are you sure you want to delete this note?",
      switchNoteConfirm: "Current note has unsaved changes. Are you sure you want to switch to another note?",
      deleteError: "Failed to delete note, please try again",
      deleteNote: "Delete note",
      // Time format
      justNow: "just now",
      minutesAgo: "minutes ago",
      hoursAgo: "hours ago",
      daysAgo: "days ago",
      weeksAgo: "weeks ago",
      // TopNav translations
      saving: "Saving...",
      saveSuccess: "Saved",
      saveNewNote: "Save New Note",
      updateNote: "Update Note",
      edit: "Edit",
      preview: "Preview",
      saveError: "Save failed:",
      // Editor translations
      placeholder: `Type your notes here
 1. # Use this symbol for largest font
 2. ## For smaller heading
 3. No symbol for normal text
 4. Links like this: [Click me](https://github.com) `,
      // MDX translations
      startWriting: "Start writing your notes..."
    },
    // Project3 - 3D Book
    project3: {
      cover: "Cover",
      page: "Page {number}",
      back: "Back"
    },
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      name: "Revy", // Kept "Ruby" as it was in the original `en`
      lastName: "", // Kept "Sun" as it was in the original `en`
      description: "I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.",
      viewWork: "View My Work"
    },
    // About Section
    about: {
      title: "About",
      me: "Me",
      subtitle: "Passionate Web Developer & Tech Creator",
      description1: "With web development experience, I focus on creating responsive, accessible, and performant web applications and mobile applications using modern technologies.",
      description2: "I'm passionate about creating elegant solutions to complex problems and continuously learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.",
      getInTouch: "Get In Touch",
      webDev: "Web Development",
      webDevDesc: "Creating responsive websites and web applications with modern frameworks.",
      appDev: "App Development",
      appDevDesc: "Building innovative and user-friendly mobile and desktop applications with modern technologies.",
      uiux: "UI/UX Design",
      uiuxDesc: "Designing intuitive user interfaces and seamless user experiences."
    },
    // Skills Section
    skills: {
      title: "My",
      skills: "Skills",
      all: "All", // Changed from "all" to "All" for capitalization consistency
      frontend: "Frontend", // Changed to PascalCase
      backend: "Backend", // Changed to PascalCase
      mobile: "Mobile", // Changed to PascalCase
      tools: "Tools" // Changed to PascalCase
    },
    // Projects Section
    projects: {
      title: "Featured",
      projects: "Projects",
      cocktailTitle: "Animated Cocktail Website",
      cocktailDesc: "A beautifully animated cocktail showcase website, crafted with React, Tailwind CSS, and GSAP for a fluid user experience.",
      notesTitle: "Data Sync Notes",
      notesDesc: "A powerful note-taking application with real-time data synchronization, built with Next.js, CSS, and Convex.",
      bookTitle: "3D Experience Book",
      bookDesc: "An innovative 3D interactive experience book, created with React, CSS, and THREE.js technology for an immersive reading experience."
    },
    // Contact Section
    contact: {
      title: "Get In",
      touch: "Touch",
      contactInfo: "Contact Information",
      email: "Email",
      weixin: "WeChat", // Translated "微信" to "WeChat"
      location: "Location",
      locationValue: "Hangzhou, Zhejiang, China", // Corrected spelling and capitalization
      sendMessage: "Send a Message",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      namePlaceholder: "Your Name...",
      emailPlaceholder: "john@gmail.com",
      messagePlaceholder: "Hello, I'd like to talk about...",
      send: "Send",
      // Toast messages
      toast: {
        success: "✅ Message sent successfully!",
        error: "❌ Failed to send message, please try again later."
      }
    }
  }
};

// 语言类型定义
export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.zh;

// 项目1相关类型定义
export type CocktailItem = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};

export type DrinkItem = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export type OpeningHour = {
  day: string;
  time: string;
};