"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"

// Datos de ejemplo para lentes de sol y visión
const products = [
  {
    id: 1,
    name: "Lentes de Sol Dorados",
    price: 129.99,
    image: "/productos/sol-dorado.png",
    category: "lentes de sol",
    isNew: true,
    description:
      "Lentes de sol con diseño dorado elegante, ideales para proteger tus ojos con estilo.",
    details: {
      material: "Metal y policarbonato",
      fit: "Unisex",
      care: "Limpiar con paño suave",
      origin: "Fabricado en Italia",
    },
    sizes: ["Único"],
    colors: ["Dorado", "Negro"],
    images: [
      "/productos/sol-dorado.png",
      "/productos/sol-lente-azul.png",
      "/productos/sol-lente-gris.png",
    ],
  },
  {
    id: 2,
    name: "Lentes de Visión Rectangulares",
    price: 89.99,
    image: "/productos/armazon-baker.png",
    category: "lentes de visión",
    isNew: false,
    description:
      "Lentes de visión con armazón rectangular, perfectos para un look profesional y moderno.",
    details: {
      material: "Acetato y metal",
      fit: "Ajustable",
      care: "Evitar exposición prolongada al sol",
      origin: "Fabricado en Japón",
    },
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Gris", "Transparente"],
    images: [
      "/productos/armazon-baker.png",
      "/productos/armazon-gris.png",
      "/productos/armazon-negro-mate.png",
    ],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)

  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="container px-4 py-12 mx-auto text-center">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <p className="mt-4">El producto que buscas no existe.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Volver a Productos</Link>
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return

    addToCart({
      ...product,
      quantity,

    })
  }

  return (
    <div className="container px-4 py-12 mx-auto mt-8">
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-foreground">
          Productos
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.isNew && <Badge className="absolute top-4 right-4">Nuevo</Badge>}
          </div>

          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-20 overflow-hidden rounded-md border ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Tamaño</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="min-w-[60px]"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              {!selectedSize && <p className="text-sm text-muted-foreground mt-2">Por favor selecciona un tamaño</p>}
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    className="min-w-[80px]"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
              {!selectedColor && <p className="text-sm text-muted-foreground mt-2">Por favor selecciona un color</p>}
            </div>

            <div>
              <h3 className="font-medium mb-2">Cantidad</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full" disabled={!selectedSize || !selectedColor} onClick={handleAddToCart}>
            <ShoppingCart className="h-5 w-5 mr-2" />
            Agregar al carrito
          </Button>

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Detalles
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Envío y devoluciones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Material</h4>
                  <p className="text-sm text-muted-foreground">{product.details.material}</p>
                </div>
                <div>
                  <h4 className="font-medium">Ajuste</h4>
                  <p className="text-sm text-muted-foreground">{product.details.fit}</p>
                </div>
                <div>
                  <h4 className="font-medium">Cuidado</h4>
                  <p className="text-sm text-muted-foreground">{product.details.care}</p>
                </div>
                <div>
                  <h4 className="font-medium">Origen</h4>
                  <p className="text-sm text-muted-foreground">{product.details.origin}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="space-y-4 pt-4">
              <div>
                <h4 className="font-medium">Envío</h4>
                <p className="text-sm text-muted-foreground">
                  Envío estándar gratuito en pedidos superiores a $100. Entrega en 3-5 días hábiles.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Devoluciones</h4>
                <p className="text-sm text-muted-foreground">
                  Aceptamos devoluciones dentro de los 30 días posteriores a la entrega. Los artículos deben estar sin usar, sin lavar y con las etiquetas originales.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
