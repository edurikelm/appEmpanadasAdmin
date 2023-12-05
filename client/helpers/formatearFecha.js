export const formatearFecha = (fecha) => {
  const fechaFormateada = new Date(fecha).toISOString().slice(0, 10)
  return fechaFormateada
}

export const ordenarArrayFechas = (data) => {
  const mesActual = new Date().getMonth() + 1
  const dataOrdenada = data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
  // const dataOrdenadaMesActual = dataOrdenada.map((item) => new Date(item.fecha).getMonth() + 1)
  const dataOrdenadaMesActual2 = dataOrdenada.filter((item) => new Date(item.fecha).getMonth() + 1 === mesActual)
  // console.log(dataOrdenadaMesActual)
  return dataOrdenadaMesActual2
}