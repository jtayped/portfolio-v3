// Hero
import BG1 from "../assets/hero/bg1.jpg";
import BG2 from "../assets/hero/bg2.jpg";

// Testimonials
import { Juan, Vithanco, Walter } from "../assets/testimonials";

// Portfolio
import {
  GPTArticles,
  Solitaire,
  Portfolio,
  OldPortfolio,
} from "../assets/portfolio";

// Contact
import PFP from "../assets/contact/PFP.webp";

export const hero = {
  title: "Welcome",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quas minus. Consequuntur natus exercitationem aut omnis nulla sit, voluptas fuga quibusdam doloribus minima! Magni cum quis ex impedit porro.",
  secondarySections: [
    {
      title: "Boost Your Business Online",
      image: BG1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quas minus. Consequuntur natus exercitationem aut omnis nulla sit, voluptas fuga quibusdam doloribus minima! Magni cum quis ex impedit porro.",
    },
    {
      title: "Unleash the Potential of the Web",
      image: BG2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti quas minus. Consequuntur natus exercitationem aut omnis nulla sit, voluptas fuga quibusdam doloribus minima! Magni cum quis ex impedit porro.",
    },
  ],
};

export const about = {
  title: "About Us",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ratione est consequatur ab veritatis nesciunt labore ea omnis aliquid in vel dolorum autem laboriosam temporibus amet fugiat quis adipisci numquam?",
};

export const testimonials = [
  {
    image: Juan,
    stars: 5,
    name: "Juan Antonio",
    details: "Fiverr",
    title: "A Great Developer!",
    testimonial:
      "A great developer who helps you describe what is needed, but also understands how to solve the problem in front of me, very attentive, he met my expectations 110%, excellent treatment, he helped me with everything, for the next project I will count on him again, him and his knowledge",
  },
  {
    image: Vithanco,
    stars: 5,
    name: "Vithanco",
    details: "Fiverr",
    title: "Design Alchemist",
    testimonial:
      "I recently had the pleasure of working with Joel, a talented young professional from Fiverr. The task at hand was CSS styling, a complex niche that Joel navigates with considerable finesse. From the onset, Joel's expertise shone through brightly. He didn't just understand the technical requirements of my project but also took the time to comprehend the aesthetic vision that underpinned my request. Joel's skillset in CSS styling is undoubtedly vast, but it was his commitment to realizing my project that truly set him apart.",
  },
  {
    image: Walter,
    stars: 5,
    name: "Walter King",
    details: "Placeholder",
    title: "Professional and efficient",
    testimonial:
      "Joel is a true professional when it comes to web development. He was able to create a beautiful and functional website for me in a very efficient manner. His attention to detail and communication throughout the process was exceptional.",
  },
];

export const portfolio = {
  title: "Portfolio",
  pieces: [
    {
      title: "GPT Articles",
      description:
        "Welcome to GPT Articles, where laughter meets knowledge! Brace yourself for a hilarious ride through AI-generated content. Sit back, relax, and prepare to be entertained as our AI-powered humor takes over the realm of information. Get ready to ROFL your way through our quirky articles!",
      image: GPTArticles,
      link: "https://joeltaylor.business/gpt-articles/",
    },
    {
      title: "Portfolio",
      description:
        "I recently created a solitaire game using Pygame, and I'm really pleased with the final product. I noticed that many of the solitaire games available online looked outdated and unappealing, so I decided to take matters into my own hands and recreate it as a side project. The end result is a polished and visually appealing game that I'm proud to share. ",
      image: Portfolio,
      link: "/",
    },
    {
      title: "Solitaire",
      description:
        "I recently created a solitaire game using Pygame, and I'm really pleased with the final product. I noticed that many of the solitaire games available online looked outdated and unappealing, so I decided to take matters into my own hands and recreate it as a side project. The end result is a polished and visually appealing game that I'm proud to share. ",
      image: Solitaire,
      link: "https://github.com/jtayped/SolitaireV2",
    },
    {
      title: "Old Portfolio",
      description:
        "This portfolio is my latest piece, and I'm really proud of how it turned out. I decided to go for a black and white theme, which I think looks really sleek and professional. I focused a lot on the aesthetics and user interface, making sure that it's easy to navigate and visually appealing.",
      image: OldPortfolio,
      link: "https://github.com/jtayped/jtayped.github.io",
    },
  ],
};

export const contact = {
  title: "Contact Us",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ratione est consequatur ab veritatis nesciunt labore ea omnis aliquid in vel dolorum autem laboriosam temporibus amet fugiat quis adipisci numquam?",
  socials: {
    instagram: {
      link: "https://www.instagram.com/jtayped_/",
      username: "jtayped_",
      name: "Joel Taylor",
      pfp: PFP,
      posts: 0,
      followers: 354,
      following: 367,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/joel-taylor-065bb8263/",
      name: "Joel Taylor",
      pfp: PFP,
      location: "Mollerussa, Catalonia, Spain",
      school: "La Salle Mollerussa",
      followers: 4,
      connections: 4,
    },
  },
};
