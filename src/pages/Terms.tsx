import { Layout } from "@/components/layout/Layout";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function Terms() {
  return (
    <Layout>
      <div className="container py-8">
        <Breadcrumb items={[{ label: "Terms of Service" }]} />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              Last updated: January 2026
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ToolHub 2026, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of Services</h2>
              <p>
                You agree to use our tools for lawful purposes only. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring your use complies with all applicable laws</li>
                <li>Respecting intellectual property rights</li>
                <li>Not using the tools for malicious purposes</li>
                <li>Not attempting to bypass any security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                Content generated using our tools belongs to you. However, you are responsible for ensuring your use of generated content complies with applicable copyright and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
              <p>
                ToolHub 2026 is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
              <p>
                For questions about these Terms, contact us at legal@toolhub2026.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
