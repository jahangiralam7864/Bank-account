document.getElementById('deposit-submit').addEventListener('click',function () {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    // deposit value add
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    const newDepositTotal = currentDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = currentBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    //input ar value delete
    depositInput.value = '';
})


//handel withdraw information
document.getElementById('Withdraw-submit').addEventListener('click',function () {
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.innerText = newWithdrawAmount;
    // set withdrawTotal
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawText = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(currentWithdrawText);
    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = currentBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;



    // clear withdraw input ar value delete
    withdrawInput.value = '';

})