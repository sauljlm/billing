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
    let error = [];
    let inputs = [];

    cleanClass();

    
    const table = document.createElement('table');
    const btnTable = document.createElement('tr');
    const btnName = document.createElement('th');
    const btnType = document.createElement('th');
    const btnDate = document.createElement('th');
    const btnAmount = document.createElement('th');

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

    table.appendChild(btnName);
    table.appendChild(btnType);
    table.appendChild(btnDate);
    table.appendChild(btnAmount);
    table.appendChild(btnTable);
    contBills.appendChild(table);
    

    function addBill(index) {
        const btnTable = document.createElement('tr');
        const nameBill = document.createElement('td');
        const typeBill = document.createElement('td');
        const dateBill = document.createElement('td');
        const amountBill = document.createElement('td');

        nameBill.innerHTML = bills[index].name;
        typeBill.innerHTML = bills[index].type;
        dateBill.innerHTML = bills[index].date;
        amountBill.innerHTML = bills[index].amount;

        btnTable.appendChild(nameBill);
        btnTable.appendChild(typeBill);
        btnTable.appendChild(dateBill);
        btnTable.appendChild(amountBill);
    
        table.appendChild(btnTable);
    }

    class createBill {
        constructor(nameValue, typeValue, dateValue, amountValue) {
            this.name = nameValue;
            this.type = typeValue;
            this.date = dateValue;
            this.amount = amountValue;
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
        console.log(newConstructor);
        console.log(bills); // bills es el array
        cleanForm();
        addBill(bills.length - 1);
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
                error.push(element);
                element.classList.add('error');
                return false;
            }
        }); 
        // console.log(valued);
        // console.log(error);
        inputs = [];
        error = [];
        if (valued.length === data.length){
            uploadBill();
        }
    }
    reset.addEventListener('click', cleanForm);
    save.addEventListener('click', validateForm);
})();