import React from "react";

const Form = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#B33077] gap-10">
          Get in touch  <span className="font-semibold text-[#252525]">anytime</span>
          </h2>

          <form
            id="contact-form"
            action="/contact"
            method="post"
            className="space-y-6"
            data-recaptcha-site-key="6Leja5MlAAAAAKrVCL53ibeLVrgCcDiJ8SP_hS77"
          >
            <input
              type="hidden"
              name="_csrf"
              value="FsyAC20Wrj3C8hoh__ddE-0POtXsQ0PibdkWyWcexFcvvdlpIXP_Za-aIlmOnjZknU4C7KcQd40djlSsEUHxLw=="
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contactform-companyperson"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contactform-companyperson"
                  name="ContactForm[companyPerson]"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contactform-companyname"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="contactform-companyname"
                  name="ContactForm[companyName]"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contactform-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="contactform-email"
                  name="ContactForm[email]"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contactform-phonenumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="contactform-phonenumber"
                  name="ContactForm[phoneNumber]"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contactform-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="contactform-message"
                name="ContactForm[message]"
                required
                rows="5"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#B33077]  text-xl text-white font-semibold px-6 py-3 rounded-md  transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;