const user = {
    id: 1,
    name: 'Айнура',
    age: 22,
    city: 'Bishkek',
    skills: ['JS', 'HTML', 'CSS'],
};

const numbers = [10, 20, 30, 40, 50];

const { name: username, age, city, skills } = user;
console.log(username, age, city, skills);

const { isAdmin = false } = user;
console.log(isAdmin);

const { name, ...restUser } = user;
console.log(name);
console.log(restUser);

const [first, second, ...others] = numbers;
console.log(first, second, others);

const updatedUser = { ...user, city: 'Osh', status: 'active' };
console.log(updatedUser);


const sumAll = (...nums) => {
    return nums.reduce((acc, num) => {
        return acc + num;
    }, 0);
};
console.log(sumAll(1, 2, 3));
console.log(sumAll(5, 10, 15, 20));

const a = [1, 2, 3];
const b = [4, 5];
const c = [6, 7, 8];

const allNumbers = [...a, ...b, ...c];
console.log(allNumbers);

const printUser = ({ name, age, city }) => {
    console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`);
};

const person = { name: 'Timur', age: 25, city: 'Bishkek' };
printUser(person);

const updateProduct = (product, changes) => {
    return { ...product, ...changes };
};

const product = { id: 1, title: 'iPhone', price: 500, currency: 'USD' };
const changes = { price: 450, currency: 'EUR' };

const updated = updateProduct(product, changes);
console.log(updated);