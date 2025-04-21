
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Stock Market Trend Analysis and Prediction",
    timeline: "February 2023 - Present",
    description: "Created a Stock Market Trend Analysis and Prediction system that analyzes stock market trends using historical stock prices, volume, and technical indicators to predict future stock movements.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "LSTM"],
    achievements: "Achieved high prediction accuracy using feature selection, time series forecasting techniques, and deep learning models like LSTM."
  },
  {
    id: 2,
    title: "Cricket World Cup 2023 Exploratory Data Analysis",
    timeline: "Aug 2023 - Nov 2023",
    description: "Analyzed data from the 2023 ICC Cricket World Cup to uncover insights into match performances, player stats, and top trends.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    achievements: "Created comprehensive visualizations showcasing tournament statistics, player performances, and match outcomes."
  },
  {
    id: 3,
    title: "Customer Churn Prediction for Bank",
    timeline: "November 2023 - December 2023",
    description: "Developed a Customer Churn Prediction system for banks that analyzes customer data including account history, transactions, age, tenure, balance etc.",
    tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "NumPy", "Seaborn"],
    achievements: "Achieved high prediction accuracy through data preprocessing, feature engineering, and ML model optimization."
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription className="text-xs mt-1">{project.timeline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="px-2 py-0.5 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm">
                  <span className="font-medium">Key Achievement:</span>{" "}
                  <span className="text-muted-foreground">{project.achievements}</span>
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
