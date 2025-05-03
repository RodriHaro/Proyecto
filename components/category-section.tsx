import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function CategorySection() {
  const categories = [
    {
      name: "ARMAZONES",
      image: "/productos/armazon-recife.png",
      href: "/products/men",
    },
    {
      name: "LENTES DE SOL",
      image: "/productos/sol-jacobs.png",
      href: "/products/women",
    },
    {
      name: "LENTES DE CONTACTO",
      image: "/productos/lentes-contacto.png",
      href: "/products/accessories",
    },
  ]

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="overflow-hidden h-[300px] transition-all hover:shadow-lg">
              <CardContent className="p-0 h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
