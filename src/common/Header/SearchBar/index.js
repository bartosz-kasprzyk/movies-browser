import { Wrapper, SearchIcon, SearchInput } from "./styled";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.key === "Enter") {
            onSearch(searchTerm);
        }
    };

    return (
        <Wrapper>
            <SearchIcon />
            <SearchInput
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
            />
        </Wrapper>
    );
}