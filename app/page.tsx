import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import HeroSectionImageOnly, { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <div className="container px-4 py-12 mx-auto space-y-16">
        <FeaturedProducts /> 
        <div className="flex justify-center mt-4">
          <Button asChild size="lg">
            <Link href="/products">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Ver más productos
            </Link>
          </Button>
        </div>
      </div>
      <HeroSectionImageOnly imageUrl="/hero-2.jpg" />
      <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <h2 className="text-3xl font-bold tracking-tight">¿Listo para renovar tu estilo?</h2>
          <p className="max-w-[600px] text-muted-foreground">
            Descubre todos nuestros productos y encontra el modelo que te define.
          </p>
        </div>
        <div className="container px-4 mt-12  mb-8">
        <CategorySection />
        </div>
        {/* Lo que dicen nuestros clientes */}
        <div className="container px-4 mt-12 mb-8 pb-0">
          <h2 className="text-3xl font-bold text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "El servicio de mantenimiento es excelente. Mis lentes quedaron como nuevos y el personal fue muy amable y profesional.",
                author: "María Rodríguez",
                role: "Cliente desde 2018",
              },
              {
                quote:
                  "La adaptación de mis lentes de contacto fue perfecta. El optometrista fue muy paciente explicándome todo el proceso de cuidado.",
                author: "Carlos Méndez",
                role: "Cliente desde 2020",
              },
              {
                quote:
                  "El taller de armado hizo un trabajo impecable con mis lentes. La precisión y rapidez del servicio superaron mis expectativas.",
                author: "Laura Sánchez",
                role: "Cliente desde 2019",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-muted">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <WhatsAppButton />
    </div>
    
  )
}
