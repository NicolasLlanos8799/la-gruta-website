"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="a-login">
      <input name="password" type="password" placeholder="Contraseña" aria-label="Contraseña" autoComplete="current-password" autoCapitalize="none" autoCorrect="off" spellCheck={false} required autoFocus />
      {state?.error && <p className="a-err" role="alert">{state.error}</p>}
      <button className="a-btn primary" type="submit" disabled={pending}>
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
