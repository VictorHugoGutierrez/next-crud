interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg px-4 py-2 focus:outline-none bg-gray-100 ${
          props.somenteLeitura ? "" : "focus:bg-white"
        }`}
      />
    </div>
  );
}
