import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = ({ data }) => {
  return (
    <>
      <section id="features" className="yogesh py-16 md:py-20 lg:py-28">
        <div className=" container">
          <SectionTitle
            title={data.title}
            paragraph={data.paragraph}
            center
          />

          <div className="yogesh grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
