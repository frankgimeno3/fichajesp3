import React, { FC, ChangeEvent } from 'react';

interface Fase0Props {
    setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    setApellidos: React.Dispatch<React.SetStateAction<string>>;
    setTelefono: React.Dispatch<React.SetStateAction<string>>;
    setMail: React.Dispatch<React.SetStateAction<string>>;
}

const Fase0: FC<Fase0Props> = ({ 
    setFaseCrearContacto,
    setNombre,
    setApellidos,
    setTelefono,
    setMail,
 }) => {

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>, 
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setter(e.target.value);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-2xl shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Fase 0 - Datos de contacto</h2>
            
            <form className="flex flex-col gap-3">
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="border p-2 rounded-lg"
                    onChange={(e) => handleChange(e, setNombre)} 
                />
                <input 
                    type="text" 
                    placeholder="Apellidos" 
                    className="border p-2 rounded-lg"
                    onChange={(e) => handleChange(e, setApellidos)} 
                />
                <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    className="border p-2 rounded-lg"
                    onChange={(e) => handleChange(e, setTelefono)} 
                />
                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="border p-2 rounded-lg"
                    onChange={(e) => handleChange(e, setMail)} 
                />
              

                <button 
                    type="button"
                    onClick={() => setFaseCrearContacto(1)} 
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-3 hover:bg-blue-600 transition"
                >
                    Ir a fase siguiente
                </button>
            </form>
        </div>
    );
};

export default Fase0;
