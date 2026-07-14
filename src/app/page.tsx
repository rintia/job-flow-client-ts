import CTA from "@/components/home/CTA";
import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseJobFlow from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
   <>
    <Hero />
    <Stats />
    <FeaturedJobs></FeaturedJobs>
    <Categories/>
    <HowItWorks/>
    <WhyChooseJobFlow/>
    <Testimonials/>
    <FAQ/>
    <CTA/>
   </>
  );
}