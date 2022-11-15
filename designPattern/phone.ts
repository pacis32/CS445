class PhoneNumber { 
    areacode:number; 
    number:string;
    constructor( areacode:number, number:string) {
    this.areacode = areacode;
    this.number = number;
 }
    getPhoneNumber():string {
    return this.areacode + this.number;
    } }
    const person:{
        name:string,
        phoneNumbers:PhoneNumber[]
    } = {
    name: 'John Smith',
    phoneNumbers: [new PhoneNumber(641, '4511111'), new PhoneNumber(641, '4512222')]
    };


    