// record transactions
// display record
// display ending balance

let transHis = []

const payerTag = document.querySelector('#payer')
const recipientTag = document.querySelector('#recipient')
const amountTag = document.querySelector('#amount')
const descriptionTag = document.querySelector('#description')
const submitTag = document.querySelector('#submit')

const transHistTag = document.querySelector('#transaction_history')
const balanceTag = document.querySelector('#balance')

submitTag.addEventListener('click', () => {
    if (payerTag.value != "" && amountTag.value != '' && descriptionTag.value != '' && payerTag.value != recipientTag.value) {
        // add transaction to array
        let transaction = {}

        transaction[`${payerTag.value}`] = -(parseFloat(amountTag.value))
        transaction[`${recipientTag.value}`] = parseFloat(amountTag.value)
        transaction.description = descriptionTag.value

        transHis.push(transaction)

        // display transaction history
        let transTag = document.createElement('p')
        transTag.textContent = `${transaction[`${payerTag.value}`]} | ${transaction[`${recipientTag.value}`]} | ${transaction.description}`
        transHistTag.appendChild(transTag)

        // balance transactions
        let balance = {}
        for (let i = 0; i < transHis.length; i++) {
            let trans = Object.keys(transHis[i])
            for (let k = 0; k < trans.length; k++) {
                if (balance.hasOwnProperty(trans[k])) {
                    balance[trans[k]] += transHis[i][trans[k]]
                } else {
                    balance[trans[k]] = transHis[i][trans[k]]
                }
            }
        }

        let balanceKeys = Object.keys(balance)
        while (balanceTag.firstChild) {
            balanceTag.removeChild(balanceTag.firstChild)
        }
        for (let i = 0; i < balanceKeys.length; i++) {
            const account = document.createElement('p')
            account.textContent = `${balanceKeys[i]} ${balance[balanceKeys[i]]}`
            balanceTag.appendChild(account)
        }
    }
    console.log(transHis)
})