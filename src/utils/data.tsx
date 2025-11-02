import { 
  MenuItem, 
  Challenge, 
  Hero, 
  Products, 
  Certification, 
  Stat, 
  Company, 
  Solutions, 
  ProductsFooter,
  Nodes,
  Events,
  PathStep,
  Documents,
  Message,
  Metric,
  ProductItem,
  ServiceItem,
  SolutionItem,
  BlogerItem,
  CompanyItem,
  SolutionsItems,
  GoalsVisions,
  Pillars,
  Blogs,
  Filter,
  Values,
  Timeline,
  Jobs,
  ContactInfo,
  SolutionHome,
  DataAbout,
  DescriptionTeam,
  ChoseMarahel,
  HeroData
} from "./types";
import {
  Database, 
  Zap, 
  Shield, 
  Globe, 
  FileText, 
  MessageSquare, 
  Calendar, 
  Award, 
  CheckCircle,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Clock,
  Rocket, 
  Sparkles,
  Target,
  Eye,
  Mail, 
  Phone, 
  MapPin,
  Heart,
  Landmark,
  Building2,
  Radio,
  Flag,
  Languages,
  Share2,
  Code,
  Gpu,
  GitBranch,
  Mic,
  History,
  LockKeyhole, 
  Network,
  Gauge
} from "lucide-react";
import { KnowledgeHubDemo } from "@/components/animations/file2";
import { ChatbotDemo } from "@/components/animations/file3";
import { EventNavigationDemo } from "@/components/animations/file";

export const getMenuItem = (t: (key: string) => string): MenuItem[] => [
    {
        name: t('home'),
        href: "",
        isActive: true,
    }
]
export const getProductsMenu = (t: (key: string) => string): ProductItem[] => [
  {
    id: 1,
    title: t('knowledgehub.title'),
    description: t('knowledgehub.description'),
    href: "#ai-hub",
    icon: <FileText className="w-5 h-5 text-primary" />,
    bgColor: "bg-primary/10",
    hoverColor: "hover:bg-primary/10",
  },
  {
    id: 2,
    title: t('morshed.title'),
    description: t('morshed.description'),
    href: "#morshed",
    icon: <MessageSquare className="w-5 h-5 text-secondary" />,
    bgColor: "bg-secondary/10",
    hoverColor: "hover:bg-secondary/10",
  },
  {
    id: 3,
    title: t('rafiki.title'),
    description: t('rafiki.description'),
    href: "#rafiki",
    icon: <Calendar className="w-5 h-5 text-accent" />,
    bgColor: "bg-accent/10",
    hoverColor: "hover:bg-accent/10",
  },
]
export const getServicesMenu = (t: (key: string) => string): ServiceItem[] => [
  { id: 1,title: t('services.llms'), href: "/services" },
  { id: 2,title: t('services.readiness'), href: "/services" },
  { id: 3,title: t('services.roadmap'), href: "/services" },
  { id: 4,title: t('services.platform'), href: "/services" },
  { id: 5,title: t('services.custom'), href: "/services" },
  { id: 6,title: t('services.consulting'), href: "/services" },
]


export const getSolutionsMenu = (t: (key: string) => string): SolutionItem[] => [
  { title: t('solution.menu'), href: "/solutions" },
];

export const getBlogerMenu = (t: (key: string) => string): BlogerItem[] => [
  { title: t('bloger.insights'), href: "/visions" },
  { title: t('bloger.blogs'), href: "/blogs" },
];

export const getCompanyMenu = (t: (key: string) => string): CompanyItem[] => [
  { title: t('company.about'),  href: "/about" },
  { title: t('company.careers'), href: "/jobs" },
  { title: t('company.contact'),  href: "/contactus" },
];


export const gethero = (t: (key: string) => string): Hero[] => [
    {
        icon: (
            <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">
                KSA
            </div>
        ),
        label: t('Herolabale1'),
        bg: "bg-primary/10",
    },
    {
        icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />,
        label: t('Herolabale2'),
        bg: "bg-secondary/10",
    },
    {
        icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
        label: t('Herolabale4'),
        bg: "bg-primary/10",
    },
]

