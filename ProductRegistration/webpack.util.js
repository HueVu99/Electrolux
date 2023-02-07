const fs = require("fs");
const { outRoot, outTheme } = require("./front.end.env");
module.exports = {
  replaceJs: {
    main: {
      search: /main.bundle.[a-z0-9]+.js/g,
      replace(match) {
        const filenames = fs.readdirSync(`${outRoot}/scripts`);
        const mainJs = filenames.find((file) => file.match("main.bundle.[a-z0-9]+.js"));
        return mainJs;
      },
    },
    vendors: {
      search: /vendors.bundle.[a-z0-9]+.js/g,
      replace(match) {
        const filenames = fs.readdirSync(`${outRoot}/scripts`);
        const mainJs = filenames.find((file) => file.match("vendors.bundle.[a-z0-9]+.js"));
        return mainJs;
      },
    },
  },
  replaceJsLegacy: {
    main: {
      search: /main.bundle-legacy.[a-z0-9]+.js/g,
      replace(match) {
        const filenames = fs.readdirSync(`${outRoot}/scripts/legacy`);
        const mainJs = filenames.find((file) => file.match("main.bundle-legacy.[a-z0-9]+.js"));
        return mainJs;
      },
    },
    vendors: {
      search: /vendors.bundle-legacy.[a-z0-9]+.js/g,
      replace(match) {
        const filenames = fs.readdirSync(`${outRoot}/scripts/legacy`);
        const mainJs = filenames.find((file) => file.match("vendors.bundle-legacy.[a-z0-9]+.js"));
        return mainJs;
      },
    },
  },

  replaceCss: {
    main: {
      search: /-[a-z0-9]+.css/g,
      replace(match) {
        const filenames = fs.readdirSync(`${outTheme}/css`);
        const maincssname = filenames.find((file) => file.includes("main"));
        const res = maincssname.split("-")[1];
        return `-${res}`;
      },
    },
  },
};
