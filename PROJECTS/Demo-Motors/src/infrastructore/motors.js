let motors = [
    {
        _id: '1',
        model: 'Honda',
        description: 'Good motorbike',
        price: 5000,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81C9RK0Xb8L._AC_SX679_.jpg',
        city: 'Varna',
        userId: sessionStorage.getItem('username'),
        token: sessionStorage.getItem('username')
    },
    {
        _id: '2',
        model: 'Kawazaki',
        description: 'Good condition',
        price: 15000,
        image: 'https://edimotocenter.com/wp-content/uploads/2019/01/19zx1000y_201gy3drf1cg_a.jpg',
        city: 'Sofia',
        userId: sessionStorage.getItem('username'),
        token: sessionStorage.getItem('username')
    }
];

export default motors;