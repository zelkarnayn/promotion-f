// import React, { useState } from "react";
// import FightersCard from "./FightersCard";
// import styles from "./CardsFighters.module.scss";

// const CardArray = () => {
//   const [gallery, setGallery] = useState([
//     {
//       id: 1,
//       image:
//         "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Ризван",
//       lastName: "Яндаев",
//       alias: "Кочевник",
//       weight: 84,
//       victory: 20,
//       defeat: 0,
//       draw: 0,
//       isChamp: false,
//     },
//     {
//       id: 2,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Асхаб",
//       lastName: "Абдразаков",
//       alias: "Мудрый",
//       weight: 77,
//       victory: 20,
//       defeat: 0,
//       draw: 0,
//       isChamp: true,
//     },
//     {
//       id: 3,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Лом-Али",
//       lastName: "Байраев",
//       alias: "Умный",
//       weight: "63",
//       victory: "20",
//       defeat: "0",
//       draw: "draw 0",
//       isChamp: false,
//     },
//     {
//       id: 4,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Дени",
//       lastName: "Мехтиев",
//       alias: "Механик",
//       weight: 93,
//       victory: 20,
//       defeat: 0,
//       draw: 0,
//       isChamp: false,
//     },
//     {
//       id: 5,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Малик",
//       lastName: "Янгулбаев",
//       alias: "Скала",
//       weight: 77,
//       victory: 20,
//       defeat: 0,
//       draw: 0,
//       isChamp: false,
//     },
//     {
//       id: 6,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Адам",
//       lastName: "Цуров",
//       alias: "Адам успокойся",
//       weight: 120,
//       victory: 100,
//       defeat: 0,
//       draw: 0,
//       isChamp: true,
//     },
//     {
//       id: 7,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Дени",
//       lastName: "Джукаев",
//       alias: "Добряк",
//       weight: 20,
//       victory: 0,
//       defeat: 0,
//       draw: 0,
//       isChamp: false,
//     },
//     {
//       id: 8,
//       image:
//       "http://localhost:4000/images/fighters/13/112.jpg",
//       name: "Саид",
//       lastName: "Мартазанов",
//       alias: "Препод",
//       weight: 70,
//       victory: 20,
//       defeat: 0,
//       draw: 0,
//       isChamp: true,
//     },
//   ]);
//   const [champ, setChamp] = useState(false);
//   return (
//     <>
//       <div className={styles.array}>
//         <button onClick={() => setChamp(!champ)} className={styles.button}>ЧЕМПИОНЫ</button>
//         <div className={styles.map}>
//         {gallery.map((item) => {
//           if (item.isChamp && !champ) {
//             return (
//               <FightersCard
//                 setGallery={setGallery}
//                 gallery={gallery}
//                 item={item}
//                 champ={champ}
//                 setChamp={setChamp}
//               />
//             );
//           }
//           if (champ) {
//             return (
//               <FightersCard
//                 setGallery={setGallery}
//                 gallery={gallery}
//                 item={item}
//                 champ={champ}
//                 setChamp={setChamp}
//               />
//             );
//           }
//           //
//         })}
//         </div>
//       </div>
//     </>
//   );
// };
// export default CardArray;
