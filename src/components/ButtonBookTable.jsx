export default function ButtonBookTable({ children }) {
  return (
    <button className=" text-amber-50 text-2xl font-medium bg-amber-500 py-3 px-9  hover:bg-amber-600 transition cursor-pointer uppercase">
      {children}
    </button>
  );
}
