import { getHeader } from "@/services/home";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";
import FadeInFromLeft from "@/components/animations/FadeInFromLeft";
import FadeInFromRight from "@/components/animations/FadeInFromRight";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "যোগাযোগ",
  description: "আমাদের সাথে যোগাযোগ করুন",
};

const ContactPage = async () => {
  const headerData = await getHeader();
  return (
    <main className="mt-4 lg:mt-8 container">
      {/* Contact Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FadeInFromLeft>
          <ContactInfo data={headerData} />
        </FadeInFromLeft>

        {/* Contact Form */}
        <FadeInFromRight>
          <div className="page-card sm:p-8">
            <h2 className="section-title mb-6 py-2">আমাদের লিখুন</h2>
            <ContactForm />
          </div>
        </FadeInFromRight>
      </section>

      {/* Map Section */}
      <FadeIn>
        <ContactMap />
      </FadeIn>
    </main>
  );
};

export default ContactPage;
