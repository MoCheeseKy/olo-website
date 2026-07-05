export const dynamic = 'force-dynamic';
import { getProducts } from "@/app/actions/product.action";
import ProdukClient from "./ProdukClient";

export default async function ProdukPage() {
  const products = await getProducts();
  
  return <ProdukClient products={products} />;
}
