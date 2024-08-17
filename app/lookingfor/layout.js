export default function LookingForLayout({ children }) {
  return (
    <>
      <div className="bg-gradient-to-tl from-indigo-400 via-purple-300 to-blue-400 bg-fixed min-h-dvh">
        {children}
      </div>
    </>
  );
}
