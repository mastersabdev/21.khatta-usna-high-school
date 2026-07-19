const AboutUs = ({ data }) => {
  return (
    <div className="page-card mx-auto mt-12">
      <h2 className="section-title mb-6">About Us</h2>
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800">
          {data?.title || "Our Journey"}
        </h3>
        {typeof window !== "undefined" && data?.description ? (
          <p
            className="text-slate-600 leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        ) : (
          <p className="text-slate-600 leading-relaxed text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quaerat
            voluptatibus libero alias earum excepturi sequi unde a porro sed,
            rem dicta voluptate, aut laboriosam. Suscipit hic unde cumque magni
            ut quaerat ipsa molestias sed aspernatur illum commodi libero maxime
            numquam quae rerum, vel nulla quidem minima minus sapiente.
            Molestiae!
          </p>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
