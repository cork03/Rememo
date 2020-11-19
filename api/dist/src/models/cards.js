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
exports.Cards = exports.UserCategories = exports.cardCategory = exports.CardCategories = void 0;
const sequelize_1 = __importStar(require("sequelize"));
const _1 = require(".");
const cardCategories_1 = __importDefault(require("./cardCategories"));
const cardLinks_1 = __importDefault(require("./cardLinks"));
const userCategories_1 = __importDefault(require("./userCategories"));
const differenceInHours_1 = __importDefault(require("date-fns/differenceInHours"));
class Card extends sequelize_1.Model {
    static async add(cardElements, linkElements, categoryIds) {
        await _1.sequelize.transaction(async (t) => {
            cardElements.lastCheckedAt = new Date();
            cardElements.leanCount = 1;
            const card = await Card.create(cardElements, { transaction: t });
            if (linkElements) {
                for (let value of linkElements) {
                    const link = await cardLinks_1.default.create({
                        string: value,
                        cardId: card.id,
                    }, { transaction: t });
                }
            }
            const userCategories = await userCategories_1.default.findAll({
                where: { id: categoryIds },
            });
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
    static async patch(cardElements, linkElements, categoryIds, postId) {
        await _1.sequelize.transaction(async (t) => {
            Card.update(cardElements, { where: { id: postId } });
            const card = await Card.findByPk(postId);
            const userCategories = await userCategories_1.default.findAll({ where: { id: categoryIds } });
            await card.setUserCategories(userCategories, {
                through: {
                    cardId: card.id,
                },
            });
        });
    }
    static async get(userId) {
        await _1.sequelize.transaction(async (t) => {
            const allCards = await Card.findAll({ where: {
                    [sequelize_1.Op.and]: [
                        { leanCount: { [sequelize_1.Op.lte]: sequelize_1.default.col("totalCount") } },
                        { userId },
                    ],
                }, });
            const returnCards = [];
            const compareTimes = [0, 48, 168, 336, 672];
            const getCards = async (card) => {
                const time = differenceInHours_1.default(new Date(), card.lastCheckedAt);
                if (time >= compareTimes[card.leanCount]) {
                    await Card.update({ checked: 0 }, { where: { id: card.id } });
                    returnCards.push(card);
                }
                if (time <= 24) {
                    returnCards.push(card);
                }
            };
            allCards.forEach(async (card) => {
                await getCards(card);
            });
            return returnCards;
        });
    }
    static async check(cardId) {
        await _1.sequelize.transaction(async (t) => {
            const card = await Card.findByPk(cardId);
            let leanCount = card?.leanCount;
            leanCount++;
            const now = new Date();
            await Card.update({ lastCheckedAt: now, checked: 1, leanCount }, { where: { id: cardId } });
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
    checked: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: false
    },
    lastCheckedAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
}, {
    sequelize: _1.sequelize,
    modelName: "card",
});
Card.hasMany(cardLinks_1.default);
cardLinks_1.default.belongsTo(Card);
exports.CardCategories = Card.hasMany(cardCategories_1.default);
exports.cardCategory = cardCategories_1.default.belongsTo(Card);
exports.UserCategories = Card.belongsToMany(userCategories_1.default, {
    as: "userCategories",
    through: "cardCategory",
});
exports.Cards = userCategories_1.default.belongsToMany(Card, {
    as: "cards",
    through: "cardCategory",
});
exports.default = Card;
//# sourceMappingURL=cards.js.map