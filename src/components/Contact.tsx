import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_m6dc9f5",
        "template_f6had6e",
        form.current,
        "CWYQsnVq5dP-feMbF"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      );
  };

  const contacts = [
    {
      name: "WhatApp",
      description: "+55 11 95983-3387",
      link: "https://wa.me/5511959833387?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10 " />,
    },
    {
      name: "Email",
      description: "dirleisc@outllok.com",
      link: "mailton:dirleisc@outlook.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Taubte - SP",
      description: "Vila Costa",
      link: "",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ];

  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou WhatsApp, com certeza iremos te
            ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                  required
                />
              </div>

              <div className="bm-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullname"
                    className="mb-2 block ps-4  font-headline font-semibold"
                  >
                    Seu Nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="fullname"
                    className="mb-2 block ps-4  font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="button flex items-center my-5 gap-2 text-blue-700  hover:text-gray-500"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  Enviar Mensagem
                </button>

                {error && (
                  <p className="mt-2">
                    Ocorreu um erro ao enviar a mensagem, tente novamente!
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border-dashed border border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline  font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_black"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
