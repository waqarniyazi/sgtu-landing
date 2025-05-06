import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ApplyDialog } from "@/components/apply-dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sikkim Global Technical University (SGTU), our mission, values, and history",
}

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in all aspects of education, research, and innovation.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity, ethics, and transparency in all our actions.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Innovation",
      description: "We foster a culture of innovation and creativity to address real-world challenges.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Inclusivity",
      description: "We embrace diversity and promote an inclusive environment for all students and staff.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="heading-1 mb-4">About SGTU</h1>
                <p className="text-lg text-muted-foreground">
                  Sikkim Global Technical University (SGTU) is a premier institution dedicated to providing quality
                  education and fostering innovation in technical and professional fields.
                </p>
                <div className="space-y-4 pt-4 md:pt-12">
                                <h2 className="heading-4 text-primary">Accredited By</h2>
                <div className="flex flex-col md:flex-row flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/AIU Logo.png"
                      alt="Association of Indian Universities"
                      width={30}
                      height={30}
                      className="h-15 w-15"
                    />
                    <p className="text-xs text-muted-foreground">
                      Association of Indian Universities
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/UGC Logo.png"
                      alt="University Grants Commission"
                      width={30}
                      height={30}
                      className="h-15 w-15"
                    />
                    <p className="text-xs text-muted-foreground">
                      University Grants Commission
                    </p>
                  </div>
                </div>
                                </div>
              </div>

              
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/about.jpg?height=300&width=500" alt="SGTU Campus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="heading-2 text-primary">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide accessible, affordable, and quality education that empowers students with knowledge,
                  skills, and values to excel in their chosen fields and contribute to society.
                </p>
                <p className="text-muted-foreground">
                  We are committed to fostering a learning environment that promotes critical thinking, innovation, and
                  ethical leadership, preparing students to address the challenges of a rapidly evolving global
                  landscape.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="heading-2 text-primary">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be a globally recognized institution of excellence in education, research, and innovation,
                  producing graduates who are industry-ready, socially responsible, and capable of making significant
                  contributions to the advancement of society.
                </p>
                <p className="text-muted-foreground">
                  We aspire to create a vibrant academic community that fosters collaboration, inclusivity, and lifelong
                  learning, driving positive change in the region and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These values guide our actions and decisions as we strive to fulfill our mission and vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="flex flex-row items-start gap-4">
                    {value.icon}
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our History</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The journey of Sikkim Global Technical University
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <p className="text-muted-foreground">
                  Established in 2023, Sikkim Global Technical University (SGTU) was founded with a vision to provide
                  quality technical education in the northeastern region of India. The university was established to
                  address the growing demand for skilled professionals in various technical and professional fields.
                </p>
                <p className="text-muted-foreground">
                  Since its inception, SGTU has been committed to academic excellence, innovation, and research. The
                  university has grown rapidly, expanding its academic offerings and infrastructure to provide students
                  with a comprehensive learning experience.
                </p>
                <p className="text-muted-foreground">
                  Today, SGTU stands as a testament to the power of education in transforming lives and communities.
                  With a diverse student body, dedicated faculty, and state-of-the-art facilities, the university
                  continues to fulfill its mission of empowering students to achieve their full potential.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/heroimg.jpg?height=300&width=500" alt="SGTU History" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="heading-2 mb-6">Join Our Academic Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be a part of SGTU's journey towards excellence in education and innovation
            </p>
            <ApplyDialog>
              <Button size="lg" variant="secondary" className="gap-2">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Button>
            </ApplyDialog>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
