import React from "react";

const SectionWrapper = (Component) => {
  return function HOC() {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <Component />
      </section>
    );
  };
};

export default SectionWrapper;
