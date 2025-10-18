"use client";
import React from "react";
import { motion } from "motion/react";
import { RxArrowRight } from "react-icons/rx";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6800329b-cd51-41e9-aeba-fb4df619bfb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full scroll-mt-40 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-center bg-no-repeat px-[10%] py-10 dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-ovo mb-2 text-center text-lg"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        I would love to here from you! If you have any questions, comments,or
        feedback, please use the form below
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-(--my-grid-cols)">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="dark:bg-darkhover/30 flex-1 rounded-md border-[0.5px] border-gray-700 bg-white p-3 dark:border-white/90"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="dark:bg-darkhover/30 flex-1 rounded-md border-[0.5px] border-gray-700 bg-white p-3 dark:border-white/90"
            type="text"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows={6}
          className="dark:bg-darkhover/30 w-full rounded-md border-[0.5px] border-gray-700 bg-white p-4 dark:border-white/90"
          type="text"
          placeholder="Enter your message"
          name="message"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="dark:hover:bg-darkhover mx-auto mt-6 flex items-center justify-center gap-2 rounded-full bg-black/80 px-8 py-3 text-white duration-500 hover:bg-black dark:border-[0.5px] dark:bg-transparent"
        >
          Submit now <RxArrowRight className="mt-1 size-4" />
        </motion.button>
        {result}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
