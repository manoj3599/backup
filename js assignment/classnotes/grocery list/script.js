
function calcTotal() {
    // my code will execute here only
    const priceNodes = fetchPriceNodes() //step 2
    const totalPrice = sumOfAllPriceNodes(priceNodes) //step3
    if (!checkGrandTotalExists()) {
        const grandTotalRow = createGrandTotalRow(totalPrice)
        appendGrandTotalRowToTable(grandTotalRow)
    } else {
        // update the row
        updateGrandTotalRow(totalPrice)
    }
}

function fetchPriceNodes() {
    const selector = '[data-ns-test="price"]'
    const nodes = document.querySelectorAll(selector)
    // array of price nodes and length of this array as
    // per example will be 4
    return nodes
}

function sumOfAllPriceNodes(nodes) {
    let sum = 0
    for (let i = 0; i < nodes.length; i++) {
        const priceText = nodes[i].innerText // price in string
        const price = Number(priceText) //price in number
        sum += price
    }
    return sum
}
// totalPrice is nothing but 303
function createGrandTotalRow(totalPrice) {
    const row = document.createElement('tr')
    const column1 = document.createElement('td')
    const column2 = document.createElement('td')
    column1.innerText = 'Grand Total'
    column2.innerText = totalPrice
    column2.setAttribute('data-ns-test', 'grandTotal')
    row.appendChild(column1)
    row.appendChild(column2)
    return row
}

function appendGrandTotalRowToTable(grandTotalRow) {
    const tbodyNodes = document.getElementsByTagName('tbody')
    const tbodyNode = tbodyNodes[0]
    tbodyNode.appendChild(grandTotalRow)
}

function updateGrandTotalRow(totalPrice) {
    const selector = '[data-ns-test="grandTotal"]'
    const grandTotalNode = document.querySelector(selector)
    grandTotalNode.innerText = totalPrice
}

// way to write neat clean code

function checkGrandTotalExists() {
    const selector = '[data-ns-test="grandTotal"]'
    const grandTotalNode = document.querySelector(selector)
    return grandTotalNode !== null;
}