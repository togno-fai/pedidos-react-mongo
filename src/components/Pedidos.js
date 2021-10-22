import Pedido from './Pedido'

const Pedidos = ({ pedidos }) => {
  return (
    <>
      {pedidos.map((pedido) => (
       <Pedido key={pedido.id} pedido={pedido} />
      ))}
    </>
  )
}

export default Pedidos