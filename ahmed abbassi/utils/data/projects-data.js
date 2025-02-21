import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Donation Platform",
    description:
      "I implemented RESTful APIs using Nest.js to enhance backend functionality, ensuring secure and efficient transactions. Collaborating closely with stakeholders, I defined project requirements to align the platform with user needs. Additionally, I developed user profiles and dashboards to track donations and project progress, fostering transparency and engagement.",
    tools: [
      "TypeScript",
      "React",
      "TypeORM",
      "Next.js",
      "Socket.io",
      "NestJs",
      "PostgreSQL",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Mobile App",
    description:
      "I spearheaded the development of a mobile app for a barber shop, enabling clients to reserve appointments and providing barbers with the ability to accept or reject reservations. The application was implemented using React Native Expo, ensuring cross-platform compatibility and a seamless user experience. I integrated features allowing clients to view past appointments and barbers to efficiently manage bookings, significantly improving overall business operations. For backend services, I utilized Firebase for authentication, database management, and real-time updates.",
    tools: [
      "React Native Expo",
      "Socket.io",
      "Push Notifications",
      "Firebase",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Language Management System",
    description:
      "I implemented RESTful APIs using Nest.js to enhance backend functionality, ensuring seamless communication between frontend and backend systems. Collaborating with cross-functional teams, I gathered requirements, designed the system architecture, and delivered a robust and scalable solution. Additionally, I designed and integrated a real-time chat feature within the language management system, facilitating communication and collaboration among users.",
    tools: [
      "NextJS",
      "NestJS",
      "Formik",
      "Bootstrap",
      "SCSS",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "Gemini API",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
