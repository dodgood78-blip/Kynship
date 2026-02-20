import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import TrustSection from '../components/TrustSection';
import StudioSection from '../components/StudioSection';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>كينشيب | مطابخ وغرف ملابس فاخرة بالزقازيق</title>
                <meta
                    name="description"
                    content="كينشيب - تصميم وتنفيذ مطابخ وغرف ملابس فاخرة بأعلى جودة في الزقازيق، مصر. تصميم 3D مجاني ومعاينة مجانية."
                />
                <meta property="og:title" content="كينشيب | مطابخ وغرف ملابس فاخرة" />
                <meta
                    property="og:description"
                    content="نصمم مساحتك بدقة في كل تفصيلة. مطابخ وغرف ملابس بتصميم مخصص وجودة تدوم."
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ar_EG" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://kynship.com" />
            </Head>

            <HeroSection />
            <CategoriesSection />
            <TrustSection />
            <StudioSection />
            <ReviewsSection />
            <CTASection />
        </>
    );
}
