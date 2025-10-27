"use client";

import { useEffect, useState } from "react";
import { Feedback } from "@/types/types";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import {
  Dumbbell,
  PersonStanding,
  BicepsFlexed,
  Salad,
  CircleDollarSign,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const feat: string[] = [
  "🏋️‍♂️600+ Active Members",
  "🔥5+ Certified Trainers",
  "💪7 Core Programs",
  "📍Raipur's #1 Rated Gym",
];

const gallery: string[] = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_900,q_auto:good,f_auto,dpr_2,fl_progressive/v1/cult-media/v2web/centers/7_Cult_Tribe%20Indiranagar_PRODUCT_BNR_2021-11-09T10:17:59.906Z.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1100,q_auto:good,f_auto,dpr_1,fl_progressive/v1/cult-media/v2web/centers/7_Cult_Tribe%20Indiranagar_TITLE_2021-11-09T10:17:59.913Z.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1100,q_auto:good,f_auto,dpr_1,fl_progressive/v1/cult-media/v2web/centers/7_Cult_Tribe%20Indiranagar_TITLE_2021-11-09T10:17:59.912Z.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1100,q_auto:good,f_auto,dpr_1,fl_progressive/v1/cult-media/v2web/centers/7_Cult_Tribe%20Indiranagar_TITLE_2021-11-09T10:17:59.911Z.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1100,q_auto:good,f_auto,dpr_1,fl_progressive/v1/cult-media/v2web/centers/7_Cult_Tribe%20Indiranagar_TITLE_2021-11-09T10:17:59.910Z.png",
];

const feedback: Feedback[] = [
  {
    testi:
      "I joined The Grind Club just to get fit, but in 6 months I lost 18 kilos and gained a whole new lifestyle. The trainers genuinely care — they fixed my workouts, helped with diet, and pushed me when I wanted to quit. Worth every rupee.",
    name: "Amit Verma",
    profession: "Software Engineer",
    rating: "⭐⭐⭐⭐",
  },
  {
    testi:
      "I've tried many gyms, but none match the atmosphere or community here. It's never crowded, equipment’s top-notch, and trainers are strict yet approachable. The 3-month plan keeps me consistent.",
    name: "Muskan Patel",
    profession: "College Student",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    testi:
      "I took the half-year plan thinking I’d cancel midway. It’s been 8 months, and I can’t imagine training anywhere else. The progress tracking and nutrition tips set this place apart.",
    name: "Ravi Sharma",
    profession: "Business Owner",
    rating: "⭐⭐⭐",
  },
  {
    testi:
      "Started at 65 kg, now deadlifting 80 kg and feeling unstoppable. The Grind Club isn’t just a gym — it’s a complete mindset shift.",
    name: "Neha Singh",
    profession: "Marketing Executive",
    rating: "⭐⭐⭐⭐",
  },
];

