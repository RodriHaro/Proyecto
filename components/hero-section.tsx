"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

// Datos de ejemplo para el carrusel
const slides = [
  {
    id: 1,
    image: "/hero-6.jpg",
    title: "SEE BEYOND",
    promos: ["3 CUOTAS SIN INTERÉS", "15% OFF POR TRANSFERENCIA", "ENVÍOS A TODO EL PAÍS"],
  },
  {
    id: 2,
    image: "/hero-3.jpg",
    title: "STYLE VISION",
    promos: ["NUEVA COLECCIÓN 2023", "GARANTÍA DE 2 AÑOS", "DISEÑOS EXCLUSIVOS"],
  },
  {
    id: 3,
    image: "/hero-1.jpg",
    title: "LOOK SHARP",
    promos: ["PROTECCIÓN UV COMPLETA", "MARCOS SOSTENIBLES", "DISEÑO ITALIANO"],
  },
  {
    id: 4,
    image: "/hero-5.jpg",
    title: "CLEAR VIEW",
    promos: ["LENTES POLARIZADOS", "ENVÍO EXPRESS 24H", "ASESORÍA PERSONALIZADA"],
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Función para ir al siguiente slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    // Restablecer el estado de transición después de que termine la animación
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  // Función para ir al slide anterior
  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    // Restablecer el estado de transición después de que termine la animación
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    // Restablecer el estado de transición después de que termine la animación
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Obtener el slide actual
  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] bg-neutral-200 overflow-hidden">
      {/* Imágenes del carrusel con transición */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            filter: "grayscale(20%)",
            backgroundPosition: "center 20%"
          }}
        />
      ))}

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-20 z-20"></div>

      {/* Contenido del hero */}
      <div className="relative h-full flex items-center z-30">
        <div className="container mx-auto px-4">
          {/* Versión móvil - estructura de una columna */}
          <div className="md:hidden flex flex-col h-full justify-between py-8">
            {/* Título en la parte superior para móvil */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white text-center">{slide.title}</h2>
            </div>

            {/* Promociones en el centro para móvil */}
            <div className="space-y-4 text-white">
              {slide.promos.map((promo, index) => (
                <div key={index} className="space-y-1 text-center">
                  <h3 className="text-lg sm:text-xl font-light tracking-wider">{promo}</h3>
                  <div className="w-12 h-0.5 bg-white mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Espacio para mantener la distribución vertical */}
            <div className="mt-8"></div>
          </div>

          {/* Versión escritorio - estructura de tres columnas */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-center h-full">
            {/* Promociones (izquierda) */}
            <div className="space-y-6 text-white transform -translate-x-32">
              {slide.promos.map((promo, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-light tracking-wider">{promo}</h3>
                  <div className="w-12 h-0.5 bg-white"></div>
                </div>
              ))}
            </div>

            {/* Espacio central para imagen (se muestra en el fondo) */}
            <div className="hidden md:block">
              {/* Este espacio queda vacío intencionalmente para mantener el layout */}
            </div>

            {/* Eslogan (derecha) */}
            <div className="flex justify-end items-end h-full pb-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                {slide.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Controles del carrusel - Adaptados para móvil */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 sm:px-4 z-40">
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-white rounded-full hover:bg-black/60 w-8 h-8 sm:w-10 sm:h-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-white rounded-full hover:bg-black/60 w-8 h-8 sm:w-10 sm:h-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      {/* Indicadores de slider - Mejorados para móvil */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

const HeroSectionImageOnly: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="relative h-[80vh] sm:h-[100vh] w-screen overflow-hidden ">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: "center 5%", backgroundSize: "cover" }}
      />
    </div>
  );
};

export default HeroSectionImageOnly;
