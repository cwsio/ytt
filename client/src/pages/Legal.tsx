import { Section } from "@/components/Section";
import { useRoute } from "wouter";

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
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-navy mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">The requested policy page could not be found.</p>
        </div>
      </Section>
    );
  }

  const policy = policies[params.slug as keyof typeof policies];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-8 border-b border-border pb-6">
          {policy.title}
        </h1>
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="leading-relaxed text-muted-foreground">
            {policy.content}
          </p>
        </div>
      </Section>
    </div>
  );
}
