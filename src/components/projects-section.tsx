import React from "react";
// Use the placeholder bird-themed images
const projects = [
  {
    title: "Zomato Price Prediction",
    description:
      "A machine learning web app predicting prices of food items on Zomato using city and cuisine features.",
    image: "/public/lovable-uploads/148171ad-7d95-46a9-952e-6863f5e314e5.png", // bird/sky placeholder
    link: "https://github.com/Rajveer18/zomato-price-predict"
  },
  {
    title: "Bird Flight Classifier",
    description:
      "A computer vision project to classify bird species in flight using deep learning.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=cover&w=600&q=80"
  },
  {
    title: "Food Demand Forecasting",
    description:
      "Analytics solution predicting restaurant food demand with seasonality and holidays.",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=cover&w=600&q=80"
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
              className="glass p-4 rounded-2xl border shadow-lg transition-transform hover:scale-105 animate-fade-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-48 object-cover mb-4"
                loading="lazy"
                style={{background: "#e9f7fb"}}
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="text-primary underline hover:text-accent transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
