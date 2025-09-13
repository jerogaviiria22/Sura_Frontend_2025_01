import { useParams } from "next/navigation";

export default function CategoriaPage() {
  const params = useParams();

  return (
    <div>
      <h1>Categoría: {params.categoria}</h1>
      <h2>Subcategoría: {params.subcategoria}</h2>
    </div>
  );
}
