import Elements from "@/components/Elements";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Added margin-top to prevent overlap with fixed Navbar */}
      <div className="mt-24 md:mt-28">
        <Elements />
      </div>
    </>
  );
}
