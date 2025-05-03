import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] mb-16 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about2.jpg')", backgroundPosition: "center 10%", backgroundSize: "cover" }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Más de 20 años cuidando la salud visual de nuestros clientes con profesionalismo y dedicación
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Nuestra Misión</h2>
          <p className="text-lg text-muted-foreground">
            En Óptica RH, nos dedicamos a proporcionar soluciones visuales de alta calidad que mejoren la vida de
            nuestros clientes. Combinamos tecnología avanzada con un servicio personalizado para garantizar que cada
            persona reciba la atención que merece.
          </p>
          <p className="text-lg text-muted-foreground">
            Nos esforzamos por educar a nuestros clientes sobre la importancia del cuidado visual y ofrecer productos
            que no solo corrijan la visión, sino que también reflejen el estilo personal de cada individuo.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Nuestra Visión</h2>
          <p className="text-lg text-muted-foreground">
            Aspiramos a ser reconocidos como líderes en el sector óptico, destacándonos por nuestra excelencia en el
            servicio, la calidad de nuestros productos y nuestro compromiso con la innovación.
          </p>
          <p className="text-lg text-muted-foreground">
            Buscamos expandir nuestra presencia manteniendo siempre los valores que nos definen: honestidad,
            profesionalismo y un genuino interés por el bienestar visual de nuestros clientes.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-muted p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Confía en Expertos para tu Salud Visual</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          En Óptica RH estamos comprometidos con tu bienestar visual. Agenda una cita hoy mismo y descubre por qué somos
          la opción preferida de miles de clientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Contactar</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/eye-care">Servicios</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
