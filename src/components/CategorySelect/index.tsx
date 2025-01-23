import React from 'react';
import categories from "../../data/genres.json";

interface CategorySelectProps {
    selectedCategory: number | 0;
    onChange: (categoryId: number) => void;
}

export default function CategorySelect({selectedCategory,onChange}: CategorySelectProps) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = event.target.value ? parseInt(event.target.value, 10) : 0;
        onChange(categoryId);
    };

    return (
        <select value={selectedCategory} onChange={handleChange}>
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};


