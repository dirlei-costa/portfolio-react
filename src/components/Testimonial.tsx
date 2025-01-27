import { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      image: "public/testimonial1.jpg",
      name: "Anna Souza",
      comment: "Este é o melhor serviço que já usei! Altamente recomendado",
    },

    {
      image: "public/testimonial2.jpg",
      name: "João Paulo",
      comment:
        "Estou extremamente satisfeito com o produto. Experiência fantástica.",
    },

    {
      image: "public/testimonial3.jpg",
      name: "Cezar Augusto",
      comment:
        "Qualidade incrível! Definitivamente usarei este serviço novamente.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-18">
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevTestimonial}
            className="text-gray-600 hover:text-gray-900"
          >
            &#8249; Anterior
          </button>
          <div className="flex justify-center items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 italic">
                {testimonials[currentIndex].comment}
              </p>
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="text-gray-600 hover:text-gray-900"
          >
            Proximo &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
