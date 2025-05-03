"use client";

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const products = [
  {
    id: 1,
    name: "Armazón Baker",
    price: 49.99,
    image: "/productos/armazon-baker.png",
    category: "men",
    isNew: true,
  },
  {
    id: 2,
    name: "Armazón Ed",
    price: 59.99,
    image: "/productos/armazon-ed.png",
    category: "men",
    isNew: false,
  },
  {
    id: 3,
    name: "Armazón Gris",
    price: 69.99,
    image: "/productos/armazon-gris.png",
    category: "men",
    isNew: true,
  },
  {
    id: 4,
    name: "Armazón Maverick",
    price: 79.99,
    image: "/productos/armazon-maverick.png",
    category: "men",
    isNew: false,
  },
  {
    id: 5,
    name: "Armazón Negro Mate",
    price: 89.99,
    image: "/productos/armazon-negro-mate.png",
    category: "men",
    isNew: true,
  },
  {
    id: 6,
    name: "Armazón Negro Rojo",
    price: 99.99,
    image: "/productos/armazon-negro-rojo.png",
    category: "men",
    isNew: false,
  },
  {
    id: 7,
    name: "Armazón Recife",
    price: 109.99,
    image: "/productos/armazon-recife.png",
    category: "men",
    isNew: true,
  },
  {
    id: 8,
    name: "Armazón Vancouver",
    price: 119.99,
    image: "/productos/armazon-vancouver.png",
    category: "men",
    isNew: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col items-center text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">PRODUCTOS DESTACADOS</h2>
        <p className="text-muted-foreground max-w-[600px]">Nuestros productos mas destacados, elegidos por vos</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <Card className="overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.isNew && <Badge className="absolute top-2 right-2">Nuevo</Badge>}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <p className="font-bold mt-1">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm" onClick={() => addToCart(product)}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
