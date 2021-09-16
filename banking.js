document.getElementById('btn-1').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-amount');
    const depositValue = depositAmount.value;
    const depositValueParseFloat = parseFloat(depositValue);
    const deposit = document.getElementById('deposit');
    const depositInnerText = deposit.innerText;
    const depositParseFloat = parseFloat(depositInnerText);
    const newDeposit = depositParseFloat + depositValueParseFloat;
    deposit.innerText = newDeposit;
    // update balance part
    const balanceAmount = document.getElementById('balance');
    const balanceInnerText = balanceAmount.innerText;
    const balanceTotalParseFloat = parseFloat(balanceInnerText);
    const newBalanceTotal = balanceTotalParseFloat + depositValueParseFloat;
    balanceAmount.innerText = newBalanceTotal;
    depositAmount.value = '';
});
// withdraw amount

document.getElementById('btn-2').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.value;
    const withdrawAmountValueParseFloat = parseFloat(withdrawAmountValue);
    
    const withdraw = document.getElementById('withdraw');
    const withdrawInnerText = withdraw.innerText;
    const withdrawInnerTextParseFloat = parseFloat(withdrawInnerText);
    const newWithdraw = withdrawAmountValueParseFloat + withdrawInnerTextParseFloat;
    withdraw.innerText = newWithdraw;
    const balanceAmount = document.getElementById('balance');
    const balanceInnerText = balanceAmount.innerText;
    const balanceTotalParseFloat = parseFloat(balanceInnerText);
    const finalBalance = balanceTotalParseFloat - withdrawAmountValueParseFloat ;
    balanceAmount.innerText = finalBalance;
    withdrawAmount.value = '';

});

