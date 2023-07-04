import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import "./_card.scss";

const Card = () => {
  return (
    <section className="card flex flex--column border-radius--20">
      <img src="../../../assets/images/image-qr-code.png" alt="qr-code" />
      <Heading
        type={"h1"}
        text="Improve your front-end skills by building projects"
      />
      <Paragraph text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
    </section>
  );
};

export default Card;
