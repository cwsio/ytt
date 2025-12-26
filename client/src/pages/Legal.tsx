import { useRoute, Link } from "wouter";

const policies = {
  nondiscrimination: {
    title: "Nondiscrimination Policy",
    content: "Yeshiva Tiferes Torah admits students of any race, color, national and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs."
  },
  privacy: {
    title: "Privacy Policy",
    content: "We respect your privacy. Any personal information collected by Yeshiva Tiferes Torah is used solely for school administration purposes and communication with parents and alumni. We do not sell or share personal information with third parties unless required by law."
  },
  accessibility: {
    title: "Accessibility Statement",
    content: "Yeshiva Tiferes Torah is committed to ensuring that our website is accessible to everyone. We are continuously working to improve the user experience for everyone and applying relevant accessibility standards."
  }
};

export default function Legal() {
  const [match, params] = useRoute("/legal/:slug");
  
  if (!match || !params || !Object.keys(policies).includes(params.slug)) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-8">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-[#0c1420] mb-4">Page Not Found</h1>
          <p className="text-[#4a5568] mb-8">The requested policy page could not be found.</p>
          <Link href="/" className="text-[#c9a227] text-sm uppercase tracking-[0.15em] hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const policy = policies[params.slug as keyof typeof policies];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-8 md:px-16">
        <Link 
          href="/" 
          className="text-[#c9a227] text-xs uppercase tracking-[0.2em] mb-8 inline-block hover:underline"
          data-testid="link-back-home"
        >
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0c1420] mb-12 leading-tight">
          {policy.title}
        </h1>
        
        <div className="text-lg text-[#4a5568] leading-relaxed">
          <p>{policy.content}</p>
        </div>
      </div>
    </div>
  );
}
