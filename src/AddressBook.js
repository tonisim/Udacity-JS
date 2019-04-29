function AddressBook() {
    this.contacts = [];
}
// Tuli lisada, et saada tööle AddressBookSpec.js
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};
// Tuli lisada, et saada tööle AddressBookSpec.js
AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
};

AddressBook.prototype.deleteContact = function (index) {
    this.contacts.splice(index, 1);
};


