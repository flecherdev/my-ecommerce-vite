
const Card = (data) => {
  const { price, images, title, category } = data.data;
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={title} />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 text-xs text-black">+</div>
      </figure>
      <p className="flex justify-between text-black ">
        <span className="text-xs font-light px-3">{title}</span>
        <span className="text-lg font-medium px-2">${price}</span>
      </p>
    </div>
  )
}

export default Card