import { HiDownload } from "react-icons/hi";
import FotoPerfil from "../../public/perfil.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div
          className="basis-1/2 text-white flex  justify-center left-2 -top-4 h-24  
        rounded-lg bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"
        >
          <img src={FotoPerfil} className="border-3 h-130 rounded-4xl" alt="" />
        </div>
        <div className="basis-1/2 my-20 ml-40">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-display block text-3xl text-center md:text-left">
              Olá, eu sou o
            </span>
            <span className="font-handwriting text-5xl font-semibold">
              Dirlei
            </span>
            <span className="font-handwriting text-5xl font-light text-blue-400">
              {" "}
              Costa
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1  w-12 rounded-full bg-blue-800"></div>
            Desenvolvedor React.js Front-end
          </h2>
          <p className="text-gray-600 my-6 text-center md:text-left">
            "Desenvolvedor Front-End com graduacão em Análise e Desenvolvimento
            de Sistemas, formação em Desenvolvimento Web Full Stack e
            experiência prática desde 2023. Apaixonado por tecnologias modernas,
            como React.js, TypeScript e JavaScript, Node.js e pela criação de
            interfaces interativas e responsivas. Tenho experiência em projetos
            individuais e colaborativos, aplicando metodologias ágeis para
            entregar soluções eficientes e escaláveis.
          </p>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="" className="font-bold text-white">
              Entrar em contato!
            </a>
            <span className="italic text-gray-500 my-6">
              <a
                href="#"
                className="button hover:text-gray-900 flex items-center gap-2"
              >
                <HiDownload />
                Baixe meu CV
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
