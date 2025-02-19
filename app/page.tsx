import Home from "./Component/Home";

export default function App() {
  console.log("home");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      App
      <Home/>
    </div>
  );
}
