import { Search } from 'lucide-react';

interface CategorySelectProps {
  onChange: (search: string) => void;
}

export default function SearchInput({onChange}: CategorySelectProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
  };

  return (
        <form>
            <input type="text" name="search" placeholder="Pesquisar filmes" aria-label="Pesquisar filmes" onChange={handleChange}/>
            <button type="submit" aria-label="Buscar">     
              <Search />
            </button> 
        </form>          
  );
}
