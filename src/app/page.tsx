import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { PhoneIcon, MailIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 w-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
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
        <div className="text-center relative z-10 px-4 max-w-full">
          <h1 className="text-6xl md:text-6xl text-4xl font-bold text-primary-foreground mb-4 animate-fade-in-up break-words">
            Meredith Eliana Hataway
          </h1>
          <p className="text-xl md:text-3xl text-secondary-foreground animate-fade-in-up animation-delay-300">
            Stage Manager & Technical Director
          </p>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I&apos;m a Stage Manager and Technician, and my hope is to help
            create a space where people are willing to learn and try new things!
            I have a Bachelor of Arts in Theatre with a concentration in
            Production from Jacksonville State University. I am a fast learner,
            a team player, and a dedicated worker who wants to make and share
            art with the world.
            <br />
            <br />I have a passion for creating and sharing art with the world.
            I believe that art is a powerful tool for communication and
            connection, and I am committed to using my skills to make a positive
            impact on the world.
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
          <div className="grid gap-8 justify-center items-center">
            <Card className="transform transition-all duration-300 hover:scale-105 md:w-1/2 mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  BA in Theatre with a Concentration in Production, Minor in
                  Criminal Justice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jacksonville State University- Jacksonville, AL, 2019 - 2024
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

      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Get in Touch</h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-2 items-center">
            <PhoneIcon className="w-6 h-6" />
            <Link
              href="tel:+3342423333"
              className="text-primary font-medium hover:underline hover:text-primary hover:scale-x-105 transition-all duration-300"
            >
              +1 (334) 242-3333
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <MailIcon className="w-6 h-6" />
            <a
              href="mailto:el.hataway13@gmail.com"
              className="text-primary font-medium hover:underline hover:text-primary hover:scale-x-105 transition-all duration-300"
            >
              el.hataway13@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
