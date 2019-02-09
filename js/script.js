(function () {
    const save = document.getElementById('btn-save');
    const reset = document.getElementById('btn-reset');

    const contBills = document.getElementById('cont-bills');
    const forms = document.querySelectorAll('.field-form');
    const data = document.querySelectorAll('.js-data');

    const dataName = document.getElementById('name');
    const dataAmount = document.getElementById('amount');
    const dataDate = document.getElementById('date');
    const dataType = document.getElementById('type');

    let bills = [];
    let inputs = [];

    // crate table
    const table = document.createElement('table');
    const rowBtn = document.createElement('tr');
    const btnName = document.createElement('th');
    const btnType = document.createElement('th');
    const btnDate = document.createElement('th');
    const btnAmount = document.createElement('th');
    const divBill = document.createElement('tbody');

    btnName.innerHTML = 'Name';
    btnType.innerHTML = 'Type';
    btnDate.innerHTML = 'Date';
    btnAmount.innerHTML = 'Amount';

    btnName.setAttribute('class', 'btn-table');
    btnType.setAttribute('class', 'btn-table');
    btnDate.setAttribute('class', 'btn-table');
    btnAmount.setAttribute('class', 'btn-table');

    btnName.setAttribute('id', 'btn-name');
    btnType.setAttribute('id', 'btn-type');
    btnDate.setAttribute('id', 'btn-date');
    btnAmount.setAttribute('id', 'btn-amount');

    rowBtn.appendChild(btnName);
    rowBtn.appendChild(btnType);
    rowBtn.appendChild(btnDate);
    rowBtn.appendChild(btnAmount);
    table.appendChild(rowBtn);
    contBills.appendChild(table);
    table.appendChild(divBill);
    
    cleanClass();

    function updateTotal(total) {
        
    }

    function addTotal() {
        let total = 0;
        for (let i = 0; i < bills.length; i++) {
            total = total + bills[i].amount;
        }
        updateTotal(total);
    }

    function orderList() {
        for (let i = 0; i < bills.length; i++){
            Bills = bills.sort(function (prev, next) {
                if (prev.name > next.name) {
                    return 1;
                }
                if (prev.name < next.name) {
                    return -1;
                }
                return 0;
            });
        }
        addBill();
    }

    function addBill() {
        divBill.innerHTML= '';
        for (let i = 0; i < Bills.length; i++) {
            let rowBill = document.createElement('tr');
            let nameBill = document.createElement('td');
            let typeBill = document.createElement('td');
            let dateBill = document.createElement('td');
            let amountBill = document.createElement('td');

            nameBill.innerHTML = Bills[i].name;
            typeBill.innerHTML = Bills[i].type;
            dateBill.innerHTML = Bills[i].date;
            amountBill.innerHTML = Bills[i].amount;

            rowBill.appendChild(nameBill);
            rowBill.appendChild(typeBill);
            rowBill.appendChild(dateBill);
            rowBill.appendChild(amountBill);

            divBill.appendChild(rowBill);
        }
        addTotal();
    }

    class createBill {
        constructor(nameValue, typeValue, dateValue, amountValue) {
            this.name = nameValue;
            this.type = typeValue;
            this.date = dateValue;
            this.amount = parseInt(amountValue);
        }
    }

    function cleanForm() {
        for(let form of forms) {
            form.value = '';
        }
    }

    function uploadBill() {
        let newConstructor = new createBill(dataName.value,
                                            dataType.value,
                                            dataDate.value,
                                            dataAmount.value);
        bills.push(newConstructor);
        cleanForm();
        orderList();
    }
    function cleanClass () {
        data.forEach((e) => {
            e.classList.remove('error');
        });
    }

    function validateForm() {
        cleanClass();
        
        data.forEach((e) => {
            inputs.push(e);
        });
        const valued = inputs.filter(function(element) {
            if (!((element.value) === '')){
                return true;
            }else {
                element.classList.add('error');
                return false;
            }
        }); 
        inputs = [];
        if (valued.length === data.length){
            uploadBill();
        }
    }
    reset.addEventListener('click', cleanForm);
    save.addEventListener('click', validateForm);
})();