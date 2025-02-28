import { useEffect } from "react";

export default function AnNFT({ nft }: any) {
  useEffect(() => {
    console.log(nft);
  }, []);
  return (
    <div className="flex flex-col w-1/4 p-3 border-2 border-black">
      <img src={nft.image} />
      <div className="flex justify-between mt-2">
        <p>{nft.name}</p>
        <p className="font-bold">{nft.symbol}</p>
      </div>
    </div>
  );
}
