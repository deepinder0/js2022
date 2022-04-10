var balance = 0;
const transactions = {
    "20-01-2021": 100000,
    "23-01-2021": -15000,
    "22-02-2021": -15000,
    "22-04-2021": -15000,
    "21-05-2021": -19000,
    "21-01-2022": -15000,
    "21-02-2022": 100000,
    "21-03-2022": 100000,
    "21-04-2022": 100000,
    "25-04-2022": 100000
}
const values = Object.values(transactions);
document.write(values, '<br>');
for(let i = 0; i < values.length; i++){
    balance = balance + values[i];
}
document.write(balance); 