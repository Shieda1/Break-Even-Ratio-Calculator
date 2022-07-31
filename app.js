// https://calculator.swiftutors.com/break-even-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const breakEvenRatioRadio = document.getElementById('breakEvenRatioRadio');
const debtServiceRadio = document.getElementById('debtServiceRadio');
const operatingExpenseRadio = document.getElementById('operatingExpenseRadio');
const grossOperatingIncomeRadio = document.getElementById('grossOperatingIncomeRadio');

let breakEvenRatio;
let debtService = v1;
let operatingExpense = v2;
let grossOperatingIncome = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

breakEvenRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Service';
  variable2.textContent = 'Operating Expense';
  variable3.textContent = 'Gross Operating Income';
  debtService = v1;
  operatingExpense = v2;
  grossOperatingIncome = v3;
  result.textContent = '';
});

debtServiceRadio.addEventListener('click', function() {
  variable1.textContent = 'Break Even Ratio';
  variable2.textContent = 'Operating Expense';
  variable3.textContent = 'Gross Operating Income';
  breakEvenRatio = v1;
  operatingExpense = v2;
  grossOperatingIncome = v3;
  result.textContent = '';
});

operatingExpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Break Even Ratio';
  variable2.textContent = 'Debt Service';
  variable3.textContent = 'Gross Operating Income';
  breakEvenRatio = v1;
  debtService = v2;
  usefulLifeinYears = v3;
  result.textContent = '';
});

grossOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Break Even Ratio';
  variable2.textContent = 'Debt Service';
  variable3.textContent = 'Operating Expense';
  breakEvenRatio = v1;
  debtService = v2;
  operatingExpense = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(breakEvenRatioRadio.checked)
    result.textContent = `Break Even Ratio = ${computeBreakEvenRatio().toFixed(2)} %`;

  else if(debtServiceRadio.checked)
    result.textContent = `Debt Service = ${computeDebtService().toFixed(2)}`;

  else if(operatingExpenseRadio.checked)
    result.textContent = `Operating Expense = ${computeOperatingExpense().toFixed(2)}`;

  else if(grossOperatingIncomeRadio.checked)
    result.textContent = `Gross Operating Income = ${computeGrossOperatingIncome().toFixed(2)}`;
})

// calculation

function computeBreakEvenRatio() {
  return ((Number(debtService.value) + Number(operatingExpense.value)) / Number(grossOperatingIncome.value)) * 100;
}

function computeDebtService() {
  return ((Number(breakEvenRatio.value) / 100) * Number(grossOperatingIncome.value)) - Number(operatingExpense.value);
}

function computeOperatingExpense() {
  return ((Number(breakEvenRatio.value) / 100) * Number(grossOperatingIncome.value)) - Number(debtService.value);
}

function computeGrossOperatingIncome() {
  return (Number(debtService.value) + Number(operatingExpense.value)) / (Number(breakEvenRatio.value) / 100);
}