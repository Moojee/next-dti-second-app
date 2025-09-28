import Menumajor from "@/components/menumajor";
import Menubar from "@/components/menubar";
import { Itim, Bungee } from "next/font/google";

const itim = Itim({
  subsets: ["thai"],
  weight: ["400"],
});

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  return (
    <>
      <Menubar />
      <Menumajor />
      <h1 className={`${itim.className} text-center`}>
        {" "}
        สาขาวิชาต่าง ๆ ในมหาวิทยาลัย
      </h1>
      <hr />
      <br />
      <p className={`${bungee.className}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
        accusantium aperiam earum animi voluptatem, et mollitia molestias
        laboriosam est laudantium sunt aspernatur deserunt illum iste aliquam
        voluptas ea reprehenderit! Veritatis!
      </p>
    </>
  );
}
