"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logoGoogle from "@/public/image/iconGoogle.svg";
import ButtonLogin from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.email({ error: "E-mail inválido" }),
  password: z.string().min(8, { error: "Senha incorreta" }),
});

type LoginData = z.infer<typeof loginSchema>;

function FormLogin() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    //Criar rota para o prisma
    route.push("/dashboard")
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-5 w-full mx-auto  max-w-[380px]"
    >
      <span className="text-secondary">
        Olá! Faça login ou
        <a className="hover:underline" href="#">
          {" "}
          crie uma nova conta.
        </a>
      </span>
      <ButtonLogin icon={logoGoogle} textButtonLogin="Login com Google" />

      <div className="flex items-center gap-4">
        <hr className="w-full text-pink-line" />
        <span className="text-secondary">ou</span>
        <hr className="w-full text-pink-line" />
      </div>

      <label className="flex flex-col gap-3" htmlFor="email">
        <span>Digite seu e-mail</span>
        <input
          id="email"
          {...register("email")}
          className="border-2 border-pink-200 rounded-md h-[48px] p-3 outline-pink-300"
          type="email"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-3" htmlFor="password">
        <span>Digite sua senha</span>
        <input
          id="password"
          {...register("password")}
          className="border-2 border-pink-200 rounded-md h-[48px] p-3 outline-pink-300"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </label>
      <div className="flex">
        <Link className="text-sm hover:underline text-secondary" href="#">
          Esqueceu sua senha?
        </Link>
      </div>

      <ButtonLogin textButtonLogin="Entrar" />

      <div className="flex justify-center">
        <span>Não tem uma conta?</span>
        &nbsp;
        <Link className="hover:underline" href="#">
          Criar conta
        </Link>
      </div>
    </form>
  );
}

export default FormLogin;
