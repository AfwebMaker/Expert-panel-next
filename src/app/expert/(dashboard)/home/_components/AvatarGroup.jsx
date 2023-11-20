import Image from "next/image";
//images
import Avatar from '/public/images/Avatar.png'

export default function Example() {
  return (
    <div className="isolate flex -space-x-1 overflow-hidden p-2">
      <Image
        className="relative z-[0] inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={Avatar}
        alt=""
      />
      <Image
        className="relative z-[1] inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={Avatar}
        alt=""
      />
      <Image
        className="relative z-[2] inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={Avatar}
        alt=""
      />
      <Image
        className="relative z-[3] inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={Avatar}
        alt=""
      />
    </div>
  )
}
