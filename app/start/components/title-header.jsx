export default function TitleHeader({ title, subtitle }) {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      <p className="text-lg mb-9">{subtitle} creados con Tailwind CSS</p>
    </>
  );
}
