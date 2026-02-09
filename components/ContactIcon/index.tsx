import Image from "next/image";
import Link from "next/link";

export default function ContactIcon() {
  return (
    <div className="fixed flex flex-col gap-4  z-50 bottom-8 right-8">
      <Link
        href="https://wa.me/919829129117"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={"/icons/whatsapp.png"}
          width={50}
          height={50}
          alt="whatsapp"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={"/icons/telephone.png"}
          width={50}
          height={50}
          alt="whatsapp"
        />
      </Link>
    </div>
  );
}
