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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
const _1 = require(".");
class Card extends sequelize_1.Model {
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
exports.default = Card;
//# sourceMappingURL=cards.js.map