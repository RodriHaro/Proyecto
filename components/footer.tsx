import Link from "next/link"
import { SiX, SiInstagram, SiFacebook } from "react-icons/si"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Optica RH</h3>
            <p className="text-sm text-muted-foreground">
            Descubrí el mundo con la mejor visión.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <SiX className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/men" className="text-muted-foreground hover:text-foreground">
                  Lentes de sol
                </Link>
              </li>
              <li>
                <Link href="/products/women" className="text-muted-foreground hover:text-foreground">
                  Armazones
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-muted-foreground hover:text-foreground">
                  Lentes de contacto
                </Link>
              </li>
              <li>
                <Link href="/products/sale" className="text-muted-foreground hover:text-foreground">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-muted-foreground hover:text-foreground">
                  Productos destacados
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Informacion</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Envios & devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 mt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} RH. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terminos y condiciones
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
