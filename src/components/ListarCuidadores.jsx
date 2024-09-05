import Sidebar from './SideBar';
import '../App.css';

function ListarCuidadores() {
    return(
        <div className='cuidadores'>
            <Sidebar />
            <h1>Gerenciamento de Cuidadores</h1>
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
                        <td>23</td>
                        <td>Pedro da Silva Vieira</td>
                        <td>Cuidados Geriátricos</td>
                        <td>(88) 8888-8888</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>João Oliveira</td>
                        <td>Alzheimer</td>
                        <td>(88) 8888-8888</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Yan Pereira da Silva</td>
                        <td>Depressão</td>
                        <td>(88) 8888-8888</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Arlinda Negrini</td>
                        <td>Fisioterapia</td>
                        <td>(88) 8888-8888</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>Pedro Alexandre Pereira Cruz</td>
                        <td>Anormalidade Auditiva</td>
                        <td>(88) 8888-8888</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListarCuidadores;