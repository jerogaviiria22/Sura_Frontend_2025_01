import SuraMainCarrousel from "@/components/organisms/SuraMainCarrousel";
import CategoriesLinio from "@/components/organisms/CategoriesLinio";
import Image from "next/image";
import LastSeen from "@/components/organisms/LastSeenLinio";
import DiscountsTeconology from "@/components/organisms/DiscountsTecnologyLinio";
import DontMissIt from "@/components/organisms/DontMissItLinio";
import RenewYourHome from "@/components/organisms/RenewYourHome";
import DownCategories from "@/components/organisms/DownCategoriesLinio";
import FollowUs from "@/components/organisms/FollowUsLinio";
import CreditsLinio from "@/components/organisms/CreditsLinio";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <><SuraMainCarrousel /><CategoriesLinio /> <LastSeen /> <DiscountsTeconology /> <DontMissIt /> <RenewYourHome /> <DownCategories /> <FollowUs />  <CreditsLinio /> <Footer  /> </>
  );
}
