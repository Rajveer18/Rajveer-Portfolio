
import React from "react";

const projects = [
  {
    title: "Zomato Price Prediction",
    description:
      "A machine learning web app predicting prices of food items on Zomato using city and cuisine features.",
    image: "/public/lovable-uploads/148171ad-7d95-46a9-952e-6863f5e314e5.png",
    link: "https://github.com/Rajveer18/zomato-price-predict"
  },
  {
    title: "Bird Flight Classifier",
    description:
      "A computer vision project to classify bird species in flight using deep learning.",
    image: "/public/lovable-uploads/7309fab4-ed3f-4804-8b29-dee2d81f128a.png",
    link: "https://github.com/yourusername/bird-classifier"
  },
  {
    title: "Food Demand Forecasting",
    description:
      "Analytics solution predicting restaurant food demand with seasonality and holidays.",
    image: "/public/lovable-uploads/fa6481ab-2caa-488f-90da-16e9e6edf1e4.png",
    link: "https://github.com/yourusername/food-demand"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-heading">Projects</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-accent transition"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
