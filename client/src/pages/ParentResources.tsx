import { motion } from "framer-motion";

const resources = [
  {
    title: "Snow Hotline",
    description: "Check for weather-related closings and delays",
    content: "(732) 595-1050",
    link: "tel:7325951050",
  },
  {
    title: "School Calendar",
    description: "View important dates and events",
    content: "Coming soon",
  },
  {
    title: "Donate",
    description: "Support YTT and our mission",
    content: "Give Now",
    link: "https://www.rayze.it/ytt/",
    external: true,
  },
];

export default function ParentResources() {
  return (
    <div className="w-full pt-32 pb-24 md:pb-32 bg-[#f8f7f4] min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0c1420] leading-[1.1] mb-16">
            Parent Resources
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-md border border-[#0c1420]/10"
                data-testid={`card-resource-${index}`}
              >
                <h3 className="text-xl font-serif text-[#0c1420] mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#4a5568] mb-4">
                  {resource.description}
                </p>
                {resource.link ? (
                  <a 
                    href={resource.link}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                    className="text-[#c9a227] text-sm font-medium hover:underline"
                  >
                    {resource.content}
                  </a>
                ) : (
                  <p className="text-[#c9a227] text-sm font-medium">
                    {resource.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
