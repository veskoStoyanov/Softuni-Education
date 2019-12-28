class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.available = {
            single: Math.floor(capacity * 0.5),
            double: Math.floor(capacity * 0.3),
            maisonette: Math.floor(capacity * 0.2)
        }
       
        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        
        }
        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights) {


        if (this.available[roomType] === 0) {
            let arr = [];
            arr.push(`No ${roomType} rooms available!`);
            let keys = Object.keys(this.available).filter((r) => this.available[r] > 0);
            
            for (const key of keys) {
                arr.push(`Available ${key} rooms: ${this.available[key]}.`)
            }

            return arr.join(' ');
        }

        let price = this.roomsPricing[roomType] * nights;

        let roomNumber = this.currentBookingNumber;
        this.bookings.push({ clientName, roomType, nights, roomNumber, price });
        let text = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;

        this.currentBookingNumber += 1;
        this.available[roomType] -= 1;

        return text;
    }

    roomService(currentBookingNumber, serviceType) {
        let obj = this.bookings.filter((x) => x.roomNumber === currentBookingNumber)[0];
       
        if (!obj) {
            return `The booking ${currentBookingNumber} is invalid.`
        } if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        let price = this.servicesPricing[serviceType];
        obj.price += price;
        
        if (!obj.hasOwnProperty('service')) {
            obj['service'] = 0;
            obj['services'] = [];
       
        }
       
        obj['service'] += price;
        obj['services'].push(serviceType);

        return `Mr./Mrs. ${obj.clientName}, Your order for ${serviceType} service has been successful.`;

    }

    checkOut(currentBookingNumber) {
        let obj = this.bookings.filter((x) => x.roomNumber === currentBookingNumber)[0];
        
        if (!obj) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        this.available[obj.roomType] += 1;

        if (obj.hasOwnProperty('service')) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${obj.clientName}. The total amount of money you have to pay is ${obj.price} BGN. You have used additional room services, costing ${obj.service} BGN.`
        } else {
            return `We hope you enjoyed your time here, Mr./Mrs. ${obj.clientName}. The total amount of money you have to pay is ${obj.price} BGN.`
        }
    }
    report() {


        let result = [];
        result.push(`${this.name.toUpperCase()} DATABASE:`);
        result.push('--------------------')
        
        if (this.bookings.length === 0) {
            result.push(`There are currently no bookings.`)
            return result.join('\n');

        }

        

        for (let i = 0; i < this.bookings.length; i++) {
            let obj = this.bookings[i];
            result.push(`bookingNumber - ${obj.roomNumber}`);
            result.push(`clientName - ${obj.clientName}`);
            result.push(`roomType - ${obj.roomType}`);
            result.push(`nights - ${obj.nights}`);

            if (obj.hasOwnProperty('services')) {
                result.push(`services: ${obj['services'].join(', ')}`);
            }
            if (i+1 !== this.bookings.length) {
                result.push('----------');
            }    
        }
       
        return result.join('\n')
    }
}