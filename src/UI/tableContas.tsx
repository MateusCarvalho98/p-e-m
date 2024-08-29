import './styles/tableContas.css';

// FC = FunctionComponent = estou tipando o componente (anotando porq sou noob xdxdxd)
const TableContas: React.FC = () => {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Receitas</th>
                    <th>Despesas</th>
                    <th>Previsão</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Banco Inter</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,00</td>
                </tr>
                <tr>
                    <td>Banco Itau</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,00</td>
                    <td>R$ 0,01</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableContas;