import SidebarCuidador from './SideBarCuidador';

function ListarClientes() {
    return(
        <div className='cuidadores'>
            <SidebarCuidador />
            <h1>Gerenciamento de Clientes</h1>
            <div className="buscar-container">
                <input type="text" placeholder="Buscar Cuidador" className="buscar-input" />
                <button className="buscar-button">Buscar</button>
            </div>
            <table className="cuidadores-table">
                <thead>
                    <tr>
                        <th>Idade</th>
                        <th>Nome Completo</th>
                        <th>Especialidade</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>89</td>
                        <td>Maria Silva</td>
                        <td>AVC</td>
                        <td>(88) 88888888</td>
                    </tr>
                    <tr>
                        <td>92</td>
                        <td>João Pereira</td>
                        <td>Alzheimer</td>
                        <td>(88) 88888888</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Ana Costa</td>
                        <td>Depressão</td>
                        <td>(88) 88888888</td>
                    </tr>
                    <tr>
                        <td>76</td>
                        <td>Luciana Alves</td>
                        <td>Demencia</td>
                        <td>(88) 88888888</td>
                    </tr>
                </tbody>
                    <tr>
                        <td>87</td>
                        <td>Carlos Souza</td>
                        <td>Anormalidade auditiva</td>
                        <td>(88) 88888888</td>
                    </tr>
            </table>
        </div>
    );
}

export default ListarClientes;