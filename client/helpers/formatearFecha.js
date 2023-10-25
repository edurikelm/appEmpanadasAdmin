export const formatearFecha = (fecha) => {
  const fechaFormateada = new Date(fecha).toISOString().slice(0, 10)
  return fechaFormateada
}