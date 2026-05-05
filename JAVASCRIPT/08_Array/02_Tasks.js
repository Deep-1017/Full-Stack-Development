const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  pincode: 123456,

  address: {
    city: "New York",
    state: "NY",
    country: "USA",

    addLine: {
      line1: "123 Main St",
      line2: "Apt 4B",
    },

    geoLocations: [
      {
        type: "home",
        coordinates: { lat: 40.7128, lng: -74.006 },
      },
      {
        type: "office",
        coordinates: { lat: 40.758, lng: -73.9855 },
      },
    ],
  },

  contactNumbers: [
    {
      type: "personal",
      number: "123-456-7890",
    },
    {
      type: "work",
      number: "987-654-3210",
    },
  ],

  skills: [
    "JavaScript",
    "React",
    "Node.js",
    {
      backend: ["Express", "MongoDB"],
    },
  ],

  workExperience: [
    {
      company: "TechCorp",
      role: "Frontend Developer",
      years: 3,
      projects: [
        {
          name: "E-commerce Platform",
          techStack: ["React", "Redux", "Tailwind"],
        },
        {
          name: "Admin Dashboard",
          techStack: ["Vue", "Firebase"],
        },
      ],
    },
    {
      company: "InnovateX",
      role: "Full Stack Developer",
      years: 2,
      projects: [
        {
          name: "SaaS CRM",
          techStack: ["MERN", "Docker"],
        },
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech",
      specialization: "Computer Science",
      year: 2018,
      certifications: ["AWS Certified Developer", "Google Cloud Associate"],
    },
  ],

  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    themes: ["dark", "light", "system"],
  },

  activityLogs: [
    {
      date: "2026-05-01",
      actions: ["login", "viewed dashboard", "logout"],
    },
    {
      date: "2026-05-03",
      actions: ["login", "updated profile", "added project"],
    },
  ],
};


console.log(user.skills[3].backend[1]);

console.log(user.workExperience[0].projects[0].techStack[2]);
