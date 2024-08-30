import Elements from "@/components/Elements";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Added padding to the top to ensure Elements doesn't overlap with the Navbar */}
      <div className="pt-24 md:pt-28">
        <Elements />
      </div>
    </>
  );
}
