import React from "react";
import "./styles/tableContas.css";

// Definindo a interface para o tipo de conta
interface Conta {
  descricao: string;
  receitas: string;
  despesas: string;
  previsao: string;
}

// Definindo a interface para as props do componente
interface TableContasProps {
  contas: Conta[];
}

const TableContas: React.FC<TableContasProps> = ({ contas }) => {
  const calcularTotal = (campo: keyof Conta) => {
    return contas
      .reduce((acc, conta) => {
        const valor = parseFloat(
          conta[campo].replace("R$", "").replace(",", ".")
        );
        return acc + valor;
      }, 0)
      .toFixed(2)
      .replace(".", ",");
  };

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
        {contas.map((conta, index) => (
          <tr key={index}>
            <td>{conta.descricao}</td>
            <td>{conta.receitas}</td>
            <td>{conta.despesas}</td>
            <td>{conta.previsao}</td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>R$ {calcularTotal("receitas")}</td>
          <td>R$ {calcularTotal("despesas")}</td>
          <td>R$ {calcularTotal("previsao")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableContas;

// import './styles/tableContas.css';

// // FC = FunctionComponent = estou tipando o componente (anotando porq sou noob xdxdxd)
// const TableContas: React.FC = () => {
//     return (
//         <table className="custom-table">
//             <thead>
//                 <tr>
//                     <th>Descrição</th>
//                     <th>Receitas</th>
//                     <th>Despesas</th>
//                     <th>Previsão</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Banco Inter</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,00</td>
//                 </tr>
//                 <tr>
//                     <td>Banco Itau</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,00</td>
//                 </tr>
//                 <tr>
//                     <td>Total</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,00</td>
//                     <td>R$ 0,01</td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// };

// export default TableContas;
