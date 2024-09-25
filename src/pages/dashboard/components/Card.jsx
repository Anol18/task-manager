export default function Card({ title, amount }) {
  return (
    <div className="w-[150px] h-[100px] bg-lime-100 flex flex-col place-items-center justify-center gap-3">
      <span className="text-lg">{title}</span>
      <span className="text-lg">{amount}</span>
    </div>
  );
}
