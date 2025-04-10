import { SetStateAction, useState } from "react";

import {
  Accordion,
  AccordionTab,
  AccordionTabChangeEvent,
} from "primereact/accordion";
import { XIcon } from "lucide-react";

const QUESTIONS_DATA: { title: string; answer: string; category: string }[] = [
  {
    title: "Can I modify my order after placing it?",
    answer:
      "Yes, you can modify your order within 24 hours of placing it. Please reach out to our customer support team for assistance.",
    category: "ordering",
  },
  {
    title: "How do I initiate a return?",
    answer: "You can initiate a return within 30 days of receiving your order.",
    category: "returns",
  },
  {
    title: "How can I unsubscribe from the newsletter?",
    answer:
      "You can unsubscribe by clicking the 'Unsubscribe' link in the footer of our website.",
    category: "customer support",
  },
  {
    title: "Do you offer exchanges for products?",
    answer: "Yes, we offer exchanges for eligible products.",
    category: "customer support",
  },
];

const QUESTIONS_CATEGORIES = [
  "All",
  "ordering",
  "returns",
  "customer support",
  "shipping",
];

export const Questions = () => {
  const [activeCategory, setActiveCategory] =
    useState<SetStateAction<string>>("All");

  const [questions, setQuestions] = useState(QUESTIONS_DATA);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Add activeIndex state

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setQuestions(QUESTIONS_DATA);
    } else {
      const filteredQuestions = QUESTIONS_DATA.filter(
        (question) => question.category === category
      );
      setQuestions(filteredQuestions);
    }
  };

  const headerTemplate = (options: {
    title: string;
    index: number;
    onClick: () => void;
  }) => {
    const isActive = activeIndex === options.index;
    return (
      <button
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={options.onClick}
      >
        <span className="text-[16px] font-semibold">{options.title}</span>
        <XIcon
          className={`transition duration-300 ${
            isActive ? "rotate-45" : ""
          } text-custom-grey-60`}
        />
      </button>
    );
  };

  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col w-full lg:w-[70%]">
        <div>
          <p className="small-text">FAQ</p>
          <h2>QUESTIONS? WE HAVE ANSWERS</h2>
        </div>
        <div>
          <p className="custom-paragraph">
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping experience.
          </p>
        </div>
      </div>

      {/* FAQ list */}
      <ul
        className="mt-8 flex gap-5 py-5 overflow-x-scroll whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        {QUESTIONS_CATEGORIES.map((category) => (
          <li key={category}>
            <button
              className={`text-[16px] font-semibold  whitespace-nowrap ${category === activeCategory ? "text-black" : "text-custom-grey-60"} hover:text-black transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* questions and answers */}
      <div>
        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e: AccordionTabChangeEvent) => {
            setActiveIndex(typeof e.index === "number" ? e.index : null);
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {questions.map((question, index) => (
            <AccordionTab
              key={question.title}
              headerTemplate={() =>
                headerTemplate({
                  title: question.title,
                  index: index,
                  onClick: () => {
                    setActiveIndex(activeIndex === index ? null : index);
                  },
                })
              }
              className="text-custom-grey-15 text-[16px] font-semibold"
            >
              <p className="text-custom-grey-30 font-normal text-[14px] 2xl:text-lg leading-6">
                {question.answer}
              </p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
