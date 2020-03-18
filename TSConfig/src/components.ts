export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "Footer";
    document.body.appendChild(elem);
  }
}