export const getProducts = (t: (key: string) => string): Products[] => [
  {
    id: 1,
    icon: FileText,
    title: t("title1"),
    description: t("description1"),
    features: [
      t("features11"),
      t("features12"),
      t("features13")
    ],
    color: "primary",
    demo: <KnowledgeHubDemo />
  },
  {
    id: 2,
    icon: MessageSquare,
    title: t("title2"),
    description: t("description2"),
    features: [
      t("features21"),
      t("features22"),
      t("features23")
    ],
    color: "secondary",
    demo: <ChatbotDemo />
  },
  {
    id: 3,
    icon: Calendar,
    title: t("title3"),
    description: t("description3"),
    features: [
      t("features31"),
      t("features32"),
      t("features33")
    ],
    color: "accent",
    demo: <EventNavigationDemo />
  }
];

export const getChallenges = (t: (key: string) => string): Challenge[] => [
    {
        icon: Database,
        title: t('title1'),
        description: t('description1'),
        global: t('global1'),
        color: "primary",
    },
    {
        icon: Zap,
         title: t('title2'),
        description: t('description2'),
        global: t('global2'),
        color: "secondary",
    },
    {
        icon: Shield,
        title: t('title3'),
        description: t('description3'),
        global: t('global3'),
        color: "accent",
    },
];

export const getCertifications = (t: (key: string) => string): Certification[] => [
  {
    icon: Shield,
    title: t('title1'),
    description: t('description1'),
    color: "primary",
  },
  {
    icon: Award,
    title: t('title2'),
    description: t('description3'),
    color: "secondary",
  },
  {
    icon: CheckCircle,
    title: t('title3'),
    description: t('description3'),
    color: "accent",
  },
  {
    icon: () => (
      <div className="w-10 h-7 bg-[#1a5d3a] rounded flex items-center justify-center text-white text-xs font-bold">
        KSA
      </div>
    ),
    title: t('title4'),
    description: t('description4'),
    color: "primary",
  },
];

export const getStats = (t: (key: string) => string): Stat[] => [
  { value: "99.9%", label: t('label1'), color: "primary" },
  { value: "0", label: t('label2'), color: "secondary" },
  { value: "24/7", label: t('label4'), color: "primary" },
];

export const getCompany = (t: (key: string) => string): Company[] => [
  {name: t('name1')},
  {name: t('name2')},
  {name: t('name3')},
];
export const getSolutions = (t: (key: string) => string): Solutions[] => [
  {name: t('name4')},
  {name: t('name5')},
  {name: t('name6')},
];
export const getProductsFooter = (t: (key: string) => string): ProductsFooter[] => [
  {name: t('name7')},
  {name: t('name8')},
  {name: t('name9')},
  {name: t('name10')},
];

export const getNodes = (t: (key: string) => string): Nodes[] =>[
  { icon: Database, label: t('label1'), color: "primary" },
  { icon: Cloud, label: t('label2'), color: "secondary" },
    { icon: Lock, label: t('label3'), color: "accent" }, 
    { icon: Zap, label: t('label4'), color: "primary" },
];

export const getEvents = (t: (key: string) => string): Events[] =>[
    { time: "09:00", title: t('title1'), location: t('location1'), room: "A1" },
    { time: "11:00", title: t('title2'), location: t('location2'), room: "B2" },
    { time: "14:00", title: t('title3'), location: t('location3'), room: "C3" },
];

export const getPathSteps = (t: (key: string) => string): PathStep[] => [
  { x: "20%", y: "30%", label: t('label1') },
  { x: "40%", y: "40%", label: t('label2') },
  { x: "60%", y: "35%", label: t('label3') },
  { x: "75%", y: "45%", label: t('label4') },
];

 export const getDocuments = (t: (key: string) => string): Documents[] => [
    { title: t('title1'), type: "PDF", pages: 24 },
    { title: t('title2'), type: "PDF", pages: 156 },
    { title: t('title3'), type: "DOC", pages: 89 },
  ];

  
export const getDemomessage = (t: (key: string) => string): Message[] => [
    { role: "user", content: t('content1') },
    { role: "assistant", content: t('content2') },
    { role: "user", content: t('content3') },
    { role: "assistant", content: t('content4') },
  ];
  
  
