import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type MenuItem = {
    name: string;
    href: string;
    isActive: boolean;
};

export type Challenge = {
  icon: LucideIcon;
  title: string;
  description: string;
  global: string;
  color: "primary" | "secondary" | "accent";
};

export type Hero = {
  icon: ReactNode;
  label: string;
  bg: string;
}

export type Products = {
  id:number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "primary" | "secondary" | "accent";
  demo: ReactNode;
}

export type Certification = {
  icon: LucideIcon | (() => ReactNode);
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

export type Stat = {
  value: string;
  label: string;
  color: "primary" | "secondary" | "accent";
}

export type Company = {
  id:  number;
  href: string;
  name: string;
}

export type Solutions = {
  id:number;
  name: string;
}

export type ProductsFooter = {
  id: number;
  name: string;
}

export type Nodes = {
  icon: LucideIcon | (() => ReactNode);
  label: string;
  color: string;
}

export type Events = {
  time: string;
  title: string;
  location: string;
  room: string;
};

export type PathStep = {
  x: string;
  y: string;
  label: string;
};

export type Documents = {
  title: string;
  type: string;
  pages: number;
};

 export type Message = {
    role: "user" | "assistant";
    content: string;
  }

 export type Metric = {
    icon: LucideIcon;
    label: string;
    value: number;
    max: number;
    suffix: string;
    color: string;
  }

 
 export type ProductItem = {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
}

export type ServiceItem = {
  id: number;
  title: string;
  href: string;
}

export type SolutionItem = {
  title: string;
  href: string;
}

export type BlogerItem = {
  title: string;
  href: string;
}

export type CompanyItem = {
  title: string;
  href: string;
}

type SolutionsList = {
  id: number;
  name: string;
};
export type SolutionsItems = {
  id: number;
  titel: string;
  items: SolutionsList[];
};

export type GoalsVisions = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string; 
  color: string;
}

type PillarsItems = {
  title: string;
}

export type Pillars = {
  id: number,
  title: string;
  description: string;
  items: PillarsItems[];
}

export type Blogs = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}
export type Filter = {
  id: number;
  title: string;
}
export type Values = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;

}
export type Timeline = {
  id: number;
  year: string;
  title: string;
  description: string;

}

type Requirements = {
  id: number;
  text: string;
}
export type Jobs = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: Requirements[];

}

export type ContactInfo = {
  id: number;
  icon: LucideIcon;
  title: string;
  content: string;
  link: string;
}

type Itemsolution = {
  id: number;
  name: string;
}
export type SolutionHome = {
  id: number;
  icon: LucideIcon;
  title: string;
  content: Itemsolution[];
}

export type DataAbout = {
  id: number;
  name: string;
  dept: string;
  certificate: string;
  experiance: string;
  image: string
}

export type DescriptionTeam = {
  id: number;
  title: string;
  description: string;
}

export type ChoseMarahel = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

type Features = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon
}

type CTA = {
  id: number;
  primary: string;
  secondary: string;
}
export type HeroData = {
  id: number;
  title: string;
  subtitle: string;
  features: Features[];
  cta: CTA[];
  footer: string;
}
