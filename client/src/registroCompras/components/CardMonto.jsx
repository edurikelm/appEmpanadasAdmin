export const CardMonto = ({gastos, valor, color}) => {
  return (
    <div className={`flex flex-col justify-center w-20 rounded-xl ${color} shadow-lg text-lg`}>
      <strong>
        <p>{gastos}</p>
        <h1>{valor}</h1>
      </strong>
    </div>
  );
};
