"use-client";

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails"
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";

interface ItemContentProps{
    item: CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] py-4 items-center">
        <div className="cols-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div></div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}
                </Link>
                <div>{item.selectedImg.color}</div>
                <div className="w-[70px]">
                    <button className="text-slate-500 underline">Remove</button>
                </div>
            </div>
        </div>
        <div>{formatPrice(item.price)}</div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ItemContent