"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signOut } from "next-auth/react"
import { ShoppingBag, User, Settings, Eye, Calendar } from "lucide-react"
import Link from "next/link"

type ProfileUser = {
  name?: string | null
  email?: string | null
  image?: string | null
}

type Order = {
  id: string
  date: string
  status: string
  total: number
  items: number
}

export function ProfileView({ user, isDemo = false }: { user: ProfileUser; isDemo?: boolean }) {
  const [isLoading, setIsLoading] = useState(false)

  // Datos de ejemplo para pedidos
  const mockOrders: Order[] = [
    {
      id: "ORD-1234",
      date: "15/05/2023",
      status: "Entregado",
      total: 2500,
      items: 2,
    },
    {
      id: "ORD-5678",
      date: "03/06/2023",
      status: "En proceso",
      total: 1800,
      items: 1,
    },
    {
      id: "ORD-9012",
      date: "22/07/2023",
      status: "Pendiente",
      total: 3200,
      items: 3,
    },
  ]

  // Datos de ejemplo para citas
  const mockAppointments = [
    {
      id: "APT-001",
      date: "20/08/2023",
      time: "10:30",
      type: "Examen visual",
      doctor: "Dr. Roberto Hernández",
    },
    {
      id: "APT-002",
      date: "15/09/2023",
      time: "16:00",
      type: "Adaptación lentes de contacto",
      doctor: "Dra. María González",
    },
  ]

  // Datos de ejemplo para recetas
  const mockPrescriptions = [
    {
      id: "RX-001",
      date: "20/08/2023",
      doctor: "Dr. Roberto Hernández",
      rightEye: "+2.00 -0.75 x 180",
      leftEye: "+2.25 -0.50 x 175",
      additionalInfo: "Lentes progresivos recomendados",
    },
    {
      id: "RX-002",
      date: "15/03/2023",
      doctor: "Dra. María González",
      rightEye: "+1.75 -0.75 x 180",
      leftEye: "+2.00 -0.50 x 175",
      additionalInfo: "Filtro luz azul recomendado",
    },
  ]

  const handleSignOut = async () => {
    if (isDemo) {
      // En modo demo, simplemente redirigir a la página principal
      window.location.href = "/"
      return
    }

    setIsLoading(true)
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mi Cuenta</h1>
          <p className="text-muted-foreground">Gestiona tu información personal y revisa tus pedidos</p>
        </div>
        <Button variant="outline" onClick={handleSignOut} disabled={isLoading}>
          {isDemo ? "Volver al inicio" : isLoading ? "Cerrando sesión..." : "Cerrar sesión"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Información del usuario */}
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted">
                {user?.image ? (
                  <img src={user.image || "/placeholder.svg"} alt={user.name || "Usuario"} className="object-cover" />
                ) : (
                  <User className="h-12 w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                )}
              </div>
            </div>
            <CardTitle>{user?.name || "Usuario"}</CardTitle>
            <CardDescription>{user?.email || "Sin correo"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">3 pedidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">2 citas programadas</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">2 recetas guardadas</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href={isDemo ? "#" : "/profile/edit"}>
                <Settings className="h-4 w-4 mr-2" />
                Editar perfil
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pestañas de información */}
        <div className="md:col-span-3">
          <Tabs defaultValue="orders">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
              <TabsTrigger value="appointments">Mis Citas</TabsTrigger>
              <TabsTrigger value="prescriptions">Mis Recetas</TabsTrigger>
            </TabsList>

            {/* Pestaña de Pedidos */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Pedidos</CardTitle>
                  <CardDescription>Revisa el estado de tus pedidos recientes</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockOrders.length > 0 ? (
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <div className="font-medium">{order.id}</div>
                            <div className="text-sm text-muted-foreground">{order.date}</div>
                          </div>
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <div className="text-sm">
                                {order.items} {order.items === 1 ? "producto" : "productos"}
                              </div>
                              <div className="text-sm font-medium">${order.total.toFixed(2)}</div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  order.status === "Entregado"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "En proceso"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={isDemo ? "#" : `/orders/${order.id}`}>Ver detalles</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No tienes pedidos aún</h3>
                      <p className="text-muted-foreground mt-1">Cuando realices una compra, aparecerá aquí</p>
                      <Button className="mt-4" asChild>
                        <Link href="/products">Explorar productos</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pestaña de Citas */}
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Mis Citas</CardTitle>
                  <CardDescription>Gestiona tus citas programadas</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {mockAppointments.map((appointment) => (
                        <div key={appointment.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <div className="font-medium">{appointment.type}</div>
                            <div className="text-sm text-muted-foreground">
                              {appointment.date} - {appointment.time}
                            </div>
                          </div>
                          <div className="text-sm">Doctor: {appointment.doctor}</div>
                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              Reprogramar
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              Cancelar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No tienes citas programadas</h3>
                      <p className="text-muted-foreground mt-1">Agenda una cita para tu próxima revisión</p>
                      <Button className="mt-4" asChild>
                        <Link href="/opticas">Agendar cita</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={isDemo ? "#" : "/opticas"}>Agendar nueva cita</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Pestaña de Recetas */}
            <TabsContent value="prescriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Mis Recetas</CardTitle>
                  <CardDescription>Accede a tus recetas oftalmológicas</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockPrescriptions.length > 0 ? (
                    <div className="space-y-4">
                      {mockPrescriptions.map((prescription) => (
                        <div key={prescription.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <div className="font-medium">{prescription.id}</div>
                            <div className="text-sm text-muted-foreground">{prescription.date}</div>
                          </div>
                          <div className="text-sm mb-2">Doctor: {prescription.doctor}</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                              <div className="text-sm font-medium">Ojo derecho</div>
                              <div className="text-sm">{prescription.rightEye}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm font-medium">Ojo izquierdo</div>
                              <div className="text-sm">{prescription.leftEye}</div>
                            </div>
                          </div>
                          {prescription.additionalInfo && (
                            <div className="mt-4 text-sm">
                              <span className="font-medium">Notas adicionales:</span> {prescription.additionalInfo}
                            </div>
                          )}
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              Descargar PDF
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Eye className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No tienes recetas guardadas</h3>
                      <p className="text-muted-foreground mt-1">
                        Después de tu examen visual, tus recetas aparecerán aquí
                      </p>
                      <Button className="mt-4" asChild>
                        <Link href="/opticas">Agendar examen visual</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
