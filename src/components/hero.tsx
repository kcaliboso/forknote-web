import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-1 h-[calc(100vh-96px)] flex-col py-4 w-full justify-center items-center gap-6 ">
      <div className="text-6xl lg:text-8xl font-extrabold text-center overflow-hidden will-change-transform">
        <div className="overflow-hidden">
          <p className="hero-text">
            Made by <span className="text-primary">Food Lovers.</span>
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">Shared with the World.</p>
        </div>
      </div>
      <div className="hero-button">
        <Button className="cursor-pointer font-bold text-xl px-6 py-6">
          <Link to="/auth/login">Join as a Creator</Link>
        </Button>
      </div>
    </div>
  );
}
