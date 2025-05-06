import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ApplyDialog } from "@/components/apply-dialog"
import { courseData } from "@/lib/course-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore our diverse range of academic programmes at Sikkim Global Technical University (SGTU)",
}

export default function ProgrammesPage() {
  const categories = Object.keys(courseData)

  return (
    <>
      <SiteHeader />
      <main className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Our Programmes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of programmes designed to prepare you for a successful career
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <div className="overflow-x-auto pb-4">
            <TabsList className="inline-flex w-max">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm md:text-base whitespace-nowrap">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData[category].map((course) => (
                  <Card key={course.name} className="h-full">
                    <CardHeader>
                      <CardTitle>{course.name}</CardTitle>
                      <CardDescription>{category}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">Duration:</div>
                        <div>{course.duration}</div>
                        <div className="font-medium">Eligibility:</div>
                        <div>{course.eligibility}</div>
                        <div className="font-medium">Fees:</div>
                        <div>₹{course.fees}/year</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <ApplyDialog>
                        <Button className="w-full">Apply Now</Button>
                      </ApplyDialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="heading-3 mb-4">Additional Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Particulars</th>
                  <th className="text-left py-2 px-4">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Registration Fee / Year</td>
                  <td className="py-2 px-4">500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Enrollment Fee</td>
                  <td className="py-2 px-4">1000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">U.D Fund</td>
                  <td className="py-2 px-4">0</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Exam Fee / Year</td>
                  <td className="py-2 px-4">1500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
