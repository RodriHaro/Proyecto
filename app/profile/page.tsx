import { ProfileView } from "@/components/profile-view"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// Usuario de demostración para visualizar el perfil sin iniciar sesión
const demoUser = {
  name: "Usuario de Demostración",
  email: "demo@example.com",
  image: "/placeholder.svg?height=100&width=100",
}

export default async function ProfilePage({
  searchParams,
}: {
  searchParams?: { demo?: string }
}) {
  // Obtener los parámetros de búsqueda de forma asíncrona
  const params = await searchParams;

  // Verificar si estamos en modo demostración
  const isDemo = params?.demo === "true";

  // Obtener la sesión solo si no estamos en modo demostración
  const session = isDemo ? null : await getServerSession(authOptions);

  // Usar el usuario de la sesión o el usuario de demostración
  const user = session?.user || (isDemo ? demoUser : null);

  // Si no hay usuario y no estamos en modo demostración, mostrar mensaje
  if (!user && !isDemo) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Acceso restringido</h1>
          <p className="text-muted-foreground mb-6">
            Debes iniciar sesión para ver esta página. Puedes ver una demostración añadiendo <code>?demo=true</code> a
            la URL.
          </p>
          <div className="flex gap-4">
            <a href="/login" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              Iniciar sesión
            </a>
            <a
              href="/profile?demo=true"
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
            >
              Ver demostración
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {isDemo && (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-6">
          <p className="font-medium">Modo demostración</p>
          <p className="text-sm">
            Estás viendo una versión de demostración del perfil de usuario con datos de ejemplo.
          </p>
        </div>
      )}
      <ProfileView user={user} isDemo={isDemo} />
    </div>
  );
}
