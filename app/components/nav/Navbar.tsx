import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const redressed = Redressed({subsets: ['latin'], weight: ["400"]})

const NavBar = () => {
    return ( 
        <div className="
        sticky
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
        ">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link className={`${redressed.className} font-bold  text-2xl`} href="/">E-Shop</Link>
                        <div className="hidden md:block">Search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartCount />
                            <UserMenu />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
 
export default NavBar;