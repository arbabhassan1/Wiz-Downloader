import React from "react";

const Footer = () => {
  return (
    <footer className=" fixed left-0 bottom-0 w-full h-fit flex items-center gap-3  justify-center flex-col">
      <a
        href="https://arbabhassan.bio.link/"
        target="_blank"
        className=" hover:text-green-600"
      >
        &lt;/&gt; & Crafted with 💛 Arbab Hassan
      </a>

      <p className="bg-black w-full text-center py-2">
        <marquee behavior="scroll" direction="left">
          <span className=" bg-red-500 p-2 font-medium mx-2">Disclaimer</span>
          This website is created for{" "}
          <span className=" text-yellow-400">Educational</span> purposes only.
          All content provided here is for learning and demonstration purposes.
          There is no intention to infringe on any copyright or intellectual
          property rights. If you believe that any material on this site
          violates copyright, please{" "}
          <a
            href="mailto:21011556-184@uog.uog.edu.pk"
            className="text-green-600"
          >
            contact us
          </a>{" "}
          for prompt removal.
        </marquee>
      </p>
    </footer>
  );
};

export default Footer;
