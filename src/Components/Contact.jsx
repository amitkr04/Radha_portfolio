// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Slide, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useForm } from "react-hook-form";

// function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const form = useRef();
//   //clear the form input fields after submission hook use useState
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_t17bcpg",
//         "template_xq95d8i",
//         form.current,
//         "7FPCAvyXXGUL2KREG"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setName("");
//           setEmail("");
//           setMessage("");
//           // Show a success toast notification
//           // notify();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
//   const notify = () => toast("Message sent Successfully!");

//   // Handle form submit using react-hook-form's handleSubmit function
//   const onSubmit = () => {
//     sendEmail();
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2x1 container mx-auto px-4 md:px-20"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
//         <div className="flex flex-col items-center justify-center mt-5">
//           <form
//             ref={form}
//             onSubmit={handleSubmit(onSubmit)}
//             action=""
//             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Full Name</label>
//               {/* input name */}
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="to_name"
//                 id="name"
//                 placeholder="Enter Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               {errors.name && (
//                 <span className="text-red-500 text-sm">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               {/* //input email */}
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="email"
//                 name="from_name"
//                 id="email"
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               {/* //input message */}
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 type="text"
//                 name="message"
//                 id="message"
//                 placeholder="Enter Your Message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               {errors.message && (
//                 <span className="text-red-500 text-sm">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             <button
//               onClick={notify}
//               type="submit"
//               className="bg-black rounded-xl hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
//             >
//               Send{" "}
//               <ToastContainer
//                 position="top-right"
//                 autoClose={1000}
//                 pauseOnHover={false}
//                 transition={Slide}
//               />
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // This will help clear the form after successful submission
  } = useForm();

  const form = useRef();

  // Function to handle email sending
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_t17bcpg",
        "template_xq95d8i",
        form.current,
        "7FPCAvyXXGUL2KREG"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset(); // Clear form after success
          notify(); // Show success notification
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Success notification function
  const notify = () => toast.success("Message sent successfully!");

  // Handle form submission and validation
  const onSubmit = () => {
    sendEmail();
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            {/* Name Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: "Full name is required" })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Your Message"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black rounded-xl hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Move the ToastContainer outside of the button */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        pauseOnHover={false}
        transition={Slide}
      />
    </>
  );
}

export default Contact;
