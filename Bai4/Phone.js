class Phone {
    constructor(code, name, brand, price) {
        this._code = code;
        this._name = name;
        this._brand = brand;
        this._price = price;
    }

    get code() {
        return this._code;
    }
    set code(newCode) {
        this._code = newCode;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    toString() {
        return `Mã điện thoại: ${this._code}, Tên: ${this._name}, Hãng sản xuất: ${this._brand}, Giá: ${this._price}`;
    }
}
