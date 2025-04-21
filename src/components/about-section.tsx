
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  // Languages
  { name: "Python", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Java", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "C", category: "language" },
  
  // Data Science Tools
  { name: "Pandas", category: "data_science" },
  { name: "NumPy", category: "data_science" },
  { name: "Matplotlib", category: "data_science" },
  { name: "Seaborn", category: "data_science" },
  { name: "TensorFlow", category: "data_science" },
  { name: "Scikit-Learn", category: "data_science" },
  
  // Data Structures & Algorithms
  { name: "Data Structures", category: "dsa" },
  { name: "Algorithms", category: "dsa" },
  
  // Data Analysis
  { name: "Exploratory Data Analysis", category: "analysis" },
  { name: "Data Cleaning", category: "analysis" },
  { name: "Feature Engineering", category: "analysis" },
  { name: "Data Visualization", category: "analysis" },
  
  // Soft Skills
  { name: "Team Work", category: "soft_skill" },
  { name: "Problem Solving", category: "soft_skill" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <Card className="flex-1">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                I'm a data enthusiast currently based in Bihar, India. My journey into the world of 
                data science started during my education at Lovely Professional University where I 
                discovered my passion for extracting meaningful insights from complex datasets.
              </p>
              <p className="text-muted-foreground text-pretty">
                Throughout my academic journey and training experiences, I've developed a strong 
                foundation in data analysis, machine learning, and software development. I'm constantly 
                learning and exploring new technologies to enhance my skills in the ever-evolving field 
                of data science.
              </p>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="px-3 py-1 text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Data Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Transforming raw data into actionable insights through exploratory analysis, 
                  visualization, and statistical methods.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Building predictive models using various ML algorithms to solve complex 
                  business problems.
                </p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Data Visualization</h4>
                <p className="text-sm text-muted-foreground">
                  Creating insightful visualizations that effectively communicate data 
                  patterns and trends.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
