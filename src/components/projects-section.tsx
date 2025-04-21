
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Replace this with suitable photo paths for each project.
const projects = [
  {
    id: 1,
    title: "Stock Market Trend Analysis and Prediction",
    timeline: "February 2023 - Present",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    description: "Created a Stock Market Trend Analysis and Prediction system that analyzes stock market trends using historical stock prices, volume, and technical indicators to predict future stock movements.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "LSTM"],
    achievements: "Achieved high prediction accuracy using feature selection, time series forecasting techniques, and deep learning models like LSTM."
  },
  {
    id: 2,
    title: "Cricket World Cup 2023 Exploratory Data Analysis",
    timeline: "Aug 2023 - Nov 2023",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
    description: "Analyzed data from the 2023 ICC Cricket World Cup to uncover insights into match performances, player stats, and top trends.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    achievements: "Created comprehensive visualizations showcasing tournament statistics, player performances, and match outcomes."
  },
  {
    id: 3,
    title: "Customer Churn Prediction for Bank",
    timeline: "November 2023 - December 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "Developed a Customer Churn Prediction system for banks that analyzes customer data including account history, transactions, age, tenure, balance etc.",
    tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "NumPy", "Seaborn"],
    achievements: "Achieved high prediction accuracy through data preprocessing, feature engineering, and ML model optimization."
  },
  {
    id: 4,
    title: "Zomato Price Prediction",
    timeline: "Jan 2024 - Mar 2024",
    image: "/lovable-uploads/148171ad-7d95-46a9-952e-6863f5e314e5.png",
    description: "Developed a machine learning model to predict menu prices on Zomato based on restaurant type, cuisine, ratings, reviews, and location, using extensive data scraping and preprocessing.",
    tools: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "BeautifulSoup"],
    achievements: "Enabled restaurant owners to competitively price menus and users to estimate meal costs accurately via web-based analytics dashboard."
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full shadow-xl glass-morphism animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription className="text-xs mt-1">{project.timeline}</CardDescription>
              </CardHeader>
              {/* Project Image */}
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
                <img
                  src={project.image}
                  alt={project.title + " image"}
                  className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                />
              </div>
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
