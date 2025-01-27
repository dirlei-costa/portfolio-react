import { HiCommandLine, HiComputerDesktop } from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimentos de sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sitemas",
      description: "Desenvolvimentos de sistemas e APIs REST com Node.js",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="h-0.5  w-full mb-20 rounded-full bg-gray-300"></div>

      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600"></p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-handwriting text-3xl">Meus</span>
          <span className="font-display text-4xl">Servicos</span>
        </h2>
        <p className="text-sm text-gray-600">
          Profissionalmente, trabalho com tecnologias como React.js, TypeScript
          e JavaScript, desenvolvendo interfaces responsivas e interativas que
          entregam não apenas estética, mas também desempenho e usabilidade.
          Tenho experiência em projetos individuais e em equipe, onde aplico
          metodologias ágeis para garantir eficiência e resultados escaláveis.
          Minha abordagem é sempre baseada em código limpo, boas práticas de
          desenvolvimento e um compromisso contínuo com a evolução técnica.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        {services.map((service, index) => (
          <div
            className="basis-1/2 roundend-lg bg-blue-700 p-4 text-white"
            key={`service-${index}`}
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
