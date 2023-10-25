import Mock from "../mock";

const database = {
  information: {
    name: "Donald Nyagwande",
    aboutContent:
      "\n" +
        "Experienced Java full-stack developer and Android programmer with over 5 years of successful delivery in fast-paced, secure settings. Proficient in Java, Kotlin, Gradle, XML, Spring Boot, JavaScript, HTML, CSS, and databases like MySQL, PostgreSQL, and MongoDB. Adept at working collaboratively with diverse cross-functional teams.",
    age: 30,
    phone: "641-819-2733",
    nationality: "Zimbabwean",
    language: "English, Shona",
    email: "donaldnyagwande@gmail.com",
    address: "21868 Farmington Road"+"\n"+ ",Farmington ,48336, MI",
    freelanceStatus: "Unavailable",
    socialLinks: {
      facebook: "https://www.facebook.com/dee.bronx.397/",
      twitter: "https://twitter.com",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/donaldnyagwande/",
      dribbble: "",
      github: "https://github.com/DonaldNyagwande",
    },
    brandImage: "/images/donald-profile-phot-old.jpg",
    aboutImage: "/images/donald-profile-photo-recent.png",
    aboutImageLg: "/images/donald-profile-photo-recent.png",
    cvfile: "/files/empty.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "Kotlin",
      value: 80,
    },
    {
      title: "Java",
      value: 95,
    },
    {
      title: "Mobile Development",
      value: 80,
    },
    {
      title: "Agile Development",
      value: 95,
    },
    {
      title: "MongoDB",
      value: 80,
    },
    {
      title: "Spring Security",
      value: 70,
    },
    {
      title: "AWS",
      value: 75,
    },
    {
      title: "SpringBoot",
      value: 90,
    },
    {
      title: "Docker",
      value: 70,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "jQuery",
      value: 60,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Android development",
      value: 95,
    },
    {
      title: "Jira",
      value: 95,
    },
    {
      title: "Kubernetes",
      value: 95,
    },
    {
      title: "JPA",
      value: 85,
    },
    {
      title: "PostgreSQL",
      value: 80,
    },
    {
      title: "MySQL",
      value: 75,
    },
    {
      title: "MsSQL",
      value: 70,
    },
    {
      title: "Hibernate",
      value: 80,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "WAA ",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2022 - Present",
        position:
          "Student-Pursuing Master In Science via distance education(completed on-campus courses) ",
        company:
          "Maharishi International University(currently looking for placement)",
        details:
          "Completed on campus courses which include Fundamental Programming Practices, Modern Programming Practices, Web Application Programming, Mobile Device Programming, Web Application Architecture, Enterprise Architecture, Software Architecture, DBMS, Cloud Computing, Algorithms. Academic Projects : MIU Course Registration: Created scalable RESTful API for student registration system, enabling students to select courses based on available seats, course prerequisite, and priority in each academic block. Implemented RabbitMQ, and Kafka for messaging and notifications. Used frameworks such as Spring, Hibernate, Spring Security, Postgres and Docker for database, Git for submitting to branch and Java as programming language.•	Technologies Used: RabbitMQ, Kafka, Spring, Hibernate, Spring Security, Postgres, Docker, Git, Java  ",
      },
      {
        id: 2,
        year: "2018 - 2022",
        position: "Junior Software Developer",
        company: "ITA Solutions",
        details:
          "• Developed a full stack website with the Microservices architecture. •\tDemonstrated expertise in utilizing J2EE technologies, such as Spring, Hibernate, XML, JUnit, Servlets, Struts, and Spring Boot, to create robust and scalable backend systems for web applications.•\tUsed Docker for containerization to encapsulate microservices with their dependencies and used Kubernetes for container orchestration to enable deployment, scaling, and service discovery. •\tImplemented a Config Server as a central repository for configuration data and register all the microservices to the server, so they can retrieve their configuration file/s. •\tProficiently integrated various web services, including SOAP and REST, to facilitate seamless communication and data exchange between applications.•\tUsed Kafka for asynchronous communication between microservices using topics and events.•\tImplemented the API gateway as a single point of entry for all client requests and integrated it with the Auth server to authenticate and authorize users using JWT tokens.• Utilized React and Electrode to build modern and responsive user interfaces, enhancing the user experience and interactivity of web applications. •\tTechnologies Used: Java, Spring Boot, Hibernate, JPA, Config Server, Jira and Confluence, Mockito, Microservices, Kibana, ElasticSearch, Logstash, GIT, Zipkin, Docker and Kubernetes, Kafka, API Gateway, React, Axios. PostgreSQL",
      },
      {
        id: 3,
        year: "2016 - 2017",
        position: "IT Intern",
        company: "Hamilton Insurance",
        details:
          "" },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2022 - Present",
        graduation: "Master of Science",
        university: "Maharishi International University",
        status: "Ongoing",
        details:
          "Master of Science In Computer Science with Specialization in Software Development. Key Courses: Fundamental Programming Practices, Modern Programming Practices, Web Application Programming, Mobile Device Programming, Web Application Architecture, Enterprise Architecture, Software Architecture, DBMS, Cloud Computing, Algorithms. These courses collectively equipped me with the knowledge and skills required to excel in the dynamic and ever-evolving field of computer science. ",
      },
      {
        id: 2,
        year: "2014 - 2018",
        graduation: "Bachelor of Science in Computer Science",
        university: "National University of Science and Technology",
        details:
          "Bachelors of Science in Computer Science. Key Courses : Software Engineering Concepts,Database Concepts, Programming and Program Design, Structured Programming, Web Designing,AI, Computer Security, OOP Programming, Computer Networks, Advanced Programming. My Bachelor of Science in Computer Science degree provided me with a solid foundation in computer science principles, programming languages, and software development methodologies. It equipped me with the skills to analyze complex problems, design efficient solutions, and create innovative software applications. The program fostered a deep understanding of algorithms, data structures, and database management, enabling me to tackle diverse technological challenges.",
      },
      {
        id: 3,
        year: "2012 - 2013",
        graduation: "Advanced Level Education",
        university: "St Mary's Magdalene",
        details:
          "Key Subjects:Mathematics ,Computer Science. Key Contributions: 1: Problem-Solving: Advanced math and computer science courses teach you how to approach complex problems methodically, analyze them, and develop effective solutions. This skill is invaluable for tackling software development challenges. 2: Analytical Thinking: The ability to dissect and understand intricate concepts in mathematics and computer science enables you to break down complex issues into manageable components, a critical skill in coding and system design. 3: Mathematical Modeling: Mathematics courses often involve creating mathematical models to represent real-world situations. This skill can be applied to designing algorithms and making data-driven decisions in computer science. 4: Logical Reasoning: Computer science require logical thinking and reasoning, which is essential for programming and software development. ",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+1 641 819 2733"],
    emailAddress: ["donaldnyagwande@gmail.com", "nyagwandedonald@gmail.com"],
    address: "21868 Farmington Road, Farmington, Michigan, 48336",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
