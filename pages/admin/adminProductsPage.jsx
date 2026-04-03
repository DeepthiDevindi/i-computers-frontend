import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function AdminProductsPage() {

    return (
        <div className="w-full h-full flex items-center justify-center">
            <Link to="/admin/add-products" className="fixed bottom-3 right-4 w-12 h-12 bg-accent flex justify-center items-center text-white text-3xl rounded-full shadow-lg hover:scale-110 hover:bg-black transition"
  >
                <FaPlus />
            </Link>
        </div>
    );
}