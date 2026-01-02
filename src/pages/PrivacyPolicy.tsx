import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container py-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Last updated: January 2026
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                ToolHub 2026 is designed to prioritize your privacy. We collect minimal information necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage data (anonymous analytics)</li>
                <li>Input data you provide to our tools (processed locally when possible)</li>
                <li>API keys you voluntarily provide (never stored on our servers)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our tools</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Respond to your requests and support needs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. Most of our tools process data client-side, meaning your information never leaves your browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
              <p>
                Some tools may integrate with third-party services (e.g., OpenAI). When you use these integrations, your data is subject to those services' privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@toolhub2026.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
