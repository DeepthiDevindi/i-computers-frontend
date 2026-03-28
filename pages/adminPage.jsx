import { Routes , Route} from "react-router-dom";
import ProductsPage from "./productsPage"

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex items-center bg-accent text-secondary">
            <div className="w-[300px] h-screen bg-accent"></div>
            <div className="w-[calc(100%-300px)] h-full bg-primary border-[10px] border-accent rounded-2xl">
                <Routes>
                    <Route path="/" element={<ProductsPage/>}></Route>
                </Routes>

            </div>
        </div>
    );
}