"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-200 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Menú móvil */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Inicio
              </Link>
              <Link href="/about" className="text-lg font-medium">
                Nosotros
              </Link>
              <Link href="/products/lentes-de-sol" className="text-lg font-medium">
                Lentes de sol
              </Link>
              <Link href="/products/armazones" className="text-lg font-medium">
                Armazones
              </Link>
              <Link href="/eye-care" className="text-lg font-medium">
                Servicios
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ml-4 md:ml-0">
          <span className="text-xl font-bold uppercase tracking-wider">Óptica RH</span>
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/products/lentes-de-sol"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Lentes de sol
          </Link>
          <Link
            href="/products/armazones"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Armazones
          </Link>
          <Link
            href="/eye-care"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium uppercase tracking-wider hover:text-neutral-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Búsqueda y acciones */}
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-[200px] rounded-none border-b border-black bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-0 hover:bg-transparent"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Cerrar búsqueda</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
          )}

          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Cuenta</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Carrito</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
