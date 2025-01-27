import { HiAcademicCap } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";

export default function Skills() {
  const educations = [
    {
      name: "Curso de Desenvolvimento Web Full Stack",
    },
    {
      name: "Graduacao em Analise e Desenvolvimento de Sistemas",
    },
  ];
  const skills = [
    {
      name: "HTML/CSS",
      icon: "public/html.svg",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: "public/javascript.svg",
      level: 75,
    },
    {
      name: "React.js",
      icon: "public/react.svg",
      level: 90,
    },
    {
      name: "Node.js",
      icon: "public/nodejs.svg",
      level: 90,
    },
    {
      name: "Figma",
      icon: "public/figma.svg",
      level: 80,
    },
    {
      name: "MySQL",
      icon: "public/mysql.svg",
      level: 80,
    },
  ];
  return (
    <section className="roudend-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-18">
        <div className="relative mb-14 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-handwriting text-3xl font-semibold">
              Formações &
            </span>
            <span className="font-display text-4xl text-blue-800">Skills</span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Front-End | React.js | Javascript | TypeScript | API Rest | HTML5 |
            CSS3 | Bootstrap | Styled-components | Material UI | Responsive Web
            Design | Tailwind | Redux | Context API | Git | Github
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-bg-blue-400/10"></div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 md:flex-row" />
              Eduçacão
            </h3>

            {educations.map((educations, index) => (
              <div
                key={`{education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {educations.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 md:flex-row" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headline text-gray-900">
                      {skill.name}
                    </h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