export default function Home() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="bg-white min-h-screen w-full py-3 text-[#071030]">
      <section className="flex justify-center">
        <Navbar />
      </section>

      {/* Hero Section */}
      <section className="h-full pt-32 text-center items-center flex flex-col gap-6 px-3">
        <p className="border px-4 py-1 rounded-full border-gray-300">
          🚀 AI Powered Sport Technology
        </p>
        <h1 className="text-4xl font-semibold">
          Train Like a Beast. Look Like a Legend.
        </h1>
        <p className="mt-2">
          Raipur's premier fitness destination — blending modern training, elite
          coaching, and luxury amenities for a complete transformation
          experience.
        </p>
        <div className="flex flex-wrap justify-center gap-3 px-2">
          {feat.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 rounded-lg">
              {item}
            </span>
          ))}
        </div>
        <div className="w-full flex flex-col gap-4 items-center mt-5">
          <Button title="Join The Club" />
          <Button title="Book a Free Trial" ghost={true} />
        </div>
      </section>

      {/* img grid */}
      <section className="overflow-hidden">
        <div className="flex w-full h-[58vh] gap-x-4 mt-10">
          <div className="flex flex-col gap-y-4 w-40 -ml-20 py-15">
            <div className="rounded-xl h-[45%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/Back_Dumbbell_Workout_Weights-732x549-Thumbnail.jpg"
                alt=""
              />
            </div>
            <div className="rounded-xl h-[55%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/id/1147772622/photo/sportswoman-exercising-with-battling-ropes.jpg?s=612x612&w=0&k=20&c=vEOGRWaA60R3lxsKmFtK6XdDjhorD5BoPwXkG6Ckpj4="
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden h-full rounded-xl w-52">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/premium-photo/athletic-fitness-woman-workout-gym-with-dumbbell-white-shirt-fitness-sport-concept_174475-2477.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-4 rounded-xl w-40 -mr-20 py-15">
            <div className="rounded-xl h-[55%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I="
                alt=""
              />
            </div>
            <div className="rounded-xl h-[45%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/736x/f7/29/b7/f729b7690b8102ab8555dc126692e417.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="h-full pt-20 pb-10 flex flex-col gap-5 items-center text-center px-3">
        <p className="border px-4 py-1 rounded-full border-gray-300">
          🚀 Why Choose Us
        </p>
        <h1 className="text-4xl font-semibold">
          Why The Grind Club Stands Out
        </h1>
        <p className="mt-2">A gym that's designed for results, not excuses.</p>
        {/* Cards */}
        <div className="grid grid-rows-3 grid-cols-1 h-[160vh] w-full gap-y-6">
          <div className="rounded-xl overflow-hidden relative flex flex-col px-4 py-4  justify-between items-start text-start bg-black text-white">
            <div className="z-10 bg-[#ffffff31] py-1.5 px-4 rounded-xl text-start font-light">
              <p className="z-10">🚀 Certified Trainers</p>
            </div>
            <p className="z-10 font-thin w-[90%]">
              Our expert coaches bring years of experience in strength,
              functional, and athletic training to help you reach your goals
              faster and safer.
            </p>
            <img
              className="w-full h-full object-cover z-0 absolute left-0 opacity-45 top-0"
              src="https://cdn.prod.website-files.com/68681b7cf45b0bf648668b48/686822d181063e70c6f0d392_Image%20Card%2004.avif"
              alt=""
            />
          </div>
          <div className="rounded-xl overflow-hidden relative flex flex-col px-4 py-5  justify-between items-start text-start bg-black text-white">
            <div className="z-10 bg-[#ffffff31] py-1.5 px-4 rounded-xl text-start font-light">
              <p>🚀 Premium Recovery Lounge</p>
            </div>
            <p className="z-10 font-thin w-[90%]">
              Relax, recharge, and recover with our sauna, stretching zones, and
              guided recovery sessions.
            </p>
            <img
              className="w-full h-full object-cover z-0 absolute left-0 opacity-45 top-0"
              src="https://cdn.prod.website-files.com/68681b7cf45b0bf648668b48/6869726f26ed8d14da81affe_background%20woman.avif"
              alt=""
            />
          </div>
          <div className="rounded-xl overflow-hidden relative flex flex-col px-4 py-5  justify-between items-start text-start bg-black text-white">
            <div className="z-10 bg-[#ffffff31] py-1.5 px-4 rounded-xl text-start font-light">
              <p>🚀 World-Class Equipment</p>
            </div>
            <p className="z-10 font-light w-[90%]">
              State-of-the-art machines, free weights, and functional training
              zones — everything you need under one roof.
            </p>
            <img
              className="w-full h-full object-cover z-0 absolute left-0 opacity-45 top-0"
              src="https://cdn.prod.website-files.com/68681b7cf45b0bf648668b48/686822d17f8efb226a3a8927_Image%20Card%2006.avif"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="min-h-screen pt-20 pb-10 flex flex-col gap-5 items-center text-center px-3">
        <p className="border px-4 py-1 rounded-full border-gray-300">
          🚀 Services
        </p>
        <h1 className="text-4xl font-semibold">Everything You Need to Excel</h1>
        <p>
          Whether you're just starting out or aiming to compete, we've got a
          program tailored to your goals.
        </p>
        <div className="grid grid-cols-1 grid-rows-4 min-h-screen w-full gap-y-4">
          <div className="bg-purple-100 rounded-xl flex flex-col items-start text-start px-4 py-5 gap-7 justify-between">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-medium">Standard Access Plan</h3>
              <span className="p-2 bg-[#C1FF72] rounded-lg">
                <CircleDollarSign className="text-[#071030]" />
              </span>
            </div>
            <p>Flexible membership to access gym facilities anytime.</p>
          </div>
          <div className="bg-purple-100 rounded-xl flex flex-col items-start text-start px-4 py-5 gap-7 justify-between">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-medium">Strength Training</h3>
              <span className="p-2 bg-[#C1FF72] rounded-lg">
                <Dumbbell className="text-[#071030]" />
              </span>
            </div>
            <p>
              Build raw power, increase muscle mass, and push your limits with
              our advanced strength training setups.
            </p>
          </div>
          <div className="bg-purple-100 rounded-xl flex flex-col items-start text-start px-4 py-5 gap-7 justify-between">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-medium">Personal Training</h3>
              <span className="p-2 bg-[#C1FF72] rounded-lg">
                <PersonStanding className="text-[#071030]" />
              </span>
            </div>
            <p>
              One-on-one coaching to accelerate results and perfect your form.
            </p>
          </div>
          <div className="bg-purple-100 rounded-xl flex flex-col items-start text-start px-4 py-5 gap-7 justify-between">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-medium">Functional Training</h3>
              <span className="p-2 bg-[#C1FF72] rounded-lg">
                <BicepsFlexed className="text-[#071030]" />
              </span>
            </div>
            <p>
              Train smarter, move better, and improve overall body performance.
            </p>
          </div>
          <div className="bg-purple-100 rounded-xl flex flex-col items-start text-start px-4 py-5 gap-7 justify-between">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-medium">Nutrition & Meal Planning</h3>
              <span className="p-2 bg-[#C1FF72] rounded-lg">
                <Salad className="text-[#071030]" />
              </span>
            </div>
            <p>Fuel your transformation with personalized nutrition plans.</p>
          </div>
        </div>
      </section>

      {/* Subscription Plan */}
      <section className="min-h-screen pt-20 pb-10 flex flex-col gap-5 items-center text-center px-3">
        <p className="border px-4 py-1 rounded-full border-gray-300">
          🚀 Membership Plans
        </p>
        <h1 className="text-4xl font-semibold">Choose Your Grind</h1>
        <p>
          Whether you're training for strength, aesthetics, or discipline —
          we've got a plan that fits your journey. Join Raipur's most
          result-driven fitness community today.
        </p>
        <div className="grid grid-cols-1 grid-rows-3 min-h-screen w-full gap-y-4 px-2">
          <div className="border border-[#00000025] flex flex-col gap-3 text-start px-5 py-4 rounded-xl">
            <p className="font-medium text-2xl">Monthly</p>
            <div className="text-4xl font-medium flex items-start">
              ₹1,000<span className="text-base">/month</span>
            </div>
            <span className="w-full h-[1px] bg-[#0000001f] mt-2"></span>
            <p className="font-medium text-lg">Start small, stay consistent.</p>
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Full gym access
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Locker & shower access
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Free fitness assessment
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Free fitness assessment
              </p>
            </div>
            <Button
              title="Start Monthly Plan"
              classname="text-center w-full font-medium mt-5"
            />
          </div>
          <div className="border border-[#00000025] flex flex-col gap-3 text-start px-5 py-4 rounded-xl">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-2xl">Quarterly</p>
                <div className="text-4xl font-medium flex items-start">
                  ₹800<span className="text-base">/month</span>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-2 items-start">
                <p className="text-xs rounded-full px-2 py-1 bg-[#071030] text-white font-medium gap-1">
                  Save ₹600
                </p>
              </div>
            </div>
            <span className="w-full h-[1px] bg-[#0000001f] mt-2"></span>
            <p className="font-medium text-lg">
              Commit to 90 days of transformation.
            </p>
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Full gym access
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Locker & shower access
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Personal trainer guidance (2 sessions/month)
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Nutrition consultation (1/month)
              </p>
            </div>
            <Button
              title="Start 3 Day Free Trial"
              classname="text-center w-full font-medium mt-5"
            />
          </div>
          <div className="border border-[#00000025] flex flex-col gap-3 text-start px-5 py-4 rounded-xl">
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-2xl">Semiannually</p>
                <div className="text-4xl font-medium flex items-start">
                  ₹700<span className="text-base">/month</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="text-xs rounded-full px-2 py-1 bg-[#071030] text-white font-medium gap-1">
                  Save ₹1,800
                </p>
              </div>
            </div>
            <span className="w-full h-[1px] bg-[#0000001f] mt-2"></span>
            <p className="font-medium text-lg">The long game. Real change.</p>
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Everything in Quarterly Plan
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Personalized workout plan
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Free body composition analysis (bi-monthly)
              </p>
              <p className="flex items-center gap-1">
                <Check className="size-5" />
                Priority trainer slots
              </p>
            </div>
            <Button
              title="Join for 6 Months"
              classname="text-center w-full font-medium mt-5"
            />
          </div>
          <div></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="h-[70vh] pt-10 pb-10 flex flex-col gap-5 items-center text-center px-3">
        <p className="px-4 py-1 rounded-full">🚀 Testimonials</p>
        <h1 className="text-4xl font-semibold">What People Say</h1>
        <p>
          Real members. Real sweat. Real results. At The Grind Club Raipur, we
          don't believe in hype - we believe in hard work that pays off.
        </p>
        <div className="grid grid-cols-1 grid-rows-1 w-full">
          <div>
            <Carousel setApi={setApi}>
              <CarouselContent>
                {feedback.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="gap-4 flex flex-col justify-evenly h-full border border-gray-300 py-4 px-5 rounded-xl bg-gray-100">
                      <div>{item.rating}</div>
                      <p className="text-xl font-medium">{item.testi}</p>
                      <div className="font-semibold">
                        <p>{item.name}</p>
                        <p className="font-medium text-gray-600">
                          {item.profession}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex gap-2 mt-4 w-full justify-center ">
            {feedback.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === i
                    ? "bg-[#C1FF72] w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="h-[70vh] py-10 flex flex-col gap-5 items-center text-center">
        <p className="px-4 py-1 rounded-full">🚀 Our Space</p>
        <h1 className="text-4xl font-semibold">Inside The Valerio</h1>
        <p className="px-5">
          Real members. Real sweat. Real results. At The Grind Club Raipur, we
          don't believe in hype - we believe in hard work that pays off.
        </p>
        <div className="relative w-full max-w-4xl mt-5">
          <Carousel className="w-full pl-6">
            <CarouselContent className="flex gap-4">
              {gallery.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-3/4 flex justify-center"
                >
                  <div className="rounded-xl overflow-hidden h-72">
                    <img
                      src={item}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="w-full top-15 relative">
              <CarouselPrevious className="left-36" />
              <CarouselNext className="left-52" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-[28vh] overflow-hidden text-white">
        <div className="bg-black relative overflow-hidden h-full justify-center items-center text-center flex">
          <img
            className="w-full h-full object-cover opacity-25 absolute"
            src="https://t4.ftcdn.net/jpg/04/04/01/01/360_F_404010101_b8jIDMJrqLb0DlKjzFdYJicuQBX4CoHe.jpg"
            alt=""
          />
          <div className="px-5 flex flex-col gap-5 items-center">
            <p className="text-2xl font-medium">
              Ready to see your name on our wall of transformations?
            </p>
            <button className="py-2.5 bg-[#C1FF72] rounded-lg px-10 font-medium z-10 text-black">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <section className="h-[60vh] px-4 py-10">
        <div className="text-lg flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="text-[#071030] text-3xl font-semibold italic">VF</p>
            <button className="py-2.5 bg-[#C1FF72] rounded-lg px-10 font-medium z-10 text-black">
              Join Now
            </button>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <div className="flex items-center gap-5">
              <p>+91 98765 43210</p>
              <p>info@valeriofitness.com</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Address</p>
            <p>
              Ground Floor, 22 Aayush Complex, Aisa Waisa Road, Raipur,
              Chhattisgarh
            </p>
          </div>
          <div className="w-full h-64 overflow-hidden relative flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.1988331918637!2d-103.32597142503255!3d20.686526499445755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1997e71de2b%3A0xaed3be9da3e8d347!2sPussyLand!5e1!3m2!1sen!2sin!4v1761590242344!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
