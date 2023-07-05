import React from "react";
import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import qrcode from "../../../assets/images/image-qr-code.png";
import "./_card.scss";

const Card = () => {
  return (
    <section className="card flex flex--column flex__justify--center flex__align--center border-radius--20">
      <img
        src={qrcode}
        alt="qr-code"
        className="border-radius--10 mx--16 mt--16 mb--24"
      />
      <div className="card__text mx--16 mb--40 flex flex--column flex__justify--center flex__align--center">
        <Heading
          type={"h1"}
          text="Improve your front-end skills by building projects"
          className={"mb--16"}
        />
        <Paragraph text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
      </div>
    </section>
  );
};

export default Card;
