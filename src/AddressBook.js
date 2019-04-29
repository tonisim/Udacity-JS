function AddressBook() {
    this.contacts = [];
}
// fake API koostamine
AddressBook.prototype.getInitialContacts = function(cb){
    var self  = this;

    selfTimeout(function () {
        self.initialComplete = true;
        if(cb) {
            return cb();
        }
    }, 3);
}

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


