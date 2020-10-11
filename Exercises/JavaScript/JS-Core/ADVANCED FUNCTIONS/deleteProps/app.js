const mongoose = require('mongoose');

const defaultFields = [
	'createdAt',
	'updatedAt',
	'__v'
];

function removePropsHelper(obj, fields) {
    const alteredObj = {};
    Object.keys(obj)
        .forEach(key => {
            if (!fields.includes(key)) {
                if (typeof obj[key] === 'object') {
                    obj[key] = removeProps(obj[key], fields);
                }

                alteredObj[key] = obj[key];
            }	
        });
        
    return alteredObj;
};

function removeProps(data, fields = defaultFields) {
    if (data instanceof mongoose.Model) {
        data = data.toObject();	
    }
    
    if (Array.isArray(data)) {
        return data.map(el => removeProps(el, fields));
    } else if (data != null && data.constructor.name === "Object") {
        return removePropsHelper(data, fields);	
    }
    
    return data;
};

const obj = {
    state: 'aproved',
    currency: 'BGN',
    _id: '5f63101f8433620c04ffd1ed',
    product: {
      hasOnline: false,
      partners: [ '5e99a695f06f95778316fa3c' ],
      _id: '5ec648ee1cc2050c34765bcc',
      insuranceType: '5e999dd42d5a9e7311647b74',
      company: '5e99a1116cd7f2743a902fc5',
      corrections: [ {
        state: 'aproved',
        currency: 'BGN',
        _id: '5f63101f8433620c04ffd1ed',
        product: {
          hasOnline: false,
          partners: [ '5e99a695f06f95778316fa3c' ],
          _id: '5ec648ee1cc2050c34765bcc',
          insuranceType: '5e999dd42d5a9e7311647b74',
          company: '5e99a1116cd7f2743a902fc5',
          corrections: [  ],
          __v: 0,
          createdAt: '2020-09-13T17:30:46.348Z',
          updatedAt: '2020-09-13T17:30:46.348Z'
        },
        partner: '5e99a695f06f95778316fa3a',
        price: 0,
        broker: '5e99a695f06f95778316fa3a',
        payments: [],
        createdAt: '2020-09-17T07:28:31.822Z',
        updatedAt: '2020-09-17T07:28:31.885Z',
        __v: 0
      },
      {
        state: 'aproved',
        currency: 'BGN',
        _id: '5f63101f8433620c04ffd1ed',
        product: {
          hasOnline: false,
          partners: [ '5e99a695f06f95778316fa3c' ],
          _id: '5ec648ee1cc2050c34765bcc',
          insuranceType: '5e999dd42d5a9e7311647b74',
          company: '5e99a1116cd7f2743a902fc5',
          corrections: [  ],
          __v: 0,
          createdAt: '2020-09-13T17:30:46.348Z',
          updatedAt: '2020-09-13T17:30:46.348Z'
        },
        partner: '5e99a695f06f95778316fa3a',
        price: 0,
        broker: '5e99a695f06f95778316fa3a',
        payments: [],
        createdAt: '2020-09-17T07:28:31.822Z',
        updatedAt: '2020-09-17T07:28:31.885Z',
        __v: 0
      }
    ],
    data: [
        {
            state: 'aproved',
            currency: 'BGN',
            _id: '5f63101f8433620c04ffd1ed',
            product: {
              hasOnline: false,
              partners: [ '5e99a695f06f95778316fa3c' ],
              _id: '5ec648ee1cc2050c34765bcc',
              insuranceType: '5e999dd42d5a9e7311647b74',
              company: '5e99a1116cd7f2743a902fc5',
              corrections: [  ],
              __v: 0,
              createdAt: '2020-09-13T17:30:46.348Z',
              updatedAt: '2020-09-13T17:30:46.348Z'
            },
            partner: '5e99a695f06f95778316fa3a',
            price: 0,
            broker: '5e99a695f06f95778316fa3a',
            payments: [],
            createdAt: '2020-09-17T07:28:31.822Z',
            updatedAt: '2020-09-17T07:28:31.885Z',
            __v: 0
          }
    ] ,
      __v: 0,
      createdAt: '2020-09-13T17:30:46.348Z',
      updatedAt: '2020-09-13T17:30:46.348Z'
    },
    partner: '5e99a695f06f95778316fa3a',
    price: 0,
    broker: '5e99a695f06f95778316fa3a',
    payments: [],
    createdAt: '2020-09-17T07:28:31.822Z',
    updatedAt: '2020-09-17T07:28:31.885Z',
    __v: 0
  }


  const newObj = removeProps(obj);
  console.log(newObj);