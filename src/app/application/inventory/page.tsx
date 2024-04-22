/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import Loading from "./skeleton";
import InventoryContent from "./inventory-content";
import createSupabaseBrowserClient from "@/lib/supabase/client";
import { toast as sonner } from "sonner";
import { FaTags } from "react-icons/fa";
import { toast } from "@/components/ui/use-toast";
import { useParts } from "@/hooks/useParts";
import { useProducts } from "@/hooks/useProducts";
import { useServices } from "@/hooks/useServices";
// import { useBranches } from "@/hooks/useBranches";
import { useUOMS } from "@/hooks/useUOMS";
import { HomeIcon } from "lucide-react";
import { PiRulerBold } from "react-icons/pi";
import { setBranchesData } from "@/redux/slices/branchesSlice";
// import { setUOMSData } from "@/redux/slices/uomsSlice";
import { useDispatch } from "react-redux";

export default function Inventory() {
  const dispatch = useDispatch();

  const { getProducts, productsData } = useProducts();
  const { getParts, partsData } = useParts();
  const { getServices, servicesData } = useServices();

  // const { getBranches, allBranchesData } = useBranches();
  const { getUOMS, allUOMSData } = useUOMS();
  // const { getBrands, allBrandsData } = useBrands();

  // const branchesData = allBranchesData.map((branch: any) => ({
  //   id: branch?.id,
  //   value: branch?.branch_name,
  //   label: branch?.branch_name,
  //   icon: HomeIcon,
  // }));
  const uomsData = allUOMSData.map((uom: any) => ({
    id: uom?.id,
    value: uom?.unit_name,
    label: uom?.unit_name,
    icon: PiRulerBold,
  }));
  // const brandsData = allBrandsData.map((brand: any) => ({
  //   id: brand?.id,
  //   value: brand?.brand_name,
  //   label: brand?.brand_name,
  //   icon: FaTags,
  // }));

  // dispatch(setBranchesData(branchesData));
  // dispatch(setUOMSData(uomsData));
  // dispatch(setBrandsData(brandsData));

  // fetch all products
  useEffect(() => {
    const { error } = getProducts();

    if (error?.message) {
      toast({
        variant: "destructive",
        title: "⚠️ Error",
        description: error.message,
      });
    }
    // getBranches();
    getUOMS();
  }, []);

  // fetch all parts
  useEffect(() => {
    const { error } = getParts();

    if (error?.message) {
      toast({
        variant: "destructive",
        title: "⚠️ Error",
        description: error.message,
      });
    }
    // getBrands();
  }, []);

  // fetch all services
  useEffect(() => {
    const { error } = getServices();

    if (error?.message) {
      toast({
        variant: "destructive",
        title: "⚠️ Error",
        description: error.message,
      });
    }
  }, []);

  // listen for changes in the database
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    const subscribedChannel1 = supabase
      .channel("products-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products" },
        (payload: any) => {
          getProducts();
        }
      )
      .subscribe();
    const subscribedChannel2 = supabase
      .channel("parts-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "parts" },
        (payload: any) => {
          getParts();
        }
      )
      .subscribe();
    const subscribedChannel3 = supabase
      .channel("services-follow-up")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "services" },
        (payload: any) => {
          getServices();
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(subscribedChannel1);
      supabase.removeChannel(subscribedChannel2);
      supabase.removeChannel(subscribedChannel3);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-3.5 no-scrollbar ">
      {productsData.length === 0 ? (
        <Loading />
      ) : (
        <InventoryContent
          dataProducts={productsData}
          dataParts={partsData}
          dataServices={servicesData}
        />
      )}
    </div>
  );
}