export const getMetric = (t: (key: string) => string): Metric[] => [
    { icon: Users, label: t('label1'), value: 0, max: 2847, suffix: t('suffix1'), color: "primary" },
    { icon: TrendingUp, label: t('label2'), value: 0, max: 98, suffix: t('suffix2'), color: "secondary" },
    { icon: Clock, label: t('label3'), value: 0, max: 2.3, suffix: t('suffix3'), color: "accent" },
    { icon: Zap, label: t('label4'), value: 0, max: 15420, suffix: t('suffix4'), color: "primary" },
];

export const getSolutionsPage = (t: (key: string) => string): SolutionsItems[] => [
  {
    id: 1,
    titel: t('sol1.title'),
    items: [
      { id: 1, name: t('sol1.items.name1')},
      { id: 2, name: t('sol1.items.name2')},
      { id: 3, name: t('sol1.items.name3')},
      { id: 4, name: t('sol1.items.name4')},
    ],
  },
  {
    id: 2,
    titel: t('sol2.title'),
    items: [
      { id: 1, name: t('sol2.items.name1')},
      { id: 2, name: t('sol2.items.name2')},
      { id: 3, name: t('sol2.items.name3')},
      { id: 4, name: t('sol2.items.name4')},
    ],
  },
  {
    id: 3,
    titel: t('sol3.title'),
    items: [
      { id: 1, name: t('sol3.items.name1')},
      { id: 2, name: t('sol3.items.name2')},
      { id: 3, name: t('sol3.items.name3')},
      { id: 4, name: t('sol3.items.name4')},
    ],
  },
  {
    id: 4,
    titel: t('sol4.title'),
    items: [
      { id: 1, name: t('sol4.items.name1')},
      { id: 2, name: t('sol4.items.name2')},
      { id: 3, name: t('sol4.items.name3')},
      { id: 4, name: t('sol4.items.name4')},
    ],
  },
];


export const getGoalsVisions = (t: (key: string) => string): GoalsVisions[] => [
  {
    id: 1,
    icon: Rocket,
    title: t('goals.title.t1'),
    description: t('goals.desc.d1'),
    color: "primary"
  },
  {
    id: 2,
    icon: TrendingUp,
    title: t('goals.title.t2'),
    description: t('goals.desc.d2'),
    color: "secondary"
  },
  {
    id: 3,
    icon: Globe,
    title: t('goals.title.t3'),
    description: t('goals.desc.d3'),
    color: "accent"
  },
  {
    id: 4,
    icon: Sparkles,
    title: t('goals.title.t4'),
    description: t('goals.desc.d4'),
    color: "primary"
  },
  {
    id: 5,
    icon: Shield,
    title: t('goals.title.t5'),
    description: t('goals.desc.d5'),
    color: "secondary"
  },
  {
    id: 6,
    icon: Users,
    title: t('goals.title.t6'),
    description: t('goals.desc.d6'),
    color: "accent"
  }
];

export const getPillars = (t: (key: string) => string): Pillars[] => [
  {
    id: 1,
    title: t('success.title.t1'),
    description: t('success.desc.d1'),
    items: [
      {title: t('success.list.ul1.l1')},
      {title: t('success.list.ul1.l2')},
      {title: t('success.list.ul1.l3')}
    ]
  },
  {
    id: 2,
    title: t('success.title.t2'),
    description: t('success.desc.d2'),
    items: [
      {title: t('success.list.ul2.l1')},
      {title: t('success.list.ul2.l2')},
      {title: t('success.list.ul2.l3')}
    ]
  },
  {
    id: 3,
    title: t('success.title.t3'),
    description: t('success.desc.d3'),
    items: [
      {title: t('success.list.ul3.l1')},
      {title: t('success.list.ul3.l2')},
      {title: t('success.list.ul3.l3')}
    ]
  },
];

