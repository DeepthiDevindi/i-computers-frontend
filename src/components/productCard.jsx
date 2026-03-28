export default function ProductCard(props) {
  return (
    <div className="group relative w-72 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">

      {/* Image Container */}
      <div className="relative bg-gray-50 h-64 overflow-hidden">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {props.badge && (
          <span className="absolute top-3 left-3 bg-black text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {props.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all duration-200 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        {props.category && (
          <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-1">
            {props.category}
          </p>
        )}
        <h2 className="text-gray-900 text-[17px] font-semibold leading-snug tracking-tight mb-1">
          {props.name}
        </h2>
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < (props.rating || 4) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">{props.reviews || "128 reviews"}</span>
        </div>
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div>
            {props.originalPrice && (
              <p className="text-xs text-gray-400 line-through leading-none mb-0.5">
                {props.originalPrice}
              </p>
            )}
            <p className="text-xl font-bold text-gray-900 tracking-tight">
              {props.price}
            </p>
          </div>
          <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200 active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>

    </div>
  );
}