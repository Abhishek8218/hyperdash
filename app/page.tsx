import { Banner } from "@/src/components/banner";
import { Hero } from "@/src/components/hero";
import { Showcase } from "@/src/components/showcase";
import CarSpecifications from "@/src/components/specification";
import { StorySlider } from "@/src/components/storySlider";


export default function Home() {
  return (
    <div >
    <Hero/>
    <Showcase/>
    <CarSpecifications/>
    <Banner/>
    <StorySlider/>
    </div>
  );
}
