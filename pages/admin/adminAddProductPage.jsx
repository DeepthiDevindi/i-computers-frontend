import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadMedia from "../../src/utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddProductPage() {

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [alternativeName, setAlternativeName] = useState("");
    const [price, setPrice] = useState("");
    const [labledPrice, setLabledPrice] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [category, setCategory] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();

    async function handleSave() {
        try {
            const token = localStorage.getItem("token");
            if (token == null) {
                toast.error("You must be logged in to perform this action.");
                window.location.href = "/login";
                return;
            }

            const mediaUrls = [];
            for (let i = 0; i < images.length; i++) {
                mediaUrls.push(uploadMedia(images[i]));
            }

            const urls = await Promise.all(mediaUrls);

            const alternativeNamesArray = alternativeName.split(",");

            const productData = {
                productId,
                name,
                alternativeName: alternativeNamesArray,
                price,
                labledPrice,
                description,
                images: urls,
                brand,
                model,
                category,
                isAvailable,
                stock: parseInt(stock),
            };

            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/products",
                productData,
                {
                    headers: {
                        "Authorization": "Bearer " + token,
                    },
                }
            );

            toast.success("Product saved successfully!");
            navigate("/admin/products");

        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred while saving the product.");
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-4 overflow-y-scroll">

            <div className="sticky top-0 w-full h-[100px] rounded-lg bg-accent text-white flex items-center p-5 justify-between shadow-2xl z-50">
                <h1 className="text-2xl font-semibold">Add New Product</h1>
                <div className="h-full flex justify-center items-center">
                    <button onClick={handleSave} className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Save</button>
                    <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Cancel</button>
                </div>
            </div>

            <div className="w-full flex bg-white p-5 mt-5 shadow-2xl rounded-lg flex-wrap">

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Product ID</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </div>

                <div className="w-3/4 p-2">
                    <label className="block mb-2 font-semibold">Name</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="w-full p-2">
                    <label className="block mb-2 font-semibold">Alternative Name (comma separated)</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={alternativeName}
                        onChange={(e) => setAlternativeName(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Price</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Labled Price</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        type="number"
                        value={labledPrice}
                        onChange={(e) => setLabledPrice(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full">
                        <option value="">Select Category</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Desktop">Desktop</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Peripheral">Peripheral (Keyboard/Mouse)</option>
                        <option value="Storage">Storage (HDD/SSD)</option>
                        <option value="GPU">GPU / Graphics Card</option>
                        <option value="CPU">CPU / Processor</option>
                        <option value="RAM">RAM / Memory</option>
                        <option value="Motherboard">Motherboard</option>
                        <option value="Power Supply">Power Supply</option>
                        <option value="Cooling">Cooling / Fans</option>
                        <option value="Accessory">Accessory</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Images</label>
                    <input type="file" className="border border-gray-300 rounded-md p-2 w-full" multiple={true} onChange={(e) => setImages(e.target.files)} />
                </div>

                <div className="w-full p-2">
                    <label className="block mb-2 font-semibold">Description</label>
                    <textarea className="border border-gray-300 rounded-md p-2 w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Brand</label>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full">
                        <option value="">Select Brand</option>
                        <option value="Dell">Dell</option>
                        <option value="HP">HP</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Asus">Asus</option>
                        <option value="Acer">Acer</option>
                        <option value="Apple">Apple</option>
                        <option value="Corsair">Corsair</option>
                        <option value="Gigabyte">Gigabyte</option>
                        <option value="MSI">MSI</option>
                        <option value="AMD">AMD</option>
                        <option value="Intel">Intel</option>
                        <option value="NVIDIA">NVIDIA</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Model</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Stock</label>
                    <input className="border border-gray-300 rounded-md p-2 w-full"
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                <div className="w-1/4 p-2">
                    <label className="block mb-2 font-semibold">Available</label>
                    <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>

            </div>
        </div>
    );
}