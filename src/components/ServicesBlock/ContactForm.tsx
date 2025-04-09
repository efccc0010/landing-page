import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    reset(); // Limpia el formulario después de enviarlo
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input
          {...register("nombre", { required: "Este campo es obligatorio" })}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>

      <div>
        <label>Correo electrónico:</label>
        <input
          type="email"
          {...register("email", {
            required: "Ingresa un correo válido",
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: "Formato de correo inválido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea
          {...register("mensaje", {
            required: "Por favor escribe un mensaje",
            minLength: {
              value: 10,
              message: "El mensaje debe tener al menos 10 caracteres",
            },
          })}
        />
        {errors.mensaje && <span>{errors.mensaje.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default React.memo(ContactForm);
