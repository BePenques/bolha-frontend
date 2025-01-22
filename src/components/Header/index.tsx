import { Search } from 'lucide-react';

export default function Header() {

  return (
    <header className="site-header">
        <div className="container-header">   
            <div className="logo">           
                <div className="imagem">LOGO</div>
            </div>

            <div className="filters">
                <form>
                    <input type="text" name="search" placeholder="Pesquisar filmes" aria-label="Pesquisar filmes"/>
                    <button type="submit" aria-label="Buscar">     
                    <Search />
                    </button> 
                </form>    
                <select value="">
                    <option value="">Categorias</option>      
                </select>       
            </div>

            <div className="user-info">
                <img className="user-profile" src="https://github.com/BePenques.png" alt="Avatar do usuário"/>
                <div>
                    <div className="dd-infos">
                        <span>Seja bem-vindo,</span>
                        <span>Betiza Penques</span>
                    </div>
                </div>                  
            </div>
        </div>
    </header>
  );
}
