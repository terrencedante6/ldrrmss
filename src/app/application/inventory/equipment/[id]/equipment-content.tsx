import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UpdateEquipmentButton from "./update-equipment/update-equipment-dialog";
import DeleteEquipmentButton from "./delete-equipment/delete-equipment-dialog";
import { cn } from "@/lib/utils";

export default function EquipmentContent({ equipment, brands }: any) {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex max-w-[1840px] justify-center place-items-center">
      <div className="w-[1000px] 2xl:w-[1200px] h-[600px] 2xl:h-[680px] flex justify-center rounded-xl gap-4">
        <div className="w-[750px] 2xl:w-[950px] h-full p-6 bg-darkComponentBg flex flex-col justify-between gap-2 2xl:gap-4 rounded-xl shadow-lg border border-lightBorder relative bg-white">
          <div className="w-ful flex flex-col">
            <h2 className="flex text-lg 2xl:text-2xl font-bold place-items-center gap-3">
              {equipment[0].name}
              <div
                className={cn(
                  "text-xs rounded-full py-1 px-2 border font-normal flex place-items-center gap-1 cursor-pointer",
                  equipment[0].status === "Available"
                    ? "text-green-500 bg-green-500 bg-opacity-20 border-green-500"
                    : equipment[0].status === "Unavailable"
                    ? "text-red-500 bg-red-500 bg-opacity-20 border-red-500"
                    : "text-red-500 bg-red-500 bg-opacity-20 border-red-500"
                )}
              >
                {equipment[0].status}
              </div>
            </h2>
            <p className="text-sm 2xl:text-md text-slate-400 font-bold">
              Type: Equipment
            </p>
          </div>
          {/* <code>{JSON.stringify(equipment, null, 2)}</code> */}

          <div className="w-full h-full flex flex-col gap-2 2xl:gap-4">
            <div className="w-full flex gap-4">
              <div className="w-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600  flex justify-center place-items-center w-fit gap-1">
                  Quantity
                </span>
                <div className="w-full flex justify-between place-items-center min-w-0  bg-lightBorder rounded-lg bg-gray-200">
                  <p className="text-md 2xl:text-lg text-black gap-2 max-w-[260px] p-3 truncate">
                    {equipment[0].stock_quantity}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600 flex justify-center place-items-center w-fit gap-1">
                  Created At
                </span>
                <div className="w-full flex justify-between place-items-center min-w-0 bg-lightBorder rounded-lg bg-gray-200">
                  <p className="text-md 2xl:text-lg text-black gap-2 p-3 max-w-[260px] truncate">
                    {equipment[0].created_at}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex gap-7">
              <div className="w-full h-full flex flex-col gap-2">
                <span className="text-sm font-semibold text-zinc-600 flex justify-center place-items-center w-fit gap-1">
                  Description
                </span>
                <div className="w-full h-full min-w-0 bg-gray-200 rounded-lg p-3">
                  <p className="text-md 2xl:text-lg text-black line-clamp-4">
                    {equipment[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-4 justify-end">
            <DeleteEquipmentButton foodSupplyData={equipment[0]} />
            <UpdateEquipmentButton foodSupplyData={equipment[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
