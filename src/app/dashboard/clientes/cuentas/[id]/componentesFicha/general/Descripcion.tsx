interface DescripcionProps {
  descripcion: string;
}

const Descripcion: React.FC<DescripcionProps> = ({ descripcion }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Descripción</h2>
      <textarea
        value={descripcion}
        className="w-full h-40 p-2 border rounded"
        readOnly
      />
    </div>
  );
};
