import { ArrowDownUp, Percent, Search } from "lucide-react";
import { poppins } from "./fonts";
import TableDefault from "@/components/tableDefault";

export default function Home() {
  return (
    <article className={`container-market px-3 pb-2 relative ${poppins.variable}`}>
      <div className="sticky top-0 z-10 bg-secondary pt-3">
        <div className="filters">
          <button className="btn-filter">
            <Search size={24} color="white"/>
            <span>Buscar Items</span>
          </button>
          <div className="flex flex-row gap-3">
            <button className="btn-filter">
              <span>Filtrar Variação</span>
              <ArrowDownUp size={24} color="white"/>
            </button>
            <button className="btn-filter">
              <span>Filtrar %</span>
              <ArrowDownUp size={24} color="white"/>
            </button>
          </div>
        </div>
        <div className="last-updated">
          <span>Data da última atualização de preços:</span>
          <span><strong>14/06/2024</strong></span>
          <span>Às</span>
          <span><strong>19:30:23</strong></span>
        </div>
      </div>
      <TableDefault />
    </article>
  );
}
