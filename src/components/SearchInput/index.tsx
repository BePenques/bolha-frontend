import { Search } from 'lucide-react';

export default function SearchInput() {

  return (
        <form>
            <input type="text" name="search" placeholder="Pesquisar filmes" aria-label="Pesquisar filmes"/>
            <button type="submit" aria-label="Buscar">     
              <Search />
            </button> 
        </form>          
  );
}
