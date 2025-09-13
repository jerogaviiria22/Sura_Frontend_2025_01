'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// import { LoginDTO } from "@/interfaces/login"
import { LoginDTO } from "../../interfaces/login"
// import { loginScheme } from "@/schemas/login"
import { loginScheme } from "../../schemas/login"

// import { loginService } from "@/libs/authService"
import { loginService } from "../../libs/authService"
import InputComponents from "../atoms/InputComponents"

export default function LoginComponent() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })

  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    loginService(data)
      .then((info) => {
        localStorage.setItem('token', info.access_token)
      })
      .catch(e => {
        console.log('Error en solicitud');
      })
  }

  const onErrors = () => {
    console.log('Errores', errors);

    alert('Informacion incompleta')
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)} className="flex flex-col space-y-4">
      {/* Correo */}
      <div>

        <InputComponents
          label="Correo electrónico"
          typeElement="text"
          placeHolder="Ingresa tu correo electrónico"
          className="w-full border-b border-gray-300 focus:border-green-600 outline-none py-2"
          classLabel = "block text-sm text-gray-700"
          registerName = "user"
           register={register}
        />


      </div>

      {/* Contraseña */}
      <div>
        <InputComponents
          label="Contraseña"
          typeElement="password"
          placeHolder="Ingresa tu contraseña"
          className="w-full border-b border-gray-300 focus:border-green-600 outline-none py-2"
          classLabel = "block text-sm text-gray-700"
          registerName = "password"
           register={register}
        />
      </div>

      {/* Olvidaste tu contraseña */}
      <p className="text-xs text-gray-500">
        ¿Olvidaste tu contraseña? No te preocupes, pide un código
        verificador por{" "}
        <a href="#" className="text-blue-600 hover:underline">
          correo
        </a>{" "}
        para cambiar tu contraseña.
      </p>

      {/* Botón ingresar */}
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-medium"
      >
        Ingresar
      </button>
    </form>
  )
}
