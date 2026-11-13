import { redirect } from "next/navigation";

// La tienda es una sola: el acceso mayorista se hace desde /tienda con código.
export default function MayoristaPage() {
  redirect("/tienda");
}
