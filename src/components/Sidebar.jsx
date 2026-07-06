import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    return (
        <aside className="sidebar">

            <h2>💰 SmartCaixa</h2>

            <Link
                to="/caixa"
                className={location.pathname === "/caixa" ? "ativo" : ""}
            >
                💰 Fechamento
            </Link>

            <Link
                to="/configuracoes"
                className={location.pathname === "/configuracoes" ? "ativo" : ""}
            >
                ⚙️ Configurações
            </Link>

        </aside>
    );
}

export default Sidebar;