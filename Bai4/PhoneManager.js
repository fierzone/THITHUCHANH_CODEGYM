class PhoneManager {
    constructor() {
        this._phones = [];
    }

    addPhone(phone) {
        this._phones.push(phone);
        this.displayPhones();
    }

    displayPhones() {
        const phoneList = document.getElementById("phoneList");
        phoneList.innerHTML = "";
        this._phones.sort((a, b) => a.name.localeCompare(b.name));
        this._phones.forEach(phone => {
            const li = document.createElement("li");
            li.textContent = phone.toString();
            phoneList.appendChild(li);
        });
    }
}

const phoneManager = new PhoneManager();

function addPhone() {
    const code = document.getElementById("code").value;
    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;

    const phone = new Phone(code, name, brand, price);
    phoneManager.addPhone(phone);

    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("price").value = "";
}