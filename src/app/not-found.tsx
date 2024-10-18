import Image from "next/image";
import pageNotFound from "../public/page-not-found.png";

export default function notFound() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={pageNotFound}
        width={1000}
        height={600}
        alt="404 Page Not Found"
      />
      {/* <h1>Page Not Found</h1> */}
    </div>
  );
}
