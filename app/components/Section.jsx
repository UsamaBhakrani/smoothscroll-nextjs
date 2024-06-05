"use client";
import ScrollSpy from "react-ui-scrollspy";

const Section = () => {
  return (
    <ScrollSpy activeClass="active" useBoxMethod={false} scrollThrottle={50}>
      <section className="bg-red-500 h-96 w-screen" id="section-1">
        Section 01
      </section>
      <section className="bg-purple-500 h-96 w-screen" id="section-2">
        Section 02
      </section>
      <section className="bg-cyan-500 h-96 w-screen" id="section-3">
        Section 03
      </section>
      <section className="bg-orange-500 h-screen w-screen" id="section-4">
        Section 04
      </section>
    </ScrollSpy>
  );
};

export default Section;
