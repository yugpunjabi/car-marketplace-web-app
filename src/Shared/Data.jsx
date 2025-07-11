const CarMakes = [
  { id: 1, name: "Acura" },
  { id: 2, name: "Alfa Romeo" },
  { id: 3, name: "Aston Martin" },
  { id: 4, name: "Audi" },
  { id: 5, name: "Bentley" },
  { id: 6, name: "BMW" },
  { id: 7, name: "Bugatti" },
  { id: 8, name: "Buick" },
  { id: 9, name: "Cadillac" },
  { id: 10, name: "Chevrolet" },
  { id: 11, name: "Chrysler" },
  { id: 12, name: "Dodge" },
  { id: 13, name: "Ferrari" },
  { id: 14, name: "Fiat" },
  { id: 15, name: "Ford" },
  { id: 16, name: "GMC" },
  { id: 17, name: "Honda" },
  { id: 18, name: "Hyundai" },
  { id: 19, name: "Infiniti" },
  { id: 20, name: "Jaguar" },
  { id: 21, name: "Jeep" },
  { id: 22, name: "Kia" },
  { id: 23, name: "Lamborghini" },
  { id: 24, name: "Land Rover" },
  { id: 25, name: "Lexus" },
  { id: 26, name: "Lincoln" },
  { id: 27, name: "Maserati" },
  { id: 28, name: "Mazda" },
  { id: 29, name: "McLaren" },
  { id: 30, name: "Mercedes-Benz" },
  { id: 31, name: "Mini" },
  { id: 32, name: "Mitsubishi" },
  { id: 33, name: "Nissan" },
  { id: 34, name: "Pagani" },
  { id: 35, name: "Porsche" },
  { id: 36, name: "Ram" },
  { id: 37, name: "Rolls-Royce" },
  { id: 38, name: "Subaru" },
  { id: 39, name: "Tesla" },
  { id: 40, name: "Toyota" },
  { id: 41, name: "Volkswagen" },
  { id: 42, name: "Volvo" }
];

const Pricing = [
  { label: "Below $10,000", min: 0, max: 10000 },
  { label: "$10,000 - $20,000", min: 10000, max: 20000 },
  { label: "$20,000 - $30,000", min: 20000, max: 30000 },
  { label: "Above $30,000", min: 30000, max: 1000000 }
];


const Category = [
  { name: "SUV", icon: "https://cdn-icons-png.flaticon.com/128/13584/13584003.png" },
  { name: "Sedan", icon: "https://cdn-icons-png.flaticon.com/128/3202/3202003.png" },
  { name: "Coupe", icon: "https://cdn-icons-png.flaticon.com/128/4391/4391630.png" },
  { name: "Convertible", icon: "https://cdn-icons-png.flaticon.com/128/5035/5035202.png" },
  { name: "Hatchback", icon: "https://cdn-icons-png.flaticon.com/128/5035/5035167.png" },
  { name: "Truck", icon: "https://cdn-icons-png.flaticon.com/128/5814/5814855.png" },
  { name: "Van", icon: "https://cdn-icons-png.flaticon.com/128/1433/1433678.png" },
  { name: "Wagon", icon: "https://cdn-icons-png.flaticon.com/128/5035/5035167.png" },
  { name: "Luxury", icon: "https://cdn-icons-png.flaticon.com/128/13584/13584003.png" },
  {name:'Electric', icon:'https://cdn-icons-png.flaticon.com/128/4564/4564336.png'}

  //<a href="https://www.flaticon.com/free-icons/station-wagon" title="station wagon icons">Station wagon icons created by kerismaker - Flaticon</a>
];

const Data = {
  CarMakes,
  Pricing,
  Category
};

export default Data;
