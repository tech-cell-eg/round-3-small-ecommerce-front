import { Panel } from "primereact/panel";

const panelContent = [
  {
    header: "Does the jacket come in different colors?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Are there any inside pockets in the jacket?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Can I machine wash the denim jacket?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "How do I style the jacket for different occasions?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ProductPanels = () => {
  const columns = [0, 1, 2];

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
      <p className="text-sm text-gray-500 mb-8">
        Ease into the world of Klothink with clarity. Our FAQs cover a spectrum
        of topics, ensuring you have the information you need for a seamless
        shopping experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {columns.map((col) => (
          <div key={col} className="space-y-4">
            {panelContent.map((panel, index) => (
              <Panel key={index} header={panel.header} toggleable collapsed>
                <p className="m-0">{panel.content}</p>
              </Panel>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPanels;

// import { useState } from "react";
// import { Panel } from "primereact/panel";

// const panelContent = [
//   {
//     header: "Does the jacket come in different colors?",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     header: "Are there any inside pockets in the jacket?",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     header: "Can I machine wash the denim jacket?",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     header: "How do I style the jacket for different occasions?",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// const ProductPanels = () => {
//   // الحالة لتتبع أي البانلز مفتوحة أو مغلقة
//   const [collapsedStates, setCollapsedStates] = useState<boolean[]>(
//     Array(panelContent.length).fill(true) // كل البانلز مغلقة مبدئيًا
//   );

//   const handleToggle = (index: number) => {
//     const newStates = [...collapsedStates];
//     newStates[index] = !newStates[index];
//     setCollapsedStates(newStates);
//   };

//   return (
//     <div className="py-8">
//       <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
//       <p className="text-sm text-gray-500 mb-8">
//         Ease into the world of Klothink with clarity. Our FAQs cover a spectrum
//         of topics, ensuring you have the information you need for a seamless
//         shopping experience.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {panelContent.map((panel, index) => (
//           <Panel
//             key={index}
//             header={panel.header}
//             toggleable
//             collapsed={collapsedStates[index]}
//             onToggle={() => handleToggle(index)}
//           >
//             <p className="m-0">{panel.content}</p>
//           </Panel>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPanels;
