import TableContas from '@/UI/tableContas'
import './styles/containerContas.css'

//Added array of bank's acounts. This will be rendered in the table as many acounts as you want
const contas = [
  {
    descricao: 'Banco Inter',
    receitas: 'R$ 10,00',
    despesas: 'R$ 0,00',
    previsao: 'R$ 0,00',
  },
  {
    descricao: 'Banco Itau',
    receitas: 'R$ 10,00',
    despesas: 'R$ 0,00',
    previsao: 'R$ 0,00',
  },
  {
    descricao: 'Nu Bank',
    receitas: 'R$ 10,00',
    despesas: 'R$ 0,00',
    previsao: 'R$ 0,00',
  },
]

// FC = FunctionComponent = i'm putting type on component (writing down becausa i'm noob xdxdxd)
// Please, only comment in english!! ----------------- ALL RIGHT! att: TeuZzin
const ContainerContas: React.FC = () => {
  return (
    <div className="containerContas">
      <h2>Contas</h2>
      <TableContas contas={contas} />
    </div>
  )
}

export default ContainerContas
