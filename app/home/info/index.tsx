import { ChangeEvent, forwardRef, useState } from "react";

import Button from "../../../components/Button/Button";
import Document from "../../../components/Icons/Document/Document";
import Input from "../../../components/Input/Input";
import Upload from "../../../components/Icons/upload";
import { primaryColor } from "../../../abstracts/colors";
import styles from "./info.module.scss";

//TODO: Fix ref typescript type
// eslint-disable-next-line react/display-name
const Info = forwardRef((props, ref) => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
    files: any[];
  }>({
    name: "",
    email: "",
    message: "",
    files: [],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(formState).map((objKey) => {
      if (objKey === "files") {
        formState[objKey].forEach((file) => {
          formData.append("files", file);
        });
      } else {
        //@ts-ignore
        formData.append(e, formState[objKey]);
      }
    });

    //@ts-ignore
    for (const value of formData.values()) {
      console.log(value);
    }

    console.log("typeof :", typeof formData);
    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // fetch("https://formsubmit.co/ajax/9c8a2031859cb956dd7fcf6c5ba4785d", {
    //   method: "POST",
    //   headers: {
    //     // "Content-Type": "application/json",
    //     "Content-Type": "multipart/form-data",
    //     Accept: "*/*",
    //     // Accept: "application/json",
    //   },
    //   // body: JSON.stringify(formState),
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    //@ts-ignore
    <div ref={ref} className={styles.container} id="info-section">
      <div className={styles.text}>
        <h2 className="font-medium-bold">{`I'm currently available for freelance work`}</h2>
        <p>
          {`If you are looking for a develop that like to get stuff done, let's
          talk.`}
        </p>

        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "42px",
              padding: "20px 0",
            }}
          >
            <Input
              label="Name"
              id="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
              value={formState.name}
            />
            <Input
              label="Email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={formState.email}
            />
            <Input
              label="Message"
              id="message"
              placeholder="Enter your message"
              required
              rows={3}
              onChange={handleChange}
              value={formState.message}
            />
            <input
              type="file"
              name="attachment"
              id="attachment"
              multiple
              accept="image/*,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className={styles.inputfile}
              onChange={(e) => {
                console.log("coca cola light", e.target.files);
                //@ts-ignore
                const fileArr = Object.keys(e.target.files).map((file) => {
                  //@ts-ignore
                  return e.target.files[file];
                });
                setFormState((prev) => ({
                  ...prev,
                  files: [...fileArr, ...prev.files],
                }));
              }}
            />

            <label className={styles.inputlabel} htmlFor="attachment">
              <Upload color={primaryColor} size="100" />
              Browse file to upload
            </label>

            {formState.files.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {formState.files.map((file, index) => {
                  const docType = file.type.includes("image")
                    ? "img"
                    : file.type.includes("pdf")
                    ? "pdf"
                    : "doc";

                  return (
                    <div
                      key={file.name + "-" + index}
                      style={{
                        display: "flex",
                        gap: "15px",
                        // backgroundColor: "rgba(252, 58, 121, 1)",
                        background:
                          "linear-gradient(90deg,rgba(254, 87, 46, 1) 0%,rgba(252, 58, 121, 1) 100%)",
                        padding: "15px 20px",
                        borderRadius: "8px",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Document icon={docType} />
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          {file.name}
                        </p>
                      </div>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        onClick={() => {
                          const files = formState.files;
                          files.splice(index, 1);

                          setFormState((prev) => ({
                            ...prev,
                            files,
                          }));
                        }}
                      >
                        <p style={{ color: "white", cursor: "pointer" }}>X</p>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <Button isSubmit text="Let's talk!" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
});

export default Info;
