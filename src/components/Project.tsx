import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Project() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Empresa de limpeza residencial e comercial.",
      image: "public/ideal-cleaning.png",
      link: "https://idealcleaningandservices.com",
      colSpan: "col-sapn-1",
    },
    {
      title: "Projeto 2",
      description:
        "Empresa de reformas residencial e comercial, trabalhos com revestimentos de azulejos",
      image: "public/ideal-tile.png",
      link: "https://idealtileinc.com",
      colSpan: "col-sapn-1 md:col-span-2",
    },
    {
      title: "Projeto 3",
      description: "Descrição do  projeto 3",
      image:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdlYiUyMHNpdGVzfGVufDB8fDB8fHww",
      link: "#",
      colSpan: "col-sapn-1",
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4",
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwc2l0ZXN8ZW58MHx8MHx8fDA%3D",
      link: "#",
      colSpan: "col-sapn-1",
    },
    {
      title: "Projeto 5",
      description: "Descrição do projeto 5",
      image:
        "https://images.unsplash.com/file-1723602894256-972c108553a7image?w=416&dpr=2&auto=format&fit=crop&q=60",
      link: "#",
      colSpan: "col-sapn-1",
    },
  ];
  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-handwriting text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-display text-4xl">Portfólio</span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos meus projetos pessoais e projetos que já realizei ao
            longo da minha trajetória como desenvolvedor!
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-bg-blue-400/10"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              <div
                className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg
               bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                <h4 className="font-display text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="mg-4 text-sm">{project.description}</p>
                <a href={project.link} target="_blank">
                  <HiArrowTopRightOnSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
