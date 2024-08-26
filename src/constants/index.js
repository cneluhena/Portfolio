import treasury from "../assets/projects/treasury.jpg";
import banking from "../assets/projects/banking.jpeg";
import plate from "../assets/projects/Plate.png";
import pl from "../assets/projects/pl.jpg";
import sms from "../assets/projects/sms.png";




export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated third-year undergraduate student specializing in data science, with a strong passion for full-stack development. My expertise spans front-end technologies like React and Next.js, as well as back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I have experience with Python, which I leverage for data-driven solutions. I am committed to applying my diverse skill set to create scalable, efficient web applications that enhance user experiences and contribute to business success.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Freelance Web Scraper",
    company: "Upwork",
    description: `Worked as a freelance web scraper and built scraping bots using Selenium and Beautifulsoup`,
    technologies: ["Python", "Selenium", "BeautifulSoup"],
  }
];

export const PROJECTS = [
  {
    title: "TreasuryTracker",
    image: treasury,
    description:
      "A web application designed to help users manage their Treasury Bills and Treasury Bonds. The app features advanced forecasting of future interest rates for government securities and provides personalized investment strategies to optimize returns",
    technologies: ["React", "Node.js", "MongoDB", "Python"],
    source:"https://github.com/cneluhena/TreasuryTracker"
  },
  {
    title: "Bank Management System",
    image: banking,
    description:
     "Developed a comprehensive Bank Management System capable of handling user transactions, generating detailed reports, and managing branch and employee operations.",
    technologies: ["Next.js", "Node.js", "MySql"],
    source:"https://github.com/Sadeesha-Sath/backend_express"
  },
  {
    title: "Sri Lankan License Plate Detector and Reader",
    image: plate,
    description:
      "Developed a computer vision application capable of detecting and reading license plates from images. Utilized YOLOv8 for model training, with the ability to separately identify the number and letter sections of the plate.",
    technologies: ["Python", "OpenCV", "EasyOCR", "YoloV8"],
    source:"https://github.com/cneluhena/Sri-Lankan-Number-Plate-Recognizer"
  },
  {
    title: "Student Management System",
    image: sms,
    description:
      "Developing a student management system for a private institute, designed to streamline student registration and payment processing. Currently planning to implement an attendance tracking feature for enhanced management",
    technologies: ["React", "SpringBoot", "MongoDB"],
    source:"https://github.com/cneluhena/Student-Management-System"
  },
  {
    title: "RPAL",
    image: pl,
    description: "Developed an interpreter for the RPAL programming language, including the implementation of a lexical analyzer, parse tree, abstract syntax tree, and control stack environment machine.",
    technologies: ["Python"],
    source:"https://github.com/cneluhena/RPAL-Interpreter"
  },
];

export const CONTACT = {
  address: "595/1, 3rd Kurana, Colombo Road, Negombo",
  phoneNo: "+94713805613",
  email: "malindun.21@cse.mrt.ac.lk",
};
