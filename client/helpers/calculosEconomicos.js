export function formatearValor (valor) {
  const valorFormateado = `$${new Intl.NumberFormat().format(valor)}`
  return valorFormateado
}