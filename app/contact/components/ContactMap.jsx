const ContactMap = () => {
  return (
    <section className="page-card sm:p-8">
      <h2 className="section-title mb-6">আমাদের অবস্থান</h2>
      <div className="w-full h-[400px] bg-slate-100 rounded-xl overflow-hidden">
        <iframe
          src=""
          width="100%"
          height="400"
          style={{
            border: "0",
            borderRadius: "0.7rem",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
