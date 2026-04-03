import { Routes , Route} from "react-router-dom";
import OrdersPage from "./ordersPage";
import ProductsPage from "./productsPage";
import UsersPage from "./userPage";
import ReviewPage from "./reviewsPage";
import { useNavigate } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";

export default function AdminPage() {
    const navigate = useNavigate();

    return (        
        <div className="w-full h-screen flex items-center bg-accent text-secondary">
            <div className="w-[300px] h-screen bg-accent">
                <h1 className="text-3xl font-bold mb-6 text-center mt-10">Admin Panel</h1>
                <ul>
                    <li className="mb-4 cursor-pointer hover:text-primary" onClick={() => navigate("/admin")}>Orders</li>
                    <li className="mb-4 cursor-pointer hover:text-primary" onClick={() => navigate("/admin/products")}>Products</li>
                    <li className="mb-4 cursor-pointer hover:text-primary" onClick={() => navigate("/admin/users")}>Users</li>
                    <li className="mb-4 cursor-pointer hover:text-primary" onClick={() => navigate("/admin/reviews")}>Reviews</li>
                </ul>
            </div>

            <div className="w-[calc(100%-300px)] h-full bg-primary border-[10px] border-accent rounded-2xl">
                <Routes>
                    <Route path="/" element={<OrdersPage />} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/reviews" element={<ReviewPage />} />
                    <Route path="/add-products/*" element={<AdminAddProductPage />} />
                </Routes>
            </div>
        </div>
    );
}
