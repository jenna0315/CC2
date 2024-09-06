//Initial Logic for Calculating the Tip
let customerBill = 295 //number
let customerTip = (300 < customerBill < 50) ? (.2*customerBill) : (.15*customerBill) 
console.log(customerBill, customerTip)

//Add output functionality to display bill, tip, and total
let customerTotal = customerBill+customerTip //number
let customerSummary = `Customer Summary:
The bill was $${customerBill} 
The tip was $${customerTip}
The total was $${customerTotal}`
console.log(customerSummary)
