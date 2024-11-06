import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import { CustomMetaData } from "../components/MetaData/CustomMetaData";
import ListingCardUI from "@Components/ListingCards/ListingCardUI";
import RainfallAnimation from "@Components/Animations/RainfallAnimation";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <div className="w-full">
      <RainfallAnimation />
      <ListingCardUI />
    </div>
  );
};

export default Home;
