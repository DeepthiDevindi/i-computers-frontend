export default function HomePage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to iComputers</h1>
            <p className="text-lg text-gray-600 mb-8">Your one-stop shop for all your computer needs!</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Shop Now</button>
        </div>
    );
}