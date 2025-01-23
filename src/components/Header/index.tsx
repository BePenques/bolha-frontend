import CategorySelect from "../CategorySelect";
import SearchInput from "../SearchInput";

interface HeaderProps {
    selectedCategory: number | 0;
    onCategoryChange: (categoryId: number) => void;
    onFilterChange: (search: string) => void;
}
export default function Header({selectedCategory,onCategoryChange, onFilterChange}: HeaderProps) {
    return (
        <header className="site-header">
            <div className="container-header">   
                <div className="logo">           
                    <div className="imagem">LOGO</div>
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
            <div className="container-filters"> 
                <div className="filters">
                    <SearchInput onChange={onFilterChange}/>
                    <CategorySelect
                        selectedCategory={selectedCategory}
                        onChange={onCategoryChange}
                    />
                </div>
            </div>
        </header>
  );
}
