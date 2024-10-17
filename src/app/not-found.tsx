import Image from "next/image";
import pageNotFound from '../public/page-not-found.png'


export default function notFound() {
    return (
        <div>
            <Image
            src={pageNotFound}
            width={1400}
            height={1000}
            alt="404 Page Not Found"
            />
        {/* <h1>Page Not Found</h1> */}
        </div>
        
    )
}