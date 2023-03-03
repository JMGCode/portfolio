import { useRef, useState } from "react";

import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Modal from "../../../components/Modal/Modal";
import Portal from "../../../HOC/Portal";
import { sendContactForm } from "../../../lib/api";
import styles from "./info.module.scss";

const Info = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const detailsRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleSetData = (e: any) => {
    const { id, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let a = true,
      b = true,
      c = true;
    //@ts-ignore
    if (nameRef.current && !nameRef.current.validate()) a = false;
    //@ts-ignore
    if (emailRef.current && !emailRef.current.validate()) b = false;
    //@ts-ignore
    if (detailsRef.current && !detailsRef.current.validate()) c = false;

    if (a && b && c) {
      try {
        await sendContactForm(formData);
        console.log("sended successfully");
      } catch (error: any) {
        console.log("Submit error:", error.message);
      }
    }
  };

  return (
    <div
      className={styles.container}
      id="contact-section"
      style={{ position: "relative" }}
    >
      <div className={styles.text}>
        <h2 className="font-medium-bold">{`Go a project in mind?`}</h2>
        <p>
          {`Use the form to give me as much detail as possible and I'll get back to you as soon as I can.`}
        </p>
      </div>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Your name"
          placeholder="Name"
          value={formData.name}
          onChange={handleSetData}
          validation={{
            rules: [/^[a-zA-ZÀ-ÖØ-öø-ÿ '-]+$/],
            msg: "Please enter your name",
          }}
          ref={nameRef}
          required
        />
        <Input
          id="email"
          label="Your email"
          placeholder="Email"
          value={formData.email}
          onChange={handleSetData}
          validation={{
            rules: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
            msg: "Please enter a valid email",
          }}
          ref={emailRef}
          required
        />
        <div className={styles["col-2"]}>
          <Input
            id="details"
            label="Your Project Details"
            placeholder="Project Details"
            rows={10}
            value={formData.details}
            onChange={handleSetData}
            ref={detailsRef}
            required
          />
          <Button
            isSubmit
            className={`  ${styles["form-button"]}`}
            text="Send message"
            onClick={() => {}}
          />
        </div>
      </form>

      {/* <Portal>
        <Modal />
      </Portal> */}
    </div>
  );
};

export default Info;
