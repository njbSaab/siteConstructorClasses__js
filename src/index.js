import {model} from'./model.js'
import { App } from './classes/app.js'
import './styles/min.css'


// import {templates} from'./templated.js'
// import {Site} from './classes/site.js'
// import{Sidebar} from './classes/sidebar.js'



new App(model).init()


// const $site = document.querySelector("#site");

// model.forEach(block => {
//   site.insertAdjacentHTML('beforeend', block.toHtml())

  // let html = "";
  // if (block.type === "title") {
  //   html = templates.title(block);
  // } else if (block.type == "text") {
  //   html = templates.text(block);
  // } else if (block.type === "columns") {
  //   html = templates.columns(block);
  // } else if(block.type === "image"){
  //    html = templates.image(block)
  // }



  // const toHtml = templates[block.type]
  // $site.insertAdjacentElement('beforeend', toHtml(block));
// });


