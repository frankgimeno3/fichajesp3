"use client";

import React, { FC, ChangeEvent } from "react";

interface Fase2Props {
  setNombreUbicacion: React.Dispatch<React.SetStateAction<string>>;
  setPaisUbicacion: React.Dispatch<React.SetStateAction<string>>;
  setEstadoUbicacion: React.Dispatch<React.SetStateAction<string>>;
  setCiudadUbicacion: React.Dispatch<React.SetStateAction<string>>;
  setCodigoPostal: React.Dispatch<React.SetStateAction<string>>;
  setDireccionCompleta: React.Dispatch<React.SetStateAction<string>>;
  setTelefonoPrincipal: React.Dispatch<React.SetStateAction<string>>;
  setDescripcionUbicacion: React.Dispatch<React.SetStateAction<string>>;
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
}

export const paises = [
"Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
"Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bhután", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi",
"Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía",
"Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia",
"Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Vaticano", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
];

const Fase2: FC<Fase2Props> = ({
  setNombreUbicacion,
  setPaisUbicacion,
  setEstadoUbicacion,
  setCiudadUbicacion,
  setCodigoPostal,
  setDireccionCompleta,
  setTelefonoPrincipal,
  setDescripcionUbicacion,
  setFaseCrearCuenta
}) => {

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setter(e.target.value);
  };


  const [nombreUbicacion, setNombreUbicacionLocal] = React.useState('');
  const [paisUbicacion, setPaisUbicacionLocal] = React.useState('');
  const [estadoUbicacion, setEstadoUbicacionLocal] = React.useState('');
  const [ciudadUbicacion, setCiudadUbicacionLocal] = React.useState('');
  const [codigoPostal, setCodigoPostalLocal] = React.useState('');
  const [direccionCompleta, setDireccionCompletaLocal] = React.useState('');
  const [telefonoPrincipal, setTelefonoPrincipalLocal] = React.useState('');
  const [descripcionUbicacion, setDescripcionUbicacionLocal] = React.useState('');
  
  const todosCamposCompletos = (
    nombreUbicacion && paisUbicacion && estadoUbicacion && ciudadUbicacion &&
    codigoPostal && direccionCompleta && telefonoPrincipal && descripcionUbicacion
  );

  const actualizarSetter = (setter: React.Dispatch<React.SetStateAction<string>>, valor: string, localSetter: React.Dispatch<React.SetStateAction<string>>) => {
    localSetter(valor);
    setter(valor);
  };

  return (
        <div className="p-10 px-8 md:px-56 bg-white rounded-2xl shadow-md max-w-5xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4 pt-10"> Dirección de la cuenta</h2>
      <div className="flex flex-col gap-3">
        <input type="text" placeholder="Nombre de la ubicación" className="border p-2 rounded-lg"
          value={nombreUbicacion} onChange={(e) => actualizarSetter(setNombreUbicacion, e.target.value, setNombreUbicacionLocal)} />

        <select className="border p-2 rounded-lg" value={paisUbicacion} onChange={(e) => actualizarSetter(setPaisUbicacion, e.target.value, setPaisUbicacionLocal)}>
          <option value="" disabled>Selecciona un país</option>
          {paises.map((p, i) => <option key={i} value={p}>{p}</option>)}
        </select>

        <input type="text" placeholder="Estado" className="border p-2 rounded-lg"
          value={estadoUbicacion} onChange={(e) => actualizarSetter(setEstadoUbicacion, e.target.value, setEstadoUbicacionLocal)} />

        <input type="text" placeholder="Ciudad" className="border p-2 rounded-lg"
          value={ciudadUbicacion} onChange={(e) => actualizarSetter(setCiudadUbicacion, e.target.value, setCiudadUbicacionLocal)} />

        <input type="text" placeholder="Código postal" className="border p-2 rounded-lg"
          value={codigoPostal} onChange={(e) => actualizarSetter(setCodigoPostal, e.target.value, setCodigoPostalLocal)} />

        <input type="text" placeholder="Dirección completa" className="border p-2 rounded-lg"
          value={direccionCompleta} onChange={(e) => actualizarSetter(setDireccionCompleta, e.target.value, setDireccionCompletaLocal)} />

        <input type="tel" placeholder="Teléfono principal" className="border p-2 rounded-lg"
          value={telefonoPrincipal} onChange={(e) => actualizarSetter(setTelefonoPrincipal, e.target.value, setTelefonoPrincipalLocal)} />

        <textarea placeholder="Descripción de la ubicación" rows={3} className="border p-2 rounded-lg"
          value={descripcionUbicacion} onChange={(e) => actualizarSetter(setDescripcionUbicacion, e.target.value, setDescripcionUbicacionLocal)} />

        <button className={`rounded-lg px-4 py-2 transition ${todosCamposCompletos ? "bg-green-500 text-white hover:bg-green-600" : "bg-green-500 text-white opacity-50 cursor-not-allowed"}`}
          disabled={!todosCamposCompletos}
          onClick={() => setFaseCrearCuenta(3)}
        >
          Siguiente fase
        </button>
      </div>
    </div>
  );
};

export default Fase2;
