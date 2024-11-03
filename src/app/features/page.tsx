import { getGuides } from "@/lib/guides";
import { getTips } from "@/lib/tips";
import GuidesList from "./GuidesList";
import TipsList from "./TipsList";


export default async function FeaturesPage({searchParams,}: {searchParams: { guidesPage?: string; tipsPage?: string };}) {

    const guidesPage = parseInt(searchParams.guidesPage || "1", 10);
    const tipsPage = parseInt(searchParams.tipsPage || "1", 10);

    // Fetch guides and tips data
    const { guides, totalPages: totalGuidesPages } = await getGuides(guidesPage);
    const { tips, totalPages: totalTipsPages } = await getTips(tipsPage);


    return (
        <section className="py-10 md:py-16 lg:py-20">

            <div className="text-center mb-12">
                <h2 className="text-4xl">
                    CelestQB <span className="border-b-2 border-b-purple-500">Tips</span> and <span className="border-b-2 border-b-purple-500">Guides</span> Overview
                </h2>
                <div className="max-w-xl mx-auto mt-6 space-y-6">
                    <p className="text-xl ">
                        If you are looking to make your game experience more easily and comfortable, then look no futher !
                    </p>
                    <p className="text-xl ">
                        Or are you after the fastest run or want to find the best gear? I got your back !
                    </p>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-center text-purple-500/90">Tips</h1>
                <TipsList tips={tips} totalPages={totalTipsPages} currentPage={tipsPage} />
            </div>

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-center text-purple-500/90">Guides</h1>
                <GuidesList guides={guides} totalPages={totalGuidesPages} currentPage={guidesPage} />
            </div>
        </section>
    );
}
