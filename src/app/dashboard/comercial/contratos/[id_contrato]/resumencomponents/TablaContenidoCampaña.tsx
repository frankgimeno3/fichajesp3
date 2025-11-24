import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { InterfazContrato } from "@/app/interfaces/interfaces";

interface TablaContenidoCampañaProps {
  contrato: InterfazContrato;
}

const TablaContenidoCampaña: FC<TablaContenidoCampañaProps> = ({ contrato }) => {
  const router = useRouter();
  const contenido_campana = contrato.contenido_campana

  return (
    <>
      <table className="table-auto border-collapse text-center w-full">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Medio</th>
            <th className="px-4 py-2">Publicación</th>
            <th className="px-4 py-2">Producto</th>
            <th className="px-4 py-2">Deadline material</th>
            <th className="px-4 py-2">Fecha de publicación</th>
            <th className="px-4 py-2">Estado del material</th>
            <th className="px-4 py-2">Código de contenido</th>
            <th className="px-4 py-2">Precio unitario</th>
          </tr>
        </thead>
        <tbody>
          {contenido_campana.map((fila, index) => (
            <tr key={index} className="bg-white text-gray-700">
              <td className="px-4 py-2">{fila.medio}</td>
              <td className="px-4 py-2">{fila.publicacion}</td>
              <td className="px-4 py-2">{fila.producto}</td>
              <td className="px-4 py-2">{fila.deadline_publicacion}</td>
              <td className="px-4 py-2">{fila.fecha_publicacion_publicacion}</td>
              <td className="px-4 py-2">{fila.estado_material_contrato}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                  onClick={() => router.push(fila.urlcontenido)}
                >
                  Ficha del contenido
                </button>
              </td>
              <td className="px-4 py-2">{fila.precio_producto} €</td>

            </tr>
          ))}
        </tbody>

      </table>
      <div className="flex flex-row w-full mb-1">
        <div className="flex flex-row bg-blue-950 text-white px-5 w-full text-sm p-3 border-b border-gray-200 justify-end">
          <p className="font-bold ">
            Total ofertado antes de descuento
          </p>
        </div>
        <div className="flex flex-row bg-white text-gray-600 px-5 w-1/8 border-y border-gray-100"></div>
      </div>
      <div className="w-full flex flex-row">
        <div className="flex flex-col flex-1 ">
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Descuento total</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Base imponible</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Precio final</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>

        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Forma de cobro</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Términos de pago</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>
          <div className="flex flex-row w-full h-12">
            <div className="flex flex-row bg-blue-950 text-white px-5 w-2/4 text-sm py-1 border-b border-gray-200 items-center">
              <p>Número de pagos</p>
            </div>
            <div className="flex flex-row bg-white text-gray-600 px-5 w-full border-y border-gray-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaContenidoCampaña;
