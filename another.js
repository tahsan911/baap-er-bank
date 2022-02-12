// 2nd page

document.getElementById('deposit-btn').addEventListener('click', function (){
    const depositInput = document.getElementById('deposit-input');
    const depositShow = document.getElementById('deposit-show')
    const depositInputValue = depositInput.value;
    const depositShowInnerText = depositShow.innerText;
    const parseDepositShowInnerText = parseFloat(depositShowInnerText);
    const parseDepositInputValue = parseFloat(depositInputValue);
    depositShow.innerText = parseDepositShowInnerText + parseDepositInputValue;
    depositInput.value = '';

    // total balance
    const balanceInput = document.getElementById('balance-show');
    const parseBalanceShow = parseFloat(balanceInput.innerText);
    balanceInput.innerText = parseBalanceShow + parseDepositInputValue;
})
document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawInput = document.getElementById('withdraw');
    const withdrawShow = document.getElementById('withdraw-show')
    const withdrawInputValue = withdrawInput.value;
    const withdrawShowInnerText = withdrawShow.innerText;
    const parseWithdrawShowInnerText = parseFloat(withdrawShowInnerText);
    const parseWithdrawInputValue = parseFloat(withdrawInputValue);
    withdrawShow.innerText = parseWithdrawShowInnerText + parseWithdrawInputValue;
    withdrawInput.value = '';

    // total balance
    const balanceInput = document.getElementById('balance-show');
    const parseBalanceShow = parseFloat(balanceInput.innerText);
    balanceInput.innerText = parseBalanceShow - parseWithdrawInputValue;
})
document.getElementById('log-out').addEventListener('click', function (){
    window.location.href = 'baaperbank.html';
})