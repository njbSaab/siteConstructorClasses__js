import { col, css, row } from "../utils.js";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHtml() {
    throw new Error("method toHTML must been realisation");
  }
}

export class TitleBlock extends Block {
  toHtml() {
    const { tag = "h1", styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ImageBlock extends Block {
  toHtml() {
    const { imageStyles, alt = "", styles } = this.options;
    return row(
      `<img src="${this.value}" style="${css(imageStyles)}"/>`,
      css(styles)
    );
  }
}

export class ColumnsBlock extends Block {
  toHtml() {
    const html = this.value.map(col).join("");
    return row(html, css(this.options.styles));
  }
}

export class TextBlock extends Block {
  toHtml() {
    return row(col(`<p>"${this.value}"</p>`, css(this.options.styles)));
  }
}
