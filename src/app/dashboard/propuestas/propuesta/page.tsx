"use client"
import React, { FC, useState } from 'react';

interface DetallesPropuestaProps {}

const DetallesPropuesta: FC<DetallesPropuestaProps> = ({}) => {
  const [nombrePropuesta, setNombrePropuesta] = useState("Campaña Verano 2025");
  const [nombreCliente, setNombreCliente] = useState("Marketing Solutions S.A.");

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600 space-y-12">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-semibold">Detalles de la propuesta</p>
        <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900">
          <p>Descargar en PDF</p>
        </button>
      </div>

      {/* Tabla de datos de la propuesta */}
      <div className="p-6 rounded-lg shadow-xl bg-white">
        <p className="text-lg font-semibold mb-4">Datos generales</p>
        <table className="w-full text-sm border border-gray-200">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium">Nombre de la propuesta</td>
              <td className="p-2">{nombrePropuesta}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Nombre del cliente</td>
              <td className="p-2">{nombreCliente}</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Código de cliente</td>
              <td className="p-2">CLT-3021</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Agente creador</td>
              <td className="p-2">Laura Martínez</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Fecha de creación</td>
              <td className="p-2">2025-07-15</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium">Estado</td>
              <td className="p-2">Pendiente</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">Valor total</td>
              <td className="p-2">€12.500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla de contenido ofrecido */}
      <div className="p-6 rounded-lg shadow-xl bg-white space-y-8">
        <p className="text-lg font-semibold">Contenido ofrecido</p>

        {/* Parte 1: Medio, publicación, producto, detalles, precio */}
        <table className="w-full text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Medio</th>
              <th className="p-2 text-left">Publicación</th>
              <th className="p-2 text-left">Producto</th>
              <th className="p-2 text-left">Detalles</th>
              <th className="p-2 text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Instagram</td>
              <td className="p-2">Post patrocinado</td>
              <td className="p-2">Campaña visual</td>
              <td className="p-2">3 publicaciones en el feed</td>
              <td className="p-2">€4.000</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">YouTube</td>
              <td className="p-2">Video colaborativo</td>
              <td className="p-2">Publicidad nativa</td>
              <td className="p-2">1 video de 5 minutos</td>
              <td className="p-2">€5.500</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">TikTok</td>
              <td className="p-2">Short ad</td>
              <td className="p-2">Influencer promotion</td>
              <td className="p-2">2 videos + historia</td>
              <td className="p-2">€3.000</td>
            </tr>
          </tbody>
        </table>

        {/* Parte 2: Totales y resumen */}
        <div className="w-full max-w-md">
          <table className="w-full text-sm border border-gray-200">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Precio total antes de descuento</td>
                <td className="p-2">€12.500</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Descuento</td>
                <td className="p-2">€1.000</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Base imponible</td>
                <td className="p-2">€11.500</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Impuestos (21%)</td>
                <td className="p-2">€2.415</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Valor después de impuestos</td>
                <td className="p-2 font-semibold">€13.915</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Parte 3: Datos de pago */}
        <div>
          <p className="text-md font-semibold mb-2">Datos de pago</p>
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Pago</th>
                <th className="p-2 text-left">Importe</th>
                <th className="p-2 text-left">Fecha</th>
                <th className="p-2 text-left">Forma de pago</th>
                <th className="p-2 text-left">Pagador</th>
                <th className="p-2 text-left">Detalles</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2">Pago inicial</td>
                <td className="p-2">€6.000</td>
                <td className="p-2">2025-07-20</td>
                <td className="p-2">Transferencia</td>
                <td className="p-2">M. Solutions S.A.</td>
                <td className="p-2">Pago por reserva de campaña</td>
              </tr>
              <tr className="border-t">
                <td className="p-2">Pago final</td>
                <td className="p-2">€7.915</td>
                <td className="p-2">2025-08-10</td>
                <td className="p-2">Tarjeta</td>
                <td className="p-2">M. Solutions S.A.</td>
                <td className="p-2">Resto del importe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetallesPropuesta;
