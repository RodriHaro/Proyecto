import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, Eye, Glasses, Heart, Shield, PenToolIcon as Tool, Users } from "lucide-react"

export default function ServicesPage() {
  // Servicios principales
  const mainServices = [
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Exámenes Visuales",
      description:
        "Evaluaciones completas de la salud visual realizadas por optometristas certificados utilizando tecnología de vanguardia para un diagnóstico preciso.",
      features: [
        "Examen de agudeza visual",
        "Medición de la presión ocular",
        "Evaluación de la salud de la retina",
        "Detección temprana de patologías",
      ],
    },
    {
      icon: <Glasses className="h-10 w-10" />,
      title: "Contactología",
      description:
        "Especialistas en la adaptación de todo tipo de lentes de contacto, desde los convencionales hasta los más especializados para casos complejos.",
      features: [
        "Lentes de contacto blandos y rígidos",
        "Lentes tóricos para astigmatismo",
        "Lentes multifocales",
        "Lentes para queratocono",
      ],
    },
    {
      icon: <Tool className="h-10 w-10" />,
      title: "Taller de Armado y Calibrado",
      description:
        "Contamos con un taller propio equipado con la última tecnología para garantizar la precisión en el montaje y ajuste de sus lentes.",
      features: [
        "Montaje de alta precisión",
        "Ajuste personalizado de armazones",
        "Reparaciones profesionales",
        "Entrega rápida",
      ],
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Servicio de Mantenimiento",
      description:
        "Cuidamos de sus lentes y armazones para prolongar su vida útil y mantener una visión óptima con nuestros servicios de mantenimiento.",
      features: [
        "Limpieza profesional ultrasónica",
        "Ajustes y alineación",
        "Reemplazo de tornillos y plaquetas",
        "Pulido de rayones en lentes",
      ],
    },
  ]

  // Servicios adicionales
  const additionalServices = [
    {
      title: "Tratamientos Especiales para Lentes",
      description:
        "Ofrecemos una amplia gama de tratamientos para mejorar el rendimiento y durabilidad de sus lentes, adaptándose a sus necesidades específicas.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Antirreflejo premium",
        "Fotocromático de última generación",
        "Protección luz azul",
        "Tratamiento hidrofóbico",
      ],
    },
    {
      title: "Lentes de Sol con Graduación",
      description:
        "Combine estilo y funcionalidad con nuestras opciones de lentes de sol graduados, disponibles en una amplia variedad de marcas y diseños.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Protección UV completa", "Lentes polarizados", "Marcas premium", "Adaptados a su graduación"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services.jpg')", backgroundPosition: "center 74%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Soluciones integrales para el cuidado de su salud visual con la más alta calidad y tecnología
          </p>
        </div>
      </div>

      {/* Introducción */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Cuidado Visual Integral</h2>
        <p className="text-lg text-muted-foreground">
          En Óptica RH nos dedicamos a proporcionar servicios ópticos completos y personalizados. Nuestro equipo de
          profesionales altamente capacitados utiliza tecnología de vanguardia para garantizar la mejor atención para su
          salud visual.
        </p>
      </div>

      {/* Servicios Principales */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      {/* Por qué elegirnos */}
      <div className="mb-20 bg-muted rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Óptica RH?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="h-10 w-10" />,
              title: "Equipo Profesional",
              description:
                "Optometristas certificados y personal altamente capacitado para atender todas sus necesidades.",
            },
            {
              icon: <Clock className="h-10 w-10" />,
              title: "Atención Rápida",
              description:
                "Valoramos su tiempo. Ofrecemos citas puntuales y servicios eficientes sin comprometer la calidad.",
            },
            {
              icon: <Heart className="h-10 w-10" />,
              title: "Atención Personalizada",
              description: "Cada paciente es único. Adaptamos nuestros servicios a sus necesidades específicas.",
            },
            {
              icon: <Shield className="h-10 w-10" />,
              title: "Garantía de Calidad",
              description:
                "Respaldamos todos nuestros productos y servicios con garantías que aseguran su satisfacción.",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-background rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "¿Con qué frecuencia debo realizar un examen visual?",
              answer:
                "Recomendamos realizar un examen visual completo al menos una vez al año. Sin embargo, si experimenta cambios en su visión o tiene condiciones específicas, podría necesitar revisiones más frecuentes.",
            },
            {
              question: "¿Cuánto tiempo tarda la entrega de lentes nuevos?",
              answer:
                "El tiempo de entrega varía según el tipo de lentes y tratamientos seleccionados. En general, los lentes estándar están listos en 3-5 días hábiles, mientras que los lentes especiales pueden tomar hasta 10 días.",
            },
            {
              question: "¿Ofrecen garantía en sus productos?",
              answer:
                "Sí, todos nuestros productos cuentan con garantía. Los armazones tienen garantía de 1 año contra defectos de fabricación, y los lentes tienen garantías específicas según el tipo y tratamientos seleccionados.",
            },
            {
              question: "¿Puedo usar mi seguro médico para los servicios?",
              answer:
                "Trabajamos con las principales aseguradoras y planes de visión. Le recomendamos verificar su cobertura antes de su cita para confirmar los beneficios disponibles.",
            },
          ].map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