export const getblogPosts = (t: (key: string) => string): Blogs[] => [
  {
    id: 1,
    title: t('blog.title.t1'),
    excerpt: t('blog.excerpt.ex1'),
    author: t('blog.author.author1'),
    date: t('blog.dateblg.date1'),
    category: t('blog.categorys.cat1'),
    image: t('blog.images.image1'),
    readTime: t('blog.readTime.rt1'),
  },
  {
    id: 2,
    title: t('blog.title.t2'),
    excerpt: t('blog.excerpt.ex2'),
    author: t('blog.author.author2'),
    date: t('blog.dateblg.date2'),
    category: t('blog.categorys.cat2'),
    image: t('blog.images.image2'),
    readTime: t('blog.readTime.rt2'),
  },
  {
    id: 3,
    title: t('blog.title.t3'),
    excerpt: t('blog.excerpt.ex3'),
    author: t('blog.author.author3'),
    date: t('blog.dateblg.date3'),
    category: t('blog.categorys.cat3'),
    image: t('blog.images.image3'),
    readTime: t('blog.readTime.rt3'),
  },
  {
    id: 4,
    title: t('blog.title.t4'),
    excerpt: t('blog.excerpt.ex4'),
    author: t('blog.author.author4'),
    date: t('blog.dateblg.date4'),
    category: t('blog.categorys.cat4'),
    image: t('blog.images.image4'),
    readTime: t('blog.readTime.rt4'),
  },
  {
    id: 5,
    title: t('blog.title.t5'),
    excerpt: t('blog.excerpt.ex5'),
    author: t('blog.author.author5'),
    date: t('blog.dateblg.date5'),
    category: t('blog.categorys.cat5'),
    image: t('blog.images.image5'),
    readTime: t('blog.readTime.rt5'),
  },
  {
    id: 6,
    title: t('blog.title.t6'),
    excerpt: t('blog.excerpt.ex6'),
    author: t('blog.author.author6'),
    date: t('blog.dateblg.date6'),
    category: t('blog.categorys.cat6'),
    image: t('blog.images.image6'),
    readTime: t('blog.readTime.rt6'),
  },
];

export const getFilter = (t: (key: string) => string): Filter[] => [
  {
    id: 1,
    title: t('filter.f1')
  },
  {
    id: 2,
    title: t('filter.f2')
  },
  {
    id: 3,
    title: t('filter.f3')
  },
  {
    id: 4,
    title: t('filter.f4')
  },
  {
    id: 5,
    title: t('filter.f5')
  },
  {
    id: 6,
    title: t('filter.f6')
  },
  {
    id: 7,
    title: t('filter.f7')
  }
];

export const getValues = (t: (key: string) => string): Values[] => [
  {
    id: 1,
    icon: Target,
    title: t('values.values.title.t1'),
    description: t('values.values.desc.d1') 
  },
  {
    id:2,
    icon: Award,
    title: t('values.values.title.t2'),
    description: t('values.values.desc.d2')
  },
  {
    id:3,
    icon: Users,
    title: t('values.values.title.t3'),
    description: t('values.values.desc.d3') 
  },
  {
    id:4,
    icon: Eye,
    title: t('values.values.title.t4'),
    description: t('values.values.desc.d4') 
  }
];

export const getTimeline = (t: (key: string) => string): Timeline[] => [
  {
    id: 1,
    year: t('Journey.item.year.y1'),
    title: t('Journey.item.title.t1'),
    description: t('Journey.item.desc.d1')
  },
  {
    id: 2,
    year: t('Journey.item.year.y2'),
    title: t('Journey.item.title.t2'),
    description: t('Journey.item.desc.d2')
  },
  {
    id: 3,
    year: t('Journey.item.year.y3'),
    title: t('Journey.item.title.t3'),
    description: t('Journey.item.desc.d3')
  },
  {
    id: 1,
    year: t('Journey.item.year.y4'),
    title: t('Journey.item.title.t4'),
    description: t('Journey.item.desc.d4')
  },
  {
    id: 1,
    year: t('Journey.item.year.y5'),
    title: t('Journey.item.title.t5'),
    description: t('Journey.item.desc.d5')
  },
];

