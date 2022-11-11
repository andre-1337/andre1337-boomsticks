"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const configFile = __importStar(require("../database/base.json"));
// Gun builders
const aac_honey_badger_js_1 = require("./aac_honey_badger.js");
const noveske_diplomat_js_1 = require("./noveske_diplomat.js");
const booms_armament_ar545_js_1 = require("./booms_armament_ar545.js");
class BoomsticksTrader {
    constructor() {
        this.mod = "andre1337-boomsticks";
    }
    preAkiLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.modloader = container.resolve("PreAkiModLoader");
        this.logger.log(`[${this.mod}] loading ...`, "yellow");
        this.registerProfileImage(container);
        this.setupTraderUpdateTime(container);
        this.logger.log(`[${this.mod}] finished loading`, "green");
    }
    postDBLoad(container) {
        this.logger.log(`[${this.mod}] setting up the database ...`, "yellow");
        const dbServer = container.resolve("DatabaseServer");
        const jsonUtil = container.resolve("JsonUtil");
        this.db = container.resolve("DatabaseImporter").loadRecursive(`${this.modloader.getModPath(this.mod)}database/`);
        const tables = dbServer.getTables();
        const locales = tables.locales.global;
        const items = tables.templates.items;
        const handbook = tables.templates.handbook.Items;
        tables.traders[configFile._id] = {
            assort: this.createAssortTable(),
            base: jsonUtil.deserialize(jsonUtil.serialize(configFile)),
            questassort: undefined
        };
        this.logger.log(`[${this.mod}] attempting to load 2 item(s) ...`, "yellow");
        for (const item in this.db.templates.items) {
            items[item] = this.db.templates.items[item];
        }
        for (const item of this.db.templates.handbook.Items) {
            handbook.push(item);
        }
        for (const item of this.db.traders.assort.assorts.items) {
            tables.traders[this.db.traders.assort.traderId].assort.items.push(item);
        }
        for (const barter_scheme in this.db.traders.assort.assorts.barter_scheme) {
            tables.traders[this.db.traders.assort.traderId].assort.barter_scheme[barter_scheme] = this.db.traders.assort.assorts.barter_scheme[barter_scheme];
        }
        for (const level in this.db.traders.assort.assorts.loyal_level_items) {
            tables.traders[this.db.traders.assort.traderId].assort.loyal_level_items[level] = this.db.traders.assort.assorts.loyal_level_items[level];
        }
        for (const localeId in locales) {
            for (const locale in this.db.locales.en.templates) {
                locales[localeId].templates[locale] = this.db.locales.en.templates[locale];
                locales[localeId].trading[configFile._id] = {
                    FullName: configFile.name,
                    FirstName: "Boomsticks",
                    Nickname: configFile.nickname,
                    Location: configFile.location,
                    Description: `A trader with western contacts that is able to smuggle weapons and armor into the conflict area.`
                };
            }
        }
        tables.globals.config.Mastering[0].Templates.push("HONEY_BADGER");
        this.logger.log(`[${this.mod}] finished setting up the database`, "green");
    }
    registerProfileImage(container) {
        const imageFilePath = `./${this.modloader.getModPath(this.mod)}res`;
        const imageRouter = container.resolve("ImageRouter");
        imageRouter.addRoute(configFile.avatar.replace(".jpg", ""), `${imageFilePath}/boomsticks.jpg`);
    }
    setupTraderUpdateTime(container) {
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderRefreshConfig = {
            traderId: configFile._id,
            seconds: 3600
        };
        traderConfig.updateTime.push(traderRefreshConfig);
    }
    createAssortTable() {
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
        (0, aac_honey_badger_js_1.build_gun)(assortTable);
        (0, noveske_diplomat_js_1.build_gun)(assortTable);
        (0, booms_armament_ar545_js_1.build_gun)(assortTable);
        return assortTable;
    }
}
module.exports = { mod: new BoomsticksTrader() };
