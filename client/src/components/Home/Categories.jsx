import styled from "styled-components";
import { categories } from "../../data";
import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display:flex;
    padding:1rem;
    justify-content: space-between;
    ${mobile({flexDirection:'column',padding:'0.5rem 0'})}
`
const Categories = () => {
    return <Container>
    {categories.map(item=>
        <CategoryItem key={item.id} item={item}/>
    )}
</Container>;
};

export default Categories;
