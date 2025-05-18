import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from '../components/preloader';
import { CategoryList } from '../components/categoryList';
import { Search } from "../components/search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (str) => {
        setIsSearching(true);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        setIsSearching(false);
    };

    useEffect(() => {
        setIsLoading(true);
        getAllCategories()
            .then((data) => {
                setCatalog(data.categories);
                setFilteredCatalog(data.categories);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Search cb={handleSearch} />
            {isLoading || isSearching ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };