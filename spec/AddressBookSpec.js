describe('Address Book', function () {
    it('should be able to add a contact', function () {
        var addressBook = new AddressBook();
        thisContact = new Contact();

        addressBook.addContact(thisContact);

        //expectiga alustatakse testi
        expect(
            // tahetakse testida vastavat asja
            addressBook.getContact(0))
            // testi tulemus
            .toBe(thisContact);
    });

    it('should be able to delete a contact', function () {
        var addressBook = new AddressBook(),
            thisContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
