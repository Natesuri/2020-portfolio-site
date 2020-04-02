export const NAV = {
  HOME: {
    route: '/',
    name: 'Home'
  },
  HISTORY: {
    route: '/history',
    name: 'Work History'
  },
  SKILLS: {
    route: '/skills',
    name: 'Skills'
  },
  PERSONAL: {
    route: '/bonus-features',
    name: 'Bonus Features'
  },
  CONTACT: {
    route: '/contact',
    name: 'Contact'
  },
  RESUME: {
    route: '/resume',
    name: 'Resume'
  },
}

export const COPY = {
  HOME: {
    HEADER: "Howdy. I'm Nathaniel Suri. I write software.",
    MAIN: [
      "There are a lot of attributes that a Software Engineer can have, but the ones that I want to to highlight about myself are:",
      "I'm a storyteller, a team player and an innovator.",
    ],
    DETAILS: {
      "Storyteller": [
        "I'm a storyteller at heart, which helps me empathize with the end user of the platform or application that I'm building. Understanding their needs and desires allows me to make value-driven programming and design decisions.",
        "My communication skills allow me to bridge the gap between business goals, operations and user needs, and the aspirational designs. This keeps everyone honest and unifies the team with realistic goals, happy comprimise, and minimizing surprises.",
      ],
      "Team Player": [
        `"A great team player", "helping attitude", and "very positive person to be around" are the words of my peers when they were evalutating me on "Team Building & Culture". My growth mindset and positive spirit are just a few ways I support my team.`,
        "I treat my peers with respect, provide support to my teammates when working through tough design problems, and am very receptive to feeback from the team.",
        "I run a department-wide bookclub! We're currently working through the newest edition of Effective Python in order to help us all improve our codebase.",
        "I regularly participate in our scrum ceremonies and run meetings, as well as serve in our criticals rotation."
      ],
      "Innovator": [
        "Creative problem solving is my bread and butter. Whether it's designing a way to audit requests to and responses from our API, or how to recursively flatten a nested dictionary for conversion into a CSV, I strive to find the most efficient way to solve the problem, while still keeping the end user top of mind.",
        "I'm considered a subject-matter expert for many aspects of our platform and I help other teams find solutions for integrating with our platform to solve their business problems.",
        "I've taken the lead on improving our team's workflows and encouraging thorough documentation, helping reduce code-review latency and allowing others to work independently and minimizing lost engineering time due redundent knowledge transfer meetings."
      ]
    }
  },
  HISTORY: {
    HEADER: "I'm a Software Engineer with a background in Filmmaking.",
    MAIN: [
      "2020: I'm currently building APIs and designing new domains for the Contracts and Billing team within Wayfair's International Supply Chain department. My team and I serve up GraphQL APIs that are written in Python, built in Docker, and deployed with Kubernetes. Other teams utilize our platform to get information with the ISC Domain. For example, they'll query our APIs for information regarding carrier and supplier contracts, and quotes and estimations for shipping containers.",
      "2019: I joined Wayfair just 6 weeks after the birth of my first child. I quickly learned the stack and joined the Asia Logistics team within the International Supply Chain department. While there, I built and improved on several different internal full-stack applications written in  React and PHP. These applications focused on increasing the efficiency of our operations team, and automating time-consuming logistics tasks.",
      "October 2018: Having dabbled in programming on-and-off throughout the previous couple years, I finally decided to pursue programming as a career. I started the General Assembly Software Engineering Immersive bootcamp in October 2018 and over the course of three months I wrote 3 full-stack applications while learning several languages and frameworks, and learning how to problem solve like a programmer.",
      "Pre-Bootcamp: Between May 2015 and October 2018 I worked as an editor and assistant editor in documentary film, corporate video, and network TV. As an assistant editor I was responsible for media management, project organization, quality control, and discovering new techniques and technologies to make the editor's life easier. As an editor, it was my job to find the story in the material I was given. Whether crafting a feature film or 30 second highlight, I needed to create a visually and emotionally compelling story."
    ],
    EVENTS: [
      {
        eventDate: "2019-06-03 08:00:00",
        eventTitle: "Tenure at Wayfair"
      },
      {
        eventDate: "2018-10-03 09:00:33",
        eventTitle: "Time since I began my engineering career"
      },
      {
        eventDate: "2017-04-23 17:30:47",
        eventTitle: "Time since Get Me Roger Stone was released"
      },
    ]
  },
  PERSONAL: {
    HEADER: "So, we're not robots.",
    MAIN: [
      "Almost everyone has a life outside of work. Below are a few of the things I do in my spare time:",
      "Play with my son. \u{1F476}",
      "Write software with my wife. \u{1F5A5}",
      "Analog and digital photography. \u{1F4F7}",
      "Piano, keyboards and songwriting. \u{266D}",
      "Hike and go camping. \u{1F3D5}",
      "Cook. \u{1F373}",
      "Build a tiny house. \u{1F3E0}",
      "Drink sake. 日本酒"
    ]
  },
  RESUME: {
    HEADER: "Download my resume with the link below.",
  },
  CONTACT: {
    HEADER: "Get in touch.",
    MAIN: [
      "You can reach me via any of the means below.",
    ],
    LINK: [
      {
        link: "mailto:natesuri@gmail.com?Subject=Hey Nate",
        text:  "natesuri [at] gmail [dot] com",
      },
      {
        link: "https://www.linkedin.com/in/natesuri",
        text: "LinkedIn"
      },
      {
        link: "https://github.com/Natesuri",
        text: "Github"
      }
    ]
  }
}
