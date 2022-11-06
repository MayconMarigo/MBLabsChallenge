import HorizontalAds from "../../molecules/HorizontalAds/HorizontalAds";
import TextWithDivider from "../../molecules/TextWithDivider/TextWithDivider";
import { AdsSectionProps } from "./interfaces";
const AdsSection: React.FC<AdsSectionProps> = (props) => {
  return (
    <>
      {/* [{ text: "teste" }, { text: "teste2" }] */}
      <TextWithDivider text="Fique por dentro" marginVertical={20} />
      <HorizontalAds content={props.content} />
    </>
  );
};
export default AdsSection;
