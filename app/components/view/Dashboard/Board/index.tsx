"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Calendar from "../Calendar";
import { DadosTarefas } from "../types";
import Tasks from "../Tasks";

function Board() {
  const [tarefas, setTarefas] = useState<DadosTarefas[]>([]);

  function adicionarTarefa(novaTarefa: DadosTarefas) {
    setTarefas((prev) => [...prev, novaTarefa]);
  }

  return (
    <div className="flex flex-col p-8 w-full rounded-3xl bg-white">
      <div>
        <Navbar
          onAdicionarTarefa={adicionarTarefa}
          labelButtonNav={"Criar tarefa"}
        />
      </div>
      <section className="flex flex-col overflow-x-auto w-full m-auto gap-8">
        <Calendar />
        <Tasks tarefas={tarefas} />
      </section>
    </div>
  );
}

export default Board;
