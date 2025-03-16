import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const galleryGroups = {
  scenicPaintings: {
    title: "Scenic Paintings",
    description:
      "Wallpaper and foliage project; Wood Grain floor- Alison's House; marble project; two wood-grained stools done by hand; metallic treatment- Spring Awakening",
    images: [
      "/gallery/scenic/artwork_1.png",
      "/gallery/scenic/artwork_2.png",
      "/gallery/scenic/artwork_3.png",
      "/gallery/scenic/artwork_4.png",
      "/gallery/scenic/artwork_5.png",
      "/gallery/scenic/artwork_6.png",
    ],
  },
  noisesOff: {
    title: "Noises Off - Set Design",
    description:
      "First two pictures are final products; third is a up close picture of the paint treatment and the set decorations; fourth picture is the basic house structure; fifth picture is a wall I built by myself, same one as the overhanging wall in the fourth picture; sixth picture is a drawing I did for the upstairs handrail and how it should be constructed",
    images: [
      "/gallery/noisesoff/artwork_1.png",
      "/gallery/noisesoff/artwork_2.png",
      "/gallery/noisesoff/artwork_3.png",
      "/gallery/noisesoff/artwork_4.png",
      "/gallery/noisesoff/artwork_5.png",
      "/gallery/noisesoff/artwork_6.png",
    ],
  },
  painting: {
    title: "Paint Screens, solo shop project:",
    description:
      "First two pictures are the originals used in the shop. I decided to redo them and so I took measurements and found materials laying around and drew up plans. Using 1x4 for the frame, two layers of chicken wire for structure, aluminum screen on top, and tie line for handles I made the first prototype (pictures 3 and 4). I found that the center of the screen was not strong enough to hold on its own so I added a center toggle and had one layer of chicken wire instead of two and the results are in picture 5. We also had door sweeps that I decided to attach to the edge of the screen to prevent large particulates from going over the edges of the screen. Finally, I ripped the center toggle to allow space above the drain for water to flow freely down. The final product is the 6th picture. We painted the free edges to help prevent the wood from rotting. I attached the door sweeps using screws to allow for a more even distribution of force.	",
    images: [
      "/gallery/painting/artwork_1.png",
      "/gallery/painting/artwork_2.png",
      "/gallery/painting/artwork_3.png",
      "/gallery/painting/artwork_4.png",
      "/gallery/painting/artwork_5.png",
      "/gallery/painting/artwork_6.png",
    ],
  },
  assistantStageManager: {
    title: "Assistant Stage Manager",
    description:
      "While the cast was only 5 actors, they played a combination of over 100 characters. All scene changes were done through moving the 5 columns into new positions, and introducing new props. There were over 60 props used for this show, and a majority of the tracking was through handoffs.",
    images: [
      "/gallery/assistantstage/artwork_1.png",
      "/gallery/assistantstage/artwork_2.png",
      "/gallery/assistantstage/artwork_3.png",
      "/gallery/assistantstage/artwork_4.png",
    ],
  },
  springAwakening: {
    title: "Spring Awakening - Assistant Stage Manager and Firearms Safety",
    description:
      "This was my first Assistant Stage Management position. This was a cast of 13, with all set changes done by myself and the other ASM by moving onstage furniture. We had live mics on the actors. I facilitated all props and music rehearsals. I also created the shift plot for the production.",
    images: [
      "/gallery/springawakening/artwork_1.png",
      "/gallery/springawakening/artwork_2.png",
      "/gallery/springawakening/artwork_3.png",
      "/gallery/springawakening/artwork_4.png",
      "/gallery/springawakening/artwork_5.png",
      "/gallery/springawakening/artwork_6.png",
    ],
  },
  stageManager: {
    title: "Stage Manager",
    description:
      "This production of Shakespeare's As You Like It was adapted to take place in a modern, public school setting. The premise involved a group of students taking their story back into their own hands and rewriting their own stories. This show was a cast of 15, with a large set change involving flying scenery.",
    images: [
      "/gallery/stagemanager/artwork_1.png",
      "/gallery/stagemanager/artwork_2.png",
      "/gallery/stagemanager/artwork_3.png",
      "/gallery/stagemanager/artwork_4.png",
    ],
  },
};

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 pt-6">
      <section className="py-20 bg-primary relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-32 text-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <h1 className="text-4xl font-bold text-primary-foreground mb-12 text-center mt-12">
          Gallery
        </h1>

        {Object.entries(galleryGroups).map(([key, group]) => (
          <div key={key} className="relative z-10">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start mb-12 px-4">
              <div className="flex flex-col items-center justify-start w-full lg:w-[320px] mx-4 lg:sticky lg:top-4">
                <h3 className="text-4xl font-extralight text-primary-foreground text-center mb-4">
                  {group.title}
                </h3>

                <Separator className="w-full mb-4" />

                <p className="text-sm text-primary-foreground/80 text-left font-light leading-relaxed mb-8">
                  {group.description}
                </p>
              </div>

              <div className="w-full space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.images.map((image, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <CardContent className="p-2">
                        <div className="relative w-full aspect-[4/5]">
                          <Image
                            src={image}
                            alt={`${group.title} ${index + 1}`}
                            fill
                            className="object-cover rounded"
                            priority={index <= 2}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="w-3/4 mx-auto mb-12 bg-gradient-to-r from-transparent via-primary-foreground/80 to-transparent" />
          </div>
        ))}
      </section>
    </div>
  );
}
