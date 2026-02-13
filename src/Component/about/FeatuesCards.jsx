import React from "react";

const FeaturesCards = () => {
  const cards = [
    {
      img: "https://m360soft.com/images/content/Box1@8d55d047a4!300x188.webp",
      title: "Driver Included",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commo perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/Box2@17aa449fe8!300x188.webp",
      title: "Andriod & ios",
      desc: "Lorem ipsumelit. Quod, illo quibusdam omnis  commodi et. Debitis vitae beatae molestiae quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/ProDiagnostics@69f5904dcc!300x188.webp",
      title: "Pro Dignostics",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis   perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/M360API@fcb5469a65!300x188.webp",
      title: "M360 API",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis   perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/CertifiedErasure@ae7d511952!300x188.webp",
      title: "Certified Erasure",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  perspiciatis.",
    },
    
    {
      img: "https://m360soft.com/images/content/BlacklistCheck@0d67905221!300x188.webp",
      title: "Blacklist Check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis   perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/AppleAndroidActivation@f95aaa5e3e!300x188.webp",
      title: "Quick Activation",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis   perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/M360onWindows@824f3c05c0!300x188.webp",
      title: "M360 on Window",
      desc: "Lorem adipisicing elit. Quod, illo quibusdam omnis  commodi et. Debitis vitae beatae molestiae quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/OEMCheck@3a5a665b18!300x188.webp",
      title: "OEM Parts Check",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/DeviceGrading@ec56efe388!300x188.webp",
      title: "Device Grading ",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commodi ae quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/Reports@883263e55d!300x188.webp",
      title: "Reports",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commodi et. is.",
    },
    {
      img: "https://m360soft.com/images/content/CSVExports@c9f97361da!300x188.webp",
      title: "CSV Exports",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commodi et. Debitis vitae beatae molestiae quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/WorkHistory@fefb603823!300x188.webp",
      title: "Work History",
      desc: "Lorem ipsum dolor sit amet consectetur. illo quibusdam omnis  commodi et.  quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/LabelDesigner@e04a38d341!300x188.webp",
      title: "Label Designer",
      desc: "Lorem ipisicing elit. Quod, illo quibusdam omnis  commodi et. Debitis vitae beatae molestiae quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/BatchManager@484f7afc3c!300x188.webp",
      title: "Batch Manager",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commodi et.quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/ExternalReports@1ca6c805ce!300x188.webp",
      title: "External Reports",
      desc: "Lorem ipsum dolor sit amet , adipisicing elit. Quod, illo quibusdam omnis  commodi et.quis perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/DeviceExpenses@291012da44!300x188.webp",
      title: "Device Expenses",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo quibusdam omnis  commodi et. Debitis  perspiciatis.",
    },
    {
      img: "https://m360soft.com/images/content/StickyData@3088f59617!300x188.webp",
      title: "Device Notes",
      desc: "Lorem ipsum , adipisicing elit. Quod, illo quibusdam omnis  commodi et. Debitis vitae beatae molestiae quis perspiciatis.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-5 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] md:w-[300px] h-auto p-6 rounded-xl  text-center 
                       flex flex-col justify-start
                       bg-[linear-gradient(180deg,_#ffffff_0%,#f2f6f7)]
                       hover:shadow-2xl transition shadow-xl"
          >
            <img src={card.img} alt={card.title} className="w-full h-auto mx-auto mb-4" />

            <h3 className="text-lg sm:text-xl font-bold mb-3">{card.title}</h3>

            <p className="text-gray-600 text-lg sm:text-xl">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
