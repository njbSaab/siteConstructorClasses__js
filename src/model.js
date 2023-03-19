import image from "./assets/image.png";
import { TitleBlock,TextBlock,ImageBlock,ColumnsBlock } from "./classes/block.js";

const text = 'Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!'

export const model = [
  
  new TitleBlock("creating your site use only JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #e6145e, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      "background-image": "url(./assets/image.png)",
      width: "500px",
      height: "auto",
    },
    alt: "Это картинка",
  }),

  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
      "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock(text, {
    styles: {
      background:"linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];




// export const model = [
//    {
//      type: "title",
//      value: "creating your site use only JavaScript",
//      options: {
//         tag: 'h2',

//       //   styles: `
//       //   background: linear-gradient(to right, #e6145e, #493240);
//       //   color: #fff;
//       //   text-align: center;
//       //   padding: 1.5rem;
//       //   `

//       styles: {
//          background: "linear-gradient(to right, #e6145e, #493240)",
//          color: "#fff",
//          "text-align": "center",
//          padding: "1.5rem",
//       }
//      }
//    },
//    {
//      type: "text",
//      value: "here we go with some text",
//    },
//    {
//      type: "colums",
//      value: [
//        "Lorem ipsum dolor sit  elit. Voluptas, eos!",
//        "here we go with some text",
//        "Lorem ipsum dolor sit  elit. Voluptas, eos!Lorem ipsum dolor sit  elit. Voluptas, eos!",
//      ],
//    },
//    {
//       type: 'image',
//       value: image,
//    }
//  ];
