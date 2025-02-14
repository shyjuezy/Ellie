import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="a" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
              <linearGradient id="b" gradientTransform="rotate(135)">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <path fill="url(#a)" d="M0 0h1000v1000H0z" />
            <g fill="url(#b)" opacity=".5">
              <circle cx="500" cy="100" r="300" />
              <circle cx="900" cy="600" r="200" />
              <circle cx="100" cy="800" r="250" />
            </g>
          </svg>
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Meredith Eliana Hataway
          </h1>
          <p className="text-3xl text-secondary-foreground animate-fade-in-up animation-delay-300">
            Stage Manager & Production Manager
          </p>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I&apos;m a passionate visual artist with over 10 years of experience
            in illustration and digital art. My work focuses on blending
            traditional techniques with modern digital tools to create unique
            and captivating pieces that push the boundaries of contemporary art.
          </p>
        </div>
      </section>

      <section
        id="education"
        className="py-20 bg-secondary relative overflow-hidden"
      >
        <svg
          className="absolute top-0 left-0 w-full h-32 text-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,74.7C840,64,960,96,1080,122.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Master of Fine Arts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  University of Arts, 2018-2020
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Bachelor of Visual Arts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  State College of Design, 2014-2018
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-background transform rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,74.7C840,64,960,96,1080,122.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </section>

      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Senior Illustrator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creative Studios Inc., 2020-Present
                </p>
                <p className="text-foreground">
                  Lead illustrator for major publishing projects and advertising
                  campaigns, specializing in digital illustration and concept
                  art.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Freelance Artist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Self-employed, 2018-2020
                </p>
                <p className="text-foreground">
                  Created custom artwork for various clients, including book
                  covers, editorial illustrations, and brand identity designs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="py-20 bg-primary relative overflow-hidden"
      >
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
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-primary-foreground mb-12 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-2">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={`/gallery/artwork_${i}.jpg`}
                      alt={`Artwork ${i}`}
                      fill
                      className="object-cover rounded"
                      priority={i <= 3}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Get in Touch</h2>
        <Button size="lg">Contact Me</Button>
      </section>
    </div>
  );
}
