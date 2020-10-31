"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
const _1 = require(".");
const cardCategories_1 = __importDefault(require("./cardCategories"));
const cardLinks_1 = __importDefault(require("./cardLinks"));
const userCategories_1 = __importDefault(require("./userCategories"));
class Card extends sequelize_1.Model {
    static async add(cardElements, linkElement, categoryIds) {
        await _1.sequelize.transaction(async (t) => {
            if (linkElement) {
                const link = await cardLinks_1.default.create({ string: linkElement }, { transaction: t });
                const linkId = link.id;
                cardElements.linkId = linkId;
            }
            cardElements.lastCheckedAt = new Date();
            const card = await Card.create(cardElements, { transaction: t });
            const userCategories = await userCategories_1.default.findAll({
                where: { id: categoryIds },
            });
            console.log(userCategories);
            if (card) {
                await card.setUserCategories(userCategories, {
                    through: {
                        cardId: card.id,
                    },
                    transaction: t,
                });
            }
        });
    }
}
Card.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.default.INTEGER,
    },
    userId: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    linkId: {
        type: sequelize_1.default.INTEGER,
        allowNull: true,
    },
    title: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    leanCount: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    totalCount: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    lastCheckedAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.sequelize,
    modelName: "card",
});
Card.hasMany(cardLinks_1.default);
cardLinks_1.default.belongsTo(Card);
Card.hasMany(cardCategories_1.default);
cardCategories_1.default.belongsTo(Card);
Card.belongsToMany(userCategories_1.default, {
    through: "cardCategory",
});
userCategories_1.default.belongsToMany(Card, {
    through: "cardCategory",
});
exports.default = Card;
//# sourceMappingURL=cards.js.map