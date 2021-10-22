import { FaTimes } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa';
const Pedido = ({pedido}) => {
  return (
    <div
      className="task"
    >
    <p>{pedido.año}-{pedido.mes}-{pedido.dia}--{pedido.id} para {pedido.dir}</p>
      <h3>
        {pedido.dir}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
        <FaThumbsUp/>
      </h3>
      <h4><a href={"https://wa.me/549"+pedido.wpp} target="_blank">{pedido.wpp}</a></h4>
      <p>{}</p>
      <p> {pedido.items.map(
          (item)=>(((item.cant > 1) ? (item.cant+' ') : '') +
              item.nombre+' '))}
        </p>
      <p>total: {pedido.total}</p>
    </div>
  )
}

export default Pedido
