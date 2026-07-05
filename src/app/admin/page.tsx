import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redirect ke halaman kelola produk sebagai halaman utama admin
  redirect("/admin/produk");
}
