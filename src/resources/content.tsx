import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Patrick",
  lastName: "Genon",
  name: `Patrick Genon`,
  role: "Full Stack Developer / IT Specialist",
  avatar: "/images/patrick.png",
  email: "pgenon53@gmail.com",
  location: "Asia/Manila", 
  languages: ["English", "Filipino"], 
  locale: "en", 
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Chocomani121",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/patrick-genon-333927273/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",  
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `false`,
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Patrick G. Genon</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">  
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  // subline: (
  //   <Text size="xl">
  //     I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
  //     <Text as="span" weight="strong">
  //       Cebu City, Philippines
  //     </Text>. I build modern web applications, solve technical challenges,
  //     and create intuitive digital experiences.
  //   </Text>
  // ),
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong"> Cebu City, Philippines</Text>. I build modern web applications and solve technical challenges, and create intuitive digital experiences.<br/> 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {/* {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based {person.role.toLowerCase()} with a passion for transforming complex challenges
        into simple, elegant design solutions. Their work spans digital interfaces, interactive
        experiences, and the convergence of design and technology. */}
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ashgard Industries",  
        timeframe: "",
        role: "FullStack Developer",
        achievements: [
          <>
            Built and enhanced features for the Ashgard Employee Management System using Python Flask, Bootstrap, and MySQL.
          </>,
          <>
            Redesigned and migrated the legacy website to React and Tailwind CSS, creating a faster, more responsive, and modern interface.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "DNA micro",
        timeframe: "May 2024 - Aug 2024",
        role: "Technical Support Representative/TSR",
        achievements: [
          <>
            Monitored enterprise network, server, and infrastructure health using Zabbix, Proxmox, TP-Link, and Gatus. 
          </>,
          <>
            Collaborated with Development, QA, and Operations teams to validate deployments and resolve production issues.
          </>,
          <>
            Provided proactive hardware, software, and infrastructure support to maximize system uptime and productivity.
          </>,
        ],
        images: [],
      },
      {
        company: "CIDEC",
        timeframe: "Aug 2023 - Jan 2024",
        role: "IT - Specialist",
        achievements: [
          <>
             Engineered and automated the school's overall IT environment using ClickUp and Power Automate to streamline administrative workflows and lesson delivery.  
          </>,
          <>
            Designed and managed the school’s entire IT ecosystem, including network, maintenance, hardware deployment
          </>,
        ],
        images: [],
      },
      {
        company: "Nexseed/Udemy",
        timeframe: "Jun 2022",
        role: "Java Coding Bootcamp",
        achievements: [
          <>
             Practice OOP method 
          </>,
          <>
            Designed and managed the school’s entire IT ecosystem, including network, maintenance, hardware deployment
          </>,
        ],
        images: [
          {
            src: "/images/gallery/nexseedjavabootcamp.png",
            alt: "Once UI Project",
            width: 16,
            height: 17,
          },
          {
            src: "/images/gallery/udemy.png",
            alt: "Once UI Project",
            width: 10,
            height: 10,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Cebu",
        description: <>Bachelors of Information Technology.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [

      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
