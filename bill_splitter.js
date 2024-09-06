//Initial Logic for Calculating the Tip
var customerBill = 295 //number
var customerTip = (300 < customerBill < 50) ? (.2*customerBill) : (.15*customerBill) 
(console.log("Customer Tip:",customerTip))

//Add output functionality to display bill, tip, and total
let customerTotal = customerBill+customerTip //number
let customerSummary = `Customer Summary:
The bill was $${customerBill} 
The tip was $${customerTip}
The total was $${customerTotal}`
console.log(customerSummary)

//Create and test calculatecustomerTip function
function calculatecustomerTip(customerBill,customerTip){return customerBill+customerTip}
console.log(calculatecustomerTip(100,customerTip))
