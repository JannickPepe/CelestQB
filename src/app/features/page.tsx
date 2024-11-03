import { getGuides } from "@/lib/guides";
import { getTips } from "@/lib/tips";
import Image from "next/image";

export default async function FeaturesPage() {
    const tips = await getTips();
    const guides = await getGuides();

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tips.map((tip) => (
                    <div key={tip.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{tip.title}</h2>
                        <p className="text-sm text-gray-600">{new Date(tip.date).toLocaleDateString()}</p>
                        <p className="mt-2">{tip.text}</p>
                        
                        {/*
                        {tip.image && (
                            <Image src={tip.image} alt={tip.title} className="mt-2 w-full size-20" height={0} width={0} />
                        )}
                         */}
                    </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-center text-purple-500/90">Guides</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {guides.map((guide) => (
                    <div key={guide.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{guide.title}</h2>
                        <p className="text-sm text-gray-600">{new Date(guide.date).toLocaleDateString()}</p>
                        <p className="mt-2">{guide.text}</p>

                        {/*
                        {guide.image && (
                            <Image src={guide.image} alt={guide.title} className="mt-2 w-full size-20" height={0} width={0} />
                        )}
                         */}
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
