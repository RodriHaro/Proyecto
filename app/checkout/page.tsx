"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  if (cartItems.length === 0 && !isComplete) {
    return (
      <div className="container px-4 py-12 mx-auto text-center">
        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
        <p className="mt-4">Necesitas agregar artículos a tu carrito antes de proceder al pago.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Explorar productos</Link>
        </Button>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="container px-4 py-12 mx-auto max-w-md">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">¡Pedido confirmado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Gracias por tu compra. Tu pedido ha sido confirmado y será enviado pronto.</p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-medium">Pedido #12345</p>
              <p className="text-sm text-muted-foreground">Se ha enviado un correo de confirmación a tu dirección de correo electrónico.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Volver al inicio</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      clearCart()
    }, 2000)
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/cart">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver al carrito
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Finalizar compra</h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-medium mb-4">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Dirección de envío</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input id="address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apartment">Departamento, piso, etc. (opcional)</Label>
                    <Input id="apartment" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Provincia</Label>
                      <Select defaultValue="">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar provincia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
                          <SelectItem value="catamarca">Catamarca</SelectItem>
                          <SelectItem value="chaco">Chaco</SelectItem>
                          <SelectItem value="chubut">Chubut</SelectItem>
                          <SelectItem value="cordoba">Córdoba</SelectItem>
                          <SelectItem value="corrientes">Corrientes</SelectItem>
                          <SelectItem value="entre-rios">Entre Ríos</SelectItem>
                          <SelectItem value="formosa">Formosa</SelectItem>
                          <SelectItem value="jujuy">Jujuy</SelectItem>
                          <SelectItem value="la-pampa">La Pampa</SelectItem>
                          <SelectItem value="la-rioja">La Rioja</SelectItem>
                          <SelectItem value="mendoza">Mendoza</SelectItem>
                          <SelectItem value="misiones">Misiones</SelectItem>
                          <SelectItem value="neuquen">Neuquén</SelectItem>
                          <SelectItem value="rio-negro">Río Negro</SelectItem>
                          <SelectItem value="salta">Salta</SelectItem>
                          <SelectItem value="san-juan">San Juan</SelectItem>
                          <SelectItem value="san-luis">San Luis</SelectItem>
                          <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
                          <SelectItem value="santa-fe">Santa Fe</SelectItem>
                          <SelectItem value="santiago-del-estero">Santiago del Estero</SelectItem>
                          <SelectItem value="tierra-del-fuego">Tierra del Fuego</SelectItem>
                          <SelectItem value="tucuman">Tucumán</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Código postal</Label>
                      <Input id="zip" required />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Método de pago</h2>
                <Tabs defaultValue="card">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="card">Tarjeta de crédito</TabsTrigger>
                    <TabsTrigger value="paypal">Mercado Pago</TabsTrigger>
                    <TabsTrigger value="transfer">Transferencia bancaria</TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                      <Input id="cardName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número de tarjeta</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Fecha de expiración</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="pt-4">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="mb-4">Serás redirigido a Mercado Pago para completar tu compra de forma segura.</p>
                      <Button type="button" className="w-full">
                      Continuar con Mercado Pago
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="transfer" className="pt-4">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Transferencia bancaria</h3>
                        <p className="text-sm text-muted-foreground">
                          Realiza una transferencia a nuestra cuenta bancaria. Tu pedido será procesado una vez que se
                          confirme el pago.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Datos bancarios:</h3>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-medium">Banco:</span> Banco Galicia
                          </p>
                          <p>
                            <span className="font-medium">Titular:</span> Óptica RH S.A.
                          </p>
                          <p>
                            <span className="font-medium">Cuenta:</span> 0123-4567-89
                          </p>
                          <p>
                            <span className="font-medium">CBU:</span> 0000000000000000000000000
                          </p>
                          <p>
                            <span className="font-medium">Referencia:</span> Tu número de pedido
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Envíanos tu comprobante</p>
                          <p className="text-muted-foreground">Envía tu comprobante de pago a pagos@opticarh.com</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-medium mb-4">Método de envío</h2>
                <RadioGroup defaultValue="standard" className="space-y-3">
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1">
                      <div className="flex justify-between">
                        <span>Envío estándar</span>
                        <span>Envío gratuito</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Entrega en 5-7 días hábiles</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1">
                      <div className="flex justify-between">
                        <span>Envío exprés</span>
                        <span>$9.99</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Entrega en 2-3 días hábiles</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="lg:hidden">
                <OrderSummary cartItems={cartItems} subtotal={subtotal} />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Procesando..." : "Realizar pedido"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="hidden lg:block">
          <OrderSummary cartItems={cartItems} subtotal={subtotal} />
        </div>
      </div>
    </div>
  )
}

function OrderSummary({ cartItems, subtotal }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{item.quantity || 1} ×</span>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Envío</span>
          <span>Envío gratuito</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
