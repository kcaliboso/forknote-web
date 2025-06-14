import HeartIcon from "./icons/heart-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div className="flex gap-2 items-center w-full justify-center text-sm tracking-wide ">
      Developed with
      <HeartIcon className="size-8 fill-primary" />|{" "}
      <p>Copyright &copy; {currentYear}</p>
    </div>
  );
}
