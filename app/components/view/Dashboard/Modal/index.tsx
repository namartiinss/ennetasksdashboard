"use client";
import { CircleX } from "lucide-react";
import React, { useState } from "react";
import { DadosTarefas } from "../types";

interface ModalNovaTarefaProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdicionarTarefa: (tarefa: DadosTarefas) => void;
}

function Modal({
  open,
  onOpenChange,
  onAdicionarTarefa,
}: ModalNovaTarefaProps) {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    dia: "", 
    tempo: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      ...form,
      createdAt: new Date(),
    };
    onAdicionarTarefa(data);
    setForm({ nome: "", descricao: "", dia: "", tempo: "" });
  }

  return (
    <div
      className={`flex flex-col items-center justify-center z-50 fixed inset-0 bg-black/50 transition ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-8 rounded-3xl">
        <div className="flex mb-8">
          <h3 className="font-normal font-[#333] text-3xl text-center w-full">
            Criar nova tarefa
          </h3>
          <button
            onClick={() => onOpenChange(false)}
            className="p-1.5 rounded-[4px] cursor-pointer hover:bg-pink-100"
          >
            <CircleX size={26} color="#DD73B0" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="mb-2.5 text-[16px] text-[#333]">
              Nome da tarefa
            </span>
            <input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              type="text"
              className="mb-5 border border-pink-300 rounded-md w-[484px] outline-pink-400 p-2"
            />

            <span className="mb-2.5 text-[16px] text-[#333]">
              Descrição da tarefa
            </span>
            <textarea
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              name="description"
              className="w-full resize-none border border-pink-300 rounded-md p-2 mb-5 outline-pink-400"
            ></textarea>
          </label>

          <div className="flex gap-5">
            <label className="flex flex-col">
              <span className="mb-2.5 text-[16px] text-[#333]">
                Selecionar dia da semana
              </span>
              <select
                value={form.dia}
                onChange={(e) => setForm({ ...form, dia: e.target.value })}
                name="category"
                className="w-[230px] mb-5 border border-pink-300 rounded-md outline-pink-400 p-2"
                id=""
              >
                <option>Selecionar dia</option>
                <option value="Dom">Domingo</option>
                <option value="Segunda">Segunda</option>
                <option value="Terça">Terça</option>
                <option value="Quarta">Quarta</option>
                <option value="Quinta">Quinta</option>
                <option value="Sexta">Sexta</option>
                <option value="Sábado">Sábado</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="mb-2.5 text-[16px] text-[#333]">
                Tempo estimado
              </span>
              <input
                value={form.tempo}
                onChange={(e) => setForm({ ...form, tempo: e.target.value })}
                type="time"
                className="w-[230px] mb-5 border border-pink-300 rounded-md outline-pink-400 p-2"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-pink-100 py-2.5 rounded-md hover:bg-pink-200 cursor-pointer transition"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
