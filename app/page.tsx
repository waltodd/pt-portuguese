import Link from "next/link";
import Logo from "@/assets/solidity-logo.png"
import Image from "next/image";
export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center items-center">
       <Image src={Logo} width={100} height={100} alt="Solidity logo" />
      <div className="flex flex-row items-start justify-center">
     
        <div className=" w-3 h-3 mr-2 mt-8 rounded-full bg-[#2B247C]">
          
        </div>
        <h1 className=" text-[72px] py-2 font-bold  text-[#2B247C]">
          Solidity
        </h1>
      </div>

      <p className="text-fd-muted-foreground text-[18px] text-center">
        Uma linguagem de programação de chaves estaticamente tipada, <br />{" "}
        projetada para desenvolver contratos inteligentes que rodam no{" "}
        <Link
          href="https://ethereum.org/"
          className="text-fd-foreground font-semibold underline text-[#2B247C] "
        >
          Ethereum.
        </Link>{" "}
      </p>
      <div className="flex items-center justify-center mt-4">
        <Link href="/docs" className="text-fd-foreground font-semibold ">
          <div className="px-6 py-4 rounded-lg bg-[#2B247C]  text-white">
            Ler a Documentação
          </div>
        </Link>

       
      </div>
    </main>
  );
}
