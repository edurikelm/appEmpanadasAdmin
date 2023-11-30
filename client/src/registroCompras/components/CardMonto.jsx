// eslint-disable-next-line react/prop-types
export const CardMonto = ({tipo, total, color}) => {
  return (
    <div className={`flex flex-col justify-center w-20 rounded-xl ${color} shadow-lg text-lg`}>
      <strong>
        <p>{tipo}</p>
        <h1>{total}</h1>
      </strong>
    </div>
  );
};
