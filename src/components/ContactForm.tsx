import { useForm } from "react-hook-form";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const onSubmit = handleSubmit((data) => {
    alert("Pedido Enviado")
  });

  return (
    <section className="bg-[#F2FBFF]">
      <main className="max-w-7xl w-full pb-20 mx-auto px-4 text-black">
        <form
          className="flex items-center flex-col gap-4 mx-auto max-w-[400px]"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-3 w-full">
            <label>Nombre</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Por favor ingresa tu nombre",
                },
                minLength: 3,
                maxLength: 50,
              })}
              className="px-3 py-2 rounded-xl border border-zinc-900"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Por favor ingresa tu email",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Por favor ingresa un email válido",
                },
                minLength: 3,
                maxLength: 50,
              })}
              className="px-3 py-2 rounded-xl border border-zinc-900"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label>Mensaje</label>
            <textarea
              {...register("message", {
                required: {
                  value: true,
                  message: "Por favor ingresa un mensaje",
                },
              })}
              className="px-3 py-2 rounded-xl border border-zinc-900"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 border rounded-xl bg-[#034792] text-white font-medium text-xl"
          >
            Enviar
          </button>
        </form>
      </main>
    </section>
  );
}
