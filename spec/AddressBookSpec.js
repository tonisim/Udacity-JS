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
});
