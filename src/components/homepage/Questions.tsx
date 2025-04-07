import { SetStateAction, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

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

  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col">
        <div>
          <p className="small-text">FAQ</p>
          <h2 className="mt-5">QUESTIONS? WE HAVE ANSWERS</h2>
        </div>
        <div>
          <p className="custom-paragraph mt-3">
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping experience.
          </p>
        </div>
        <button className="custom-yellow-button self-start mt-4">
          View All FAQ's
        </button>
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
        <Accordion className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {questions.map((question) => (
            <AccordionTab
              key={question.title}
              className="text-custom-grey-15 text-[16px] font-semibold"
              header={question.title}
            >
              <p className="custom-paragraph text-[14px]">{question.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