type Benefits = {
  id: number;
  name: string;
  description: string;
}
export const getJobs = (t: (key: string) => string): Jobs[] => [
    {
      id: 1,
      title: t('jobs.name.n1'),
      description: t('jobs.description.desc1'),
      department: t('jobs.department.dept1'),
      location: t('jobs.location.loc1'),
      type: t('jobs.type.ty1'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req4.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req1.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req1.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req1.r4')
        },
      ]
    },
    {
      id: 2,
      title: t('jobs.name.n2'),
      description: t('jobs.description.desc2'),
      department: t('jobs.department.dept2'),
      location: t('jobs.location.loc2'),
      type: t('jobs.type.ty2'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req2.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req2.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req2.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req2.r4')
        },
      ]
    },
    {
      id: 3,
      title: t('jobs.name.n3'),
      description: t('jobs.description.desc3'),
      department: t('jobs.department.dept3'),
      location: t('jobs.location.loc3'),
      type: t('jobs.type.ty3'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req3.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req3.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req3.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req3.r4')
        },
      ]
    },
    {
      id: 4,
      title: t('jobs.name.n4'),
      description: t('jobs.description.desc4'),
      department: t('jobs.department.dept4'),
      location: t('jobs.location.loc4'),
      type: t('jobs.type.ty4'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req4.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req4.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req4.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req4.r4')
        },
      ]
    },
    {
      id: 5,
      title: t('jobs.name.n5'),
      description: t('jobs.description.desc5'),
      department: t('jobs.department.dept5'),
      location: t('jobs.location.loc5'),
      type: t('jobs.type.ty5'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req5.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req5.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req5.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req5.r4')
        },
      ]
    },
    {
      id: 6,
      title: t('jobs.name.n6'),
      description: t('jobs.description.desc6'),
      department: t('jobs.department.dept6'),
      location: t('jobs.location.loc6'),
      type: t('jobs.type.ty6'),
      requirements: [
        {
          id:1,
          text:t('jobs.requirments.req6.r1')
        },
        {
          id:2,
          text:t('jobs.requirments.req6.r2')
        },
        {
          id:3,
          text:t('jobs.requirments.req6.r3')
        },
        {
          id:4,
          text:t('jobs.requirments.req6.r4')
        },
      ]
    },
  ];

export const getBenefits = (t: (key: string) => string): Benefits[] => [
    {
      id:1,
      name: t('Benefits.name.n1'),
      description: t('Benefits.description.d1')
    },
    {
      id:2,
      name: t('Benefits.name.n2'),
      description: t('Benefits.description.d2')
    },
    {
      id:3,
      name: t('Benefits.name.n3'),
      description: t('Benefits.description.d3')
    },
    {
      id:4,
      name: t('Benefits.name.n4'),
      description: t('Benefits.description.d4')
    },
    {
      id:5,
      name: t('Benefits.name.n5'),
      description: t('Benefits.description.d5')
    },
    {
      id:6,
      name: t('Benefits.name.n6'),
      description: t('Benefits.description.d6')
    },
  ];

export const getContactInfo = (t: (key: string) => string): ContactInfo[] => [
    {
      id:1,
      icon: Mail,
      title: t('contactusinfo.title.t1'),
      content: t('contactusinfo.content.c1'),
      link: "mailto:info@marahelai.com"
    },
    {
      id:2,
      icon: Phone,
      title: t('contactusinfo.title.t3'),
      content: t('contactusinfo.content.c2'),
      link: "tel:+966112345678"
    },
    {
      id:3,
      icon: MapPin,
      title: t('contactusinfo.title.t3'),
      content: t('contactusinfo.content.c3'),
      link: ""
    },
    {
      id:4,
      icon: Clock,
      title: t('contactusinfo.title.t4'),
      content: t('contactusinfo.content.c4'),
      link: ""
    }
  ];
export const getSolutionHome = (t: (key: string) => string): SolutionHome[] => [
    {
      id:1,
      icon: Building2,
      title: t('items.title.t1'),
      content: [
        {
          id: 1,
          name: t('items.description.d1.li1')
        },
        {
          id: 2,
          name: t('items.description.d1.li2')
        },
        {
          id: 3,
          name: t('items.description.d1.li3')
        },
        {
          id: 4,
          name: t('items.description.d1.li4')
        }
      ],
    },
    {
      id:2,
      icon: Heart,
      title: t('items.title.t2'),
      content: [
        {
          id: 1,
          name: t('items.description.d2.li1')
        },
        {
          id: 2,
          name: t('items.description.d2.li2')
        },
        {
          id: 3,
          name: t('items.description.d2.li3')
        },
        {
          id: 4,
          name: t('items.description.d2.li4')
        }
      ],
    },
    {
      id:3,
      icon: Landmark,
      title: t('items.title.t3'),
      content: [
        {
          id: 1,
          name: t('items.description.d3.li1')
        },
        {
          id: 2,
          name: t('items.description.d3.li2')
        },
        {
          id: 3,
          name: t('items.description.d3.li3')
        },
        {
          id: 4,
          name: t('items.description.d3.li4')
        }
      ],
    },
    {
      id:4,
      icon: Radio,
      title: t('items.title.t4'),
      content: [
        {
          id: 1,
          name: t('items.description.d4.li1')
        },
        {
          id: 2,
          name: t('items.description.d4.li2')
        },
        {
          id: 3,
          name: t('items.description.d4.li3')
        },
        {
          id: 4,
          name: t('items.description.d4.li4')
        }
      ],
    },
  ];

