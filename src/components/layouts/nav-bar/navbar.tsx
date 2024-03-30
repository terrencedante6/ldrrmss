import { MainNav } from "@/components/application/main-nav";
import { UserNav } from "@/components/application/user-nav";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex w-full h-fit justify-center place-items-center border-b items-center px-4 py-4 bg-white sticky top-0 z-[20]">
      <div className="w-[90%] flex justify-between place-items-center">
        <MainNav className="mx-6" />
        <div className="flex items-center gap-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
