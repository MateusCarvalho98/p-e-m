import TableContas from '../UI/tableContas';
import './styles/containerContas.css'

// FC = FunctionComponent = estou tipando o componente (anotando porq sou noob xdxdxd)
const ContainerContas: React.FC = () => {
    return (
        <div className="containerContas">
            <h2>Contas</h2>
            <TableContas />
        </div>
    );
};

export default ContainerContas;