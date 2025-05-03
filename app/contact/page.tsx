import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiX, SiInstagram, SiFacebook } from "react-icons/si";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos para agendar una cita,
          resolver dudas o conocer más sobre nuestros servicios.
        </p>
      </div>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. Siempre Viva 123, Piso 2
                    </p>
                    <p className="text-muted-foreground">
                      Ciudad de San Rafael, CP 5600
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Teléfono</h3>
                    <p className="text-muted-foreground">+54 (2604) 12 3456</p>
                    <p className="text-muted-foreground">+54 (2604) 12 6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@opticarh.com</p>
                    <p className="text-muted-foreground">citas@opticarh.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horario de Atención</h3>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Sábados: 10:00 AM - 1:00 PM
                    </p>
                    <p className="text-muted-foreground">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Síguenos en Redes Sociales
            </h3>
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
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre y Apellido
                </label>
                <Input id="name" placeholder="Tu nombre" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Teléfono
              </label>
              <Input id="phone" type="tel" placeholder="+54 (2604) 12 5678" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Asunto
              </label>
              <Input
                id="subject"
                placeholder="¿En qué podemos ayudarte?"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Encuéntranos</h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden border">
          {/* Aquí normalmente iría un iframe con Google Maps, pero usaremos un placeholder */}
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium">Mapa de ubicación</p>
              <p className="text-muted-foreground">
                Av. Siempre Viva 123, San Rafael, Mendoza
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestras Sucursales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Óptica RH San Rafael",
              address: "Av. Siempre Viva 123, Piso 2",
              city: "San Rafael, CP 5600",
              phone: "+54 (2604) 12 5678",
              hours: "Lun-Vie: 9AM-8PM, Sáb: 10AM-1PM",
            },
            {
              name: "Óptica RH Mendoza",
              address: "Av. Libertador 456, Local 3",
              city: "Mendoza Capital, CP 5500",
              phone: "+54 (2604) 85 4321",
              hours: "Lun-Vie: 9AM-8PM, Sáb: 10AM-1PM",
            },
            {
              name: "Óptica RH Malargüe",
              address: "Av. San Martín 789, Local 2",
              city: "Malargüe, CP 5610",
              phone: "+54 (2604) 98 7654",
              hours: "Lun-Vie: 9AM-8PM, Sáb: 10AM-1PM",
            },
          ].map((location, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 shrink-0" />
                    <span>
                      {location.address}
                      <br />
                      {location.city}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 shrink-0" />
                    <span>{location.phone}</span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 shrink-0" />
                    <span>{location.hours}</span>
                  </p>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Ver en Mapa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
