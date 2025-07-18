import Sidebar from "./Sidebar";
import Board from "./Board";
import { useState } from "react";
import { DadosTarefas } from './types'

function Dashboard() {
  const [tarefas, setTarefas] = useState<DadosTarefas[]>([]);

  function adcionarTarefa(novaTarefa: any) {
    setTarefas((prev) => [...prev, novaTarefa]);
  }

  return (
    <div className="flex bg-[#F3F3F3] p-8 gap-8">
      <Sidebar />
      <div className="w-full bg-[#FFF] rounded-3xl">
        <Board tarefas={tarefas} />
      </div>
    </div>
  );
}

export default Dashboard;
