import ProductCard from "./productCard";

export default function TrendingProducts(){
    return(
        <div>
            <h1>Trending Products</h1>
            <ProductCard name="Mac Book Air" price="LKR 150,000/-" imageUrl="https://picsum.photos/id/1/200/300"/>
            <ProductCard name="Dell XPS 13" price="LKR 120,000/-" imageUrl="https://picsum.photos/id/2/200/300"/>
            <ProductCard name="HP Spectre x360" price="LKR 180,000/-" imageUrl="https://picsum.photos/id/3/200/300"/>
            <ProductCard name="Lenovo ThinkPad X1" price="LKR 160,000/-" imageUrl="https://picsum.photos/id/4/200/300"/>
        </div>

    )
}