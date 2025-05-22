import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-1 h-full flex-col py-36 justify-center items-center gap-6"
    >
      <div className="text-8xl font-extrabold text-center overflow-hidden will-change-transform">
        <div className="overflow-hidden">
          <p className="hero-text">
            Made by <span className="text-primary">Food Lovers.</span>
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">Shared with the World.</p>
        </div>
      </div>
      <Button
        className="cursor-pointer font-bold text-xl px-6 py-6 opacity-0 hero-button"
        asChild
      >
        <Link to="/auth/login">Join as a Creator</Link>
      </Button>
    </div>
  );
}
