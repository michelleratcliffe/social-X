import Image from "next/image"

export default function notFound() {
    return (
        <Image
        src="./page-not-found.png"
        width={1400}
        height={1000}
        alt="404 Page Not Found"
        />
    )
}