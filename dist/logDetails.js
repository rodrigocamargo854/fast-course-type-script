"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
//union and aliases
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
function logInfo(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
logDetails(3232, "eewe");
logDetails("wewr", "eewe");
function renderPlatform(plataform) {
    return plataform;
}
renderPlatform('linux');
renderPlatform("macOs");
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(nickName, level, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.level = level;
        _this.nickName = nickName;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return CharAccount;
}(UserAccount));
var newAvatar = new CharAccount('jhon', 11, 'Rodrigo', 18);
console.log(newAvatar);
