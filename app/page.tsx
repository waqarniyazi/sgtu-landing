import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplyDialog } from "@/components/apply-dialog"
import { courseData } from "@/lib/course-data"
import { ArrowRight, BookOpen, GraduationCap, School, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  // Get a few courses from each category for the homepage
  const featuredCourses = Object.entries(courseData)
    .slice(0, 4)
    .map(([category, courses]) => ({
      category,
      courses: courses.slice(0, 3),
    }))

  // Testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "B.Tech Computer Science, 2023",
      content:
        "My experience at SGTU has been transformative. The faculty's expertise and the practical approach to learning have prepared me well for the industry.",
      image: "/rahul.png?height=100&width=100",
    },
    {
      name: "Priya Patel",
      role: "MBA Marketing, 2022",
      content:
        "SGTU provided me with not just theoretical knowledge but also practical insights through industry connections and internships. I'm grateful for the opportunities.",
      image: "/priya.png?height=100&width=100",
    },
    {
      name: "Amit Kumar",
      role: "M.Tech Electrical, 2023",
      content:
        "The research facilities and guidance from professors at SGTU are exceptional. I was able to publish two papers during my course.",
      image: "/amit.png?height=100&width=100",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="heading-1 text-primary">Sikkim Global Technical University</h1>
                <p className="text-xl text-muted-foreground">
                  Empowering futures through quality education and innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ApplyDialog>
                    <Button size="lg" className="gap-2">
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </ApplyDialog>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/programmes">Explore Programmes</Link>
                  </Button>
                </div>
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
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/heroimg.jpg?height=400&width=600"
                  alt="SGTU Campus"
                  fill
                  className="object-cover"
                  priority
                />
                
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-muted-foreground">Programmes</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">2000+</h3>
                  <p className="text-muted-foreground">Students</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <School className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p className="text-muted-foreground">Departments</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">100+</h3>
                  <p className="text-muted-foreground">Faculty</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programmes Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Programmes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of programmes designed to prepare you for a successful career
              </p>
            </div>

            <Tabs defaultValue={featuredCourses[0]?.category} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {featuredCourses.map(({ category }) => (
                  <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {featuredCourses.map(({ category, courses }) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <Card key={course.name} className="h-full">
                        <CardHeader>
                          <CardTitle>{course.name}</CardTitle>
                          <CardDescription>{category}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="font-medium">Duration:</div>
                            <div>{course.duration}</div>
                            <div className="font-medium">Fees:</div>
                            <div>₹{course.fees}/year</div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <ApplyDialog>
                            <Button variant="outline" className="w-full">
                              Apply Now
                            </Button>
                          </ApplyDialog>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button asChild>
                      <Link href="/programmes">
                        View All Programmes <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">What Our Students Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our alumni about their experiences at SGTU
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="heading-2 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join SGTU and take the first step towards a successful career
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
