import FeatureSection from "@/components/FeatureSection";
import SixReasonsSection from "@/components/SixReasonsSection";
import HeroSection from "@/components/HeroSection";
import Hero2Section from "@/components/Hero2Section";
import TestimonialCta from "@/components/cta/TestimonialCta";
import FeatureGallery from "@/components/feature/FeatureGallery";


export default function Home() {
    return (
        <>
            <HeroSection/>
            <FeatureGallery />
            <TestimonialCta />
            <SixReasonsSection/>
        </>
    )
}

