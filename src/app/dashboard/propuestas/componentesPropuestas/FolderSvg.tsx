import React, { FC } from 'react';

interface FolderSvgProps {
  contenido: string;
}

const FolderSvg: FC<FolderSvgProps> = ({ contenido }) => {
  return (
    <div className="relative w-[200px] h-[200px]">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-70 h-70 text-gray-700"
      >
        {/* Solapa superior de la carpeta */}
        <path
          d="M6 16C6 13.8 7.8 12 10 12H26L30 16H54C56.2 16 58 17.8 58 20V22H6V16Z"
          fill="currentColor"
          className="opacity-90"
        />
        {/* Cuerpo principal de la carpeta */}
        <rect
          x="6"
          y="22"
          width="52"
          height="34"
          rx="3"
          fill="currentColor"
          className="opacity-60"
        />
      </svg>

      {/* Texto sobrepuesto */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white text-xl font-bold uppercase text-center drop-shadow-md">
          {contenido}
        </span>
      </div>
    </div>
  );
};

export default FolderSvg;