export const getChoseMarahel = (t: (key: string) => string): ChoseMarahel[] => [
  {
    id: 1,
    title: t("choseMarahel.1.title"),
    description: t("choseMarahel.1.description"),
    icon: Flag,
  },
  {
    id: 2,
    title: t("choseMarahel.2.title"),
    description: t("choseMarahel.2.description"),
    icon: Languages,
  },
  {
    id: 3,
    title: t("choseMarahel.3.title"),
    description: t("choseMarahel.3.description"),
    icon: Gpu,
  },
  {
    id: 4,
    title: t("choseMarahel.4.title"),
    description: t("choseMarahel.4.description"),
    icon: Share2,
  },
  {
    id: 5,
    title: t("choseMarahel.5.title"),
    description: t("choseMarahel.5.description"),
    icon: Code,
  },
  {
    id: 6,
    title: t("choseMarahel.6.title"),
    description: t("choseMarahel.6.description"),
    icon: Zap,
  },
];

export const getDescriptionTeam = (t: (key: string) => string): DescriptionTeam[] => [
  {
    id: 1,
    title: t("descriptionTeam.1.title"),
    description: t("descriptionTeam.1.description"),
  },
  {
    id: 2,
    title: t("descriptionTeam.2.title"),
    description: t("descriptionTeam.2.description"),
  },
];

export const getDataAbout = (t: (key: string) => string): DataAbout[] => [
  {
    id: 1,
    name: t("dataAbout.1.name"),
    dept: t("dataAbout.1.dept"),
    certificate: t("dataAbout.1.certificate"),
    experiance: t("dataAbout.1.experiance"),
    image: "/about/MFO.png",
  },
  {
    id: 2,
    name: t("dataAbout.2.name"),
    dept: t("dataAbout.2.dept"),
    certificate: t("dataAbout.2.certificate"),
    experiance: t("dataAbout.2.experiance"),
    image: "/about/IMZ.png",
  },
  {
    id: 3,
    name: t("dataAbout.3.name"),
    dept: t("dataAbout.3.dept"),
    certificate: t("dataAbout.3.certificate"),
    experiance: t("dataAbout.3.experiance"),
    image: "/about/JSB.png",
  },
];

export const getdatahero = (t: (key: string) => string): HeroData[] => [
  {
    id: 1,
    title: t("hero1.title"),
    subtitle: t("hero1.subtitle"),
    features: [
      {
        id: 1,
        title: t("hero1.features.smartRouting.title"),
        description: t("hero1.features.smartRouting.description"),
        icon: GitBranch,
      },
      {
        id: 2,
        title: t("hero1.features.consistentVoice.title"),
        description: t("hero1.features.consistentVoice.description"),
        icon: Mic,
      },
      {
        id: 3,
        title: t("hero1.features.instantContext.title"),
        description: t("hero1.features.instantContext.description"),
        icon: History,
      },
    ],
    cta: [
      {
        id: 1,
        primary: t("hero1.cta.primary"),
        secondary: t("hero1.cta.secondary"),
      },
    ],
    footer: t("hero1.footer"),
  },
  {
    id: 2,
    title: t("hero2.title"),
    subtitle: t("hero2.subtitle"),
    features: [
      {
        id: 1,
        title: t("hero2.features.dataSovereignty.title"),
        description: t("hero2.features.dataSovereignty.description"),
        icon: LockKeyhole,
      },
      {
        id: 2,
        title: t("hero2.features.unifiedPlatform.title"),
        description: t("hero2.features.unifiedPlatform.description"),
        icon: Network,
      },
      {
        id: 3,
        title: t("hero2.features.performance.title"),
        description: t("hero2.features.performance.description"),
        icon: Gauge,
      },
    ],
    cta: [
      {
        id: 1,
        primary: t("hero2.cta.primary"),
        secondary: t("hero2.cta.secondary"),
      },
    ],
    footer: t("hero2.footer"),
  },
];