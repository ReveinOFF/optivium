"use server";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Terms");
  const pathname = (await headers()).get("x-pathname") as string;

  return {
    title: t("meta.title"),
    description: t("meta.description"),

    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: process.env.SITE_URL + pathname,
    },

    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
      card: "summary",
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: process.env.SITE_URL + pathname,
    },
  };
}

export default async function TermsPolicy() {
  const t = await getTranslations("Terms");

  return (
    <>
      <section className="bg-[#031827] text-center py-4 rounded-br-3xl rounded-bl-3xl mx-2.5">
        <div className="container grid gap-2">
          <h1 className="title">Terms of Service</h1>
          <p className="content max-w-[700px] mx-auto">
            These Terms of Service govern your use of our website and services.
            By accessing or using our Service, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, please do
            not use the Service.
          </p>
          <p className="mb-4 italic text-sm desc text-right max-sm:text-center">
            Effective Date: Sep 20, 2025
          </p>
        </div>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          1. Acceptance of Terms
        </h2>
        <p className="content">
          By accessing or using our Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          2. Use of the Service
        </h2>
        <p className="content">
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You must not:
        </p>
        <ul className="list">
          <li>Violate any applicable laws or regulations.</li>
          <li>Use the Service for any fraudulent or harmful purposes.</li>
          <li>Attempt to gain unauthorized access to our systems or data.</li>
          <li>Interfere with the proper functioning of the Service.</li>
        </ul>
        <p>
          <strong>Subscription and Access:</strong>{" "}
          <span className="content">
            SpreadHunt is available in a free version with limited functionality
            without requiring a subscription. To access all features, you can
            purchase a
          </span>{" "}
          <Link href="/subscription" className="underline hover:text-[#9ADE20]">
            Subscription
          </Link>
          .
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          3. Subscription and Access
        </h2>
        <p className="content">
          SpreadHunt is available in a free version with limited functionality
          without requiring a subscription.
        </p>
        <p className="content">
          To access all features, you may purchase a subscription via{" "}
          <Link href="/subscription">Subscription</Link>.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          4. Intellectual Property
        </h2>
        <p className="content">
          All content on the Service, including text, graphics, logos, icons,
          and software, is the property of Spread Hunt or its licensors and is
          protected by intellectual property laws.
        </p>
        <p className="content">
          You may not copy, reproduce, distribute, or create derivative works
          from any content without prior written permission.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          5. User Content (if applicable)
        </h2>
        <p className="content">
          If you submit or post any content (e.g. comments, feedback, media),
          you grant us a worldwide, royalty-free, non-exclusive license to use,
          reproduce, modify, and display that content in connection with the
          Service.
        </p>
        <p className="content">
          You are solely responsible for the content you submit and must not:
        </p>
        <ul className="list">
          <li>Infringe on any intellectual property rights.</li>
          <li>Post harmful, abusive, or unlawful material.</li>
          <li>Impersonate another person or misrepresent your affiliation.</li>
        </ul>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          6. Termination
        </h2>
        <p className="content">
          We may suspend or terminate your access to the Service at any time
          without prior notice if we believe you have violated these Terms or
          engaged in any harmful behavior.
        </p>
        <p className="content">
          You may also stop using the Service at any time.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          7. Disclaimer of Warranties
        </h2>
        <p className="content">
          The Service is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied. We do not
          guarantee that the Service will be error-free, secure, or continuously
          available.
        </p>
        <p className="content">
          Use of our parser does not guarantee any profit. Our service is a tool
          for spread monitoring and providing arbitrage information, but does
          not ensure guaranteed income. You are solely responsible for assessing
          risks and performing your own analysis before making any trading
          decisions. We are not liable for any financial losses related to your
          use of our service.
        </p>
        <p className="content">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the Service.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          8. Limitation of Liability
        </h2>
        <p className="content">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the Service.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          9. Links to Other Websites
        </h2>
        <p className="content">
          Our Service may contain links to third-party websites. We are not
          responsible for the content, policies, or practices of any third-party
          sites or services.
        </p>
        <p className="content">
          We strongly recommend reviewing the terms and privacy policies of
          those websites.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          10. Changes to These Terms
        </h2>
        <p className="content">
          We reserve the right to modify these Terms at any time. Updated
          versions will be posted on this page with a new effective date.
        </p>
        <p className="content">
          We may also notify users of significant changes through the Posts
          section of our website.
        </p>
      </section>

      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          11. Governing Law
        </h2>
        <p className="content">
          These Terms are governed by the laws of Ukraine, without regard to its
          conflict of law provisions.
        </p>
      </section>
      <section className="py-10 max-w-4xl container">
        <h2 className="text-3xl font-bold mb-6 text-[#9ADE20]">
          12. Contact Us
        </h2>
        <p className="content">
          If you have any questions or concerns about these Terms, feel free to
          contact us:
        </p>
        <ul className="list">
          <li>
            <Link
              href="mailto:support@example.com"
              className="underline hover:text-[#9ADE20]"
            >
              support@example.com
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/SpreadHuntBot"
              className="underline hover:text-[#9ADE20]"
            >
              @SpreadHuntBot
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
