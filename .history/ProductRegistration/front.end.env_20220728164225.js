let { mode, brand, country } = process.env;

const FRONT_END_FOLDER = ".";
const WEB_FOLDER = "..";
brand = brand != undefined ? brand : "electrolux";
country = country != undefined ? country : "au";
const THEME_FOLDER = `themes/${brand}/${country}`;
const pathObj = {
    theme: {
        entry: `${FRONT_END_FOLDER}`,
        outRoot: `${WEB_FOLDER}/dist//`,
        outTheme: `${WEB_FOLDER}/dist//${brand}/${country}`,
        outTemplates: `${WEB_FOLDER}/dist//templates`,
        templatesPath: `${FRONT_END_FOLDER}/templates`,
        cssPath: `${FRONT_END_FOLDER}/styles/${THEME_FOLDER}/scss/entry`,
        assetsPath: `${FRONT_END_FOLDER}/styles/${THEME_FOLDER}/assets`,
    
    },
    default: {
        entry: `${FRONT_END_FOLDER}`,
        outRoot: `${WEB_FOLDER}/dist/`,
        outTheme: `${WEB_FOLDER}/dist//${brand}/${country}`,
        outTemplates: `${WEB_FOLDER}/dist//templates`,
        templatesPath: `${FRONT_END_FOLDER}/templates`,
        cssPath: `${FRONT_END_FOLDER}/styles/${THEME_FOLDER}/scss/entry`,
        assetsPath: `${FRONT_END_FOLDER}/styles/${THEME_FOLDER}/assets`,

    },
};
const entryPath = pathObj[mode] ? pathObj[mode].entry : pathObj.default.entry;
const outRoot = pathObj[mode] ? pathObj[mode].outRoot : pathObj.default.outRoot;
const outTheme = pathObj[mode] ? pathObj[mode].outTheme : pathObj.default.outTheme;
const outTemplates = pathObj[mode] ? pathObj[mode].outTemplates : pathObj.default.outTemplates;
const templatesPath = pathObj[mode] ? pathObj[mode].templatesPath : pathObj.default.templatesPath;
const assetsPath = pathObj[mode] ? pathObj[mode].assetsPath : pathObj.default.assetsPath;
const cssPath = pathObj[mode] ? pathObj[mode].cssPath : pathObj.default.cssPath;

module.exports = {
    entryPath,
    outRoot,
    outTheme,
    outTemplates,
    templatesPath,
    assetsPath,
    cssPath,
};