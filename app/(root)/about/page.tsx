import Image from "next/image";

import images from "@/constants/images";
import helpers from "@/constants/helpers";

const About = () => {
  return (
    <>
      <section className="flex justify-between bg-primarycolor text-white h-[500px] lg:h-[auto]">
        <div className="flex flex-col p-8 justify-between">
          <p className="font-medium text-[1.5rem]">OUR STORY</p>
          <div className="w-[70%]">
            <p className="text-[2rem] font-bold">
              Making great food accessible and affordable
            </p>
            <p className="text-[2rem] font-bold">How did we do it?</p>
          </div>
          <button
            type="button"
            className="border-none rounded-md bg-secondarycolor w-[150px] p-2"
          >
            Find out more
          </button>
        </div>
        <div className="hidden lg:block">
          <Image src={images.serveYourself} alt="about banner" height={500} />
        </div>
      </section>
      <section className="who_are_we">
        <div className="p-8 py-[10rem] flex flex-wrap items-center gap-4 justify-center">
          <Image
            src={images.jollofview}
            height={200}
            width={200}
            alt="jollof rice"
            // TODO height props seems not working so i put into tailwind class
            className="rounded-[50%] cover h-[200px]"
          />
          <div className="text-[1.5rem] flex flex-col">
            <p className="font-semibold text-center">
              We are <span className="font-bold">{helpers.BRANDNAME}</span>
            </p>
            <p className="w-[85%] max-w-[500px] text-[16px] text-justify">
              {helpers.whoAreWe}
            </p>
          </div>
        </div>
      </section>
      <section className="about_services">
        <div className="p-10 bg-mygray flex flex-wrap justify-evenly">
          <div>
            <Image
              src={images.locationIcon}
              alt="location_icon"
              height={150}
              width={150}
            />
            <p className="max-w-[160px] text-center">Available Nationwide</p>
          </div>
          <div>
            <Image
              src={images.customerIcon}
              alt="customers_icons"
              height={150}
              width={150}
            />
            <p className="max-w-[160px] text-center">
              200,000+ customers served
            </p>
          </div>
          <div>
            <Image
              src={images.chefIcon}
              alt="location_icon"
              height={150}
              width={150}
            />
            <p className="max-w-[160px] text-center">34 employees</p>
          </div>
        </div>
      </section>
      <section className="services_offered">
        <div className="p-8 gap-4 flex flex-wrap self-start">
          {helpers.servicesOffered.map((service) => (
            <div
              key={service.label}
              className="max-w-[400px] min-w-[300px] flex flex-col items-center p-4 gap-2 border-solid border-black border-[2px] rounded-[20px]"
            >
              <Image
                src={service.imgUrl}
                height={150}
                width={150}
                className="rounded-[50%] h-[150px]"
                alt="wedding_service_image"
              />
              <p className="font-bold text-center">{service.label}</p>
              <p className="max-w-[350px]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="our_promise">
        <div className="bg-primarycolor p-10 flex flex-wrap gap-8 items-center justify-center">
          <Image
            src={images.fried1}
            alt="promise_image"
            height={410}
            width={410}
            className="rounded-[50%]"
          />
          <div>
            <p className="font-bold text-[32px] text-white">OUR PROMISE</p>
            <div className="flex flex-col gap-6 transition-[300ms] my-3">
              {helpers.promises.map((promise) => (
                <div
                  key={promise}
                  className="px-5 py-3 hover:bg-white hover:rounded-lg text-white  hover:text-black"
                >
                  <p className="max-w-[430px]">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="p-10">
          <p className="font-bold text-[24px] text-center">Testimonials</p>
          <div className="p-4 flex gap-4 flex-wrap w-full justify-center">
            {helpers.testimonials.map((testament, index) => (
              <div
                key={index}
                className="border-solid border-[2px] border-[--secondarycolor] flex flex-col gap-4 p-4 items-center max-w-[400px]"
              >
                <Image
                  src={testament.personImg}
                  alt={testament.personName}
                  width={130}
                  height={130}
                  className="rounded-[50%] w-[130px] h-[130px] object-cover"
                />
                <p>{testament.personName}</p>
                <p>{testament.personTestament}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
