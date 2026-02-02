import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Oryx services, you agree to be bound by these Terms of Service.",
      "If you are using our services on behalf of a business, you represent that you have authority to bind that business to these terms.",
      "We may update these terms from time to time. Continued use after changes constitutes acceptance."
    ]
  },
  {
    title: "Description of Services",
    content: [
      "Oryx provides AI-powered business solutions including AI receptionists, review generation, web design, and automation services.",
      "Service availability and features may vary based on your subscription plan.",
      "We reserve the right to modify, suspend, or discontinue services with reasonable notice."
    ]
  },
  {
    title: "Account Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree to provide accurate and complete information when creating your account.",
      "You must notify us immediately of any unauthorized use of your account.",
      "You are responsible for all activities that occur under your account."
    ]
  },
  {
    title: "Acceptable Use",
    content: [
      "You agree not to use our services for any unlawful purpose.",
      "You will not attempt to gain unauthorized access to our systems or other users' accounts.",
      "You will not transmit malicious code or interfere with service operation.",
      "You will not use our AI services to generate harmful, misleading, or fraudulent content."
    ]
  },
  {
    title: "Payment Terms",
    content: [
      "Paid services are billed according to the pricing plan you select.",
      "All fees are non-refundable unless otherwise specified or required by law.",
      "We may change pricing with 30 days notice. Changes apply at your next billing cycle.",
      "Failure to pay may result in suspension or termination of services."
    ]
  },
  {
    title: "Intellectual Property",
    content: [
      "Oryx retains all rights to our technology, software, and branding.",
      "You retain ownership of your data and content submitted to our platform.",
      "You grant us a license to use your content as necessary to provide our services.",
      "AI-generated content created through our services may be used by you for business purposes."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "Our services are provided 'as is' without warranties of any kind.",
      "We are not liable for indirect, incidental, or consequential damages.",
      "Our total liability is limited to the amount you paid us in the 12 months before the claim.",
      "Some jurisdictions do not allow certain limitations, so these may not apply to you."
    ]
  },
  {
    title: "Termination",
    content: [
      "You may cancel your account at any time through your dashboard or by contacting support.",
      "We may terminate or suspend your account for violation of these terms.",
      "Upon termination, your right to use the services ceases immediately.",
      "We will retain your data for 30 days after termination to allow for export."
    ]
  }
];

const TermsOfService = () => {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Last updated: February 1, 2026. Please read these terms carefully before using Oryx services."
      showCTA={false}
    >
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10"
            >
              <h2 className="text-xl font-display font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
