import React from 'react';
import {Genre} from '../../types';


interface CategorySelectProps {
    genres: Genre[];
    selectedCategory: number | 0;
    onChange: (categoryId: number) => void;
}

export default function CategorySelect({selectedCategory, onChange, genres}: CategorySelectProps) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = event.target.value ? parseInt(event.target.value, 10) : 0;
        onChange(categoryId);
    };

    return (
       
        <select value={selectedCategory} onChange={handleChange}>
            <option value="">Todas as Categorias</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
};


