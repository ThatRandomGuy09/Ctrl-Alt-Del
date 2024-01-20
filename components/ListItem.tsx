'use client';
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import Image from "next/image"; // Import Image from 'next/image'
import { MouseEvent } from "react";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default behavior of the button
    router.push(href);
  };

  return (
    <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover"
          fill
          src={image}
          alt="Image"
          width={64} // Set the width and height for the Image component
          height={64}
        />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-% group-hover:opacity-100 hover:scale-110">
        <FaPlay />
      </div>
    </button>
  );
};

export default ListItem;
