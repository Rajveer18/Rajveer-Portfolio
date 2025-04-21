
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "Computer Science and Engineering",
    duration: "2022-2026",
    location: "Jalandhar, Punjab"
  },
  {
    id: 2,
    institution: "Sowan High School Buxar Bihar",
    degree: "Intermediate With Science - Percentage: 65%",
    duration: "2021-2022",
    location: "Buxar, Bihar"
  },
  {
    id: 3,
    institution: "DAV Public School",
    degree: "Matric - Percentage: 73%",
    duration: "2019-2020",
    location: "Buxar, Bihar"
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Complete Interview Preparation",
    issuer: "Geeks for Geeks",
    date: "May 2023 - August 2023"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "Coursera",
    date: "Nov 2022 - Jan 2023"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <Card key={edu.id} className="relative overflow-hidden group">
                  <span className="absolute right-0 top-0 w-4 h-4 rounded-bl bg-accent opacity-75"></span>
                  <CardHeader>
                    <CardTitle className="text-lg flex justify-between items-start">
                      <div>{edu.institution}</div>
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certificates Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Certifications</h3>
            <div className="space-y-4">
              {certificatesData.map((cert) => (
                <Card key={cert.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>Issued by {cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Summer Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Complete Interview Preparation (Geeks For Geeks)</h4>
                      <p className="text-sm text-muted-foreground mt-1">May 2023 - August 2023</p>
                      <p className="text-sm mt-2">
                        The GeeksforGeeks Interview Preparation course is designed to comprehensively equip students with both technical
                        and behavioral interviews. It emphasizes building the core skills necessary for solving coding challenges, designing optimal
                        algorithms, and tackling various interview questions with confidence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
