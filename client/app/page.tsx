// import { Metadata } from "next";
import RainfallAnimation from "@Components/Animations/RainfallAnimation";
import ShortnerForm from "@Components/UI/ShortnerForm";

// export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <div className="w-full">
      <RainfallAnimation />
      <ShortnerForm />
    </div>
  );
};

export default Home;
