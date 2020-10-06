const employeeData = [
    { "Employee_ID": "EMP101", "Password": "EMP101"},
    { "Employee_ID": "EMP102", "Password": "EMP101"},
    { "Employee_ID": "EMP103", "Password": "EMP101"},
    { "Employee_ID": "EMP104", "Password": "EMP101"},
    { "Employee_ID": "EMP105", "Password": "EMP101"},
    { "Employee_ID": "EMP106", "Password": "EMP101"},
    { "Employee_ID": "EMP107", "Password": "EMP101"},
    { "Employee_ID": "EMP108", "Password": "EMP101"},
    { "Employee_ID": "EMP109", "Password": "EMP101"},
    { "Employee_ID": "EMP110", "Password": "EMP101"},
    { "Employee_ID": "EMP111", "Password": "EMP101"},
    { "Employee_ID": "EMP112", "Password": "EMP101"},
    { "Employee_ID": "EMP113", "Password": "EMP101"},
    { "Employee_ID": "EMP114", "Password": "EMP101"}
];

const productDetails = [
{
    "id": "PROD0001",
    "title": "Brown eggs",
    "type": "dairy",
    "price": 28.1
  }, {
    "id": "PROD0002",
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "price": 29.45
  }, {
    "id": "PROD0003",
    "title": "Asparagus",
    "type": "vegetable",
    "price": 18.95
  }, {
    "id": "PROD0004",
    "title": "Green smoothie",
    "type": "dairy",
    "price": 17.68
  }, {
    "id": "PROD0005",
    "title": "Raw legums",
    "type": "vegetable",
    "price": 17.11
  }, {
    "id": "PROD0006",
    "title": "Baking cake",
    "type": "dairy",
    "price": 11.14
  }, {
    "id": "PROD0007",
    "title": "Pesto with basil",
    "type": "vegetable",
    "price": 18.19
  }, {
    "id": "PROD0008",
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "price": 27.35
  }, {
    "id": "PROD0009",
    "title": "Fresh stawberry",
    "type": "fruit",
    "price": 28.59
  }, {
    "id": "PROD0010",
    "title": "Lemon and salt",
    "type": "fruit",
    "price": 15.79
  }, {
    "id": "PROD0011",
    "title": "Homemade bread",
    "type": "bakery",
    "price": 17.48
  }, {
    "id": "PROD0012",
    "title": "Legums",
    "type": "vegetable",
    "price": 14.77
  }, {
    "id": "PROD0013",
    "title": "Fresh tomato",
    "type": "vegetable",
    "price": 16.3
  }, {
    "id": "PROD0014",
    "title": "Healthy breakfast",
    "type": "fruit",
    "price": 13.02
  }, {
    "id": "PROD0015",
    "title": "Green beans",
    "type": "vegetable",
    "price": 28.79
  }, {
    "id": "PROD0016",
    "title": "Baked stuffed portabello mushrooms",
    "type": "bakery",
    "price": 20.31
  }, {
    "id": "PROD0017",
    "title": "Strawberry jelly",
    "type": "fruit",
    "price": 14.18
  }, {
    "id": "PROD0018",
    "title": "Pears juice",
    "type": "fruit",
    "price": 19.49
  }, {
    "id": "PROD0019",
    "title": "Peanut Butter and Jelly",
    "type": "bakery",
    "price": 10.13
  }, {
    "id": "PROD0020",
    "title": "Fresh pears",
    "type": "fruit",
    "price": 15.12
  }, {
    "id": "PROD0021",
    "title": "Caprese salad",
    "type": "vegetable",
    "price": 16.76
  }, {
    "id": "PROD0022",
    "title": "Oranges",
    "type": "fruit",
    "price": 21.48
  }, {
    "id": "PROD0023",
    "title": "Vegan food",
    "type": "vegetable",
    "price": 29.66
  }, {
    "id": "PROD0024",
    "title": "Breakfast with muesli",
    "type": "dairy",
    "price": 22.7
  }, {
    "id": "PROD0025",
    "title": "Honey",
    "type": "bakery",
    "price": 17.01
  }, {
    "id": "PROD0026",
    "title": "Breakfast with cottage",
    "type": "fruit",
    "price": 14.05
  }, {
    "id": "PROD0027",
    "title": "Strawberry smoothie",
    "type": "fruit",
    "price": 28.86
  }, {
    "id": "PROD0028",
    "title": "Strawberry and mint",
    "type": "fruit",
    "price": 26.21
  }, {
    "id": "PROD0029",
    "title": "Ricotta",
    "type": "dairy",
    "price": 27.81
  }, {
    "id": "PROD0030",
    "title": "Cuban sandwiche",
    "type": "bakery",
    "price": 18.5
  }, {
    "id": "PROD0031",
    "title": "Granola",
    "type": "dairy",
    "price": 29.97
  }, {
    "id": "PROD0032",
    "title": "Smoothie with chia seeds",
    "type": "fruit",
    "price": 25.26
  }, {
    "id": "PROD0033",
    "title": "Yogurt",
    "type": "dairy",
    "price": 27.61
  }, {
    "id": "PROD0034",
    "title": "Sandwich with salad",
    "type": "vegetable",
    "price": 22.48
  }, {
    "id": "PROD0035",
    "title": "Cherry",
    "type": "fruit",
    "price": 14.35
  }, {
    "id": "PROD0036",
    "title": "Raw asparagus",
    "type": "vegetable",
    "price": 22.97
  }, {
    "id": "PROD0037",
    "title": "Corn",
    "type": "vegetable",
    "price": 13.55
  }, {
    "id": "PROD0038",
    "title": "Vegan",
    "type": "vegan",
    "price": 28.96
  }, {
    "id": "PROD0039",
    "title": "Fresh blueberries",
    "type": "fruit",
    "price": 21.01
  }, {
    "id": "PROD0040",
    "title": "Smashed avocado",
    "type": "fruit",
    "price": 25.88
  }, {
    "id": "PROD0041",
    "title": "Italian ciabatta",
    "type": "bakery",
    "price": 15.18
  }, {
    "id": "PROD0042",
    "title": "Rustic breakfast",
    "type": "dairy",
    "price": 21.32
  }, {
    "id": "PROD0043",
    "title": "Sliced lemons",
    "type": "fruit",
    "price": 27.14
  }, {
    "id": "PROD0044",
    "title": "Plums",
    "type": "fruit",
    "price": 19.18
  }, {
    "id": "PROD0045",
    "title": "French fries",
    "type": "bakery",
    "price": 18.32
  }, {
    "id": "PROD0046",
    "title": "Strawberries",
    "type": "fruit",
    "price": 15.13
  }, {
    "id": "PROD0047",
    "title": "Ground beef meat burger",
    "type": "meat",
    "price": 11.73
  }, {
    "id": "PROD0048",
    "title": "Tomatoes",
    "type": "fruit",
    "price": 26.03
  }, {
    "id": "PROD0049",
    "title": "Basil",
    "type": "vegetable",
    "price": 15.19
  }, {
    "id": "PROD0050",
    "title": "Fruits bouquet",
    "type": "fruit",
    "price": 18.18
  }, {
    "id": "PROD0051",
    "title": "Peaches on branch",
    "type": "fruit",
    "price": 25.62
  }];