import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Modern Development",
    description: "Built with React, TypeScript, and Tailwind CSS",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized for performance and user experience",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Beautiful Design",
    description: "Stunning visuals and smooth animations",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Amazing Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};