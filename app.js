    const billInputi = document.querySelector('.numinput');
    const customTipInputi = document.querySelector('.customtip');
    const peopleInputi = document.querySelector('.nopcl');
    const tipAmountShch = document.getElementById('tipamount');
    const totalAmountShch = document.getElementById('tipamount2');
    const tipButtons = document.querySelectorAll('.tipebi');
    const resetButton = document.querySelector('.reset');

    let bill = 0;
    let tipPercent = 0;
    let numPeople = 1;

    billInputi.addEventListener('input', function() {
        bill = parseFloat(this.value);
        calculateTip();
    });

    customTipInputi.addEventListener('input', function() {
        tipPercent = parseFloat(this.value) / 100;
        updateButtonSelection(this);
        calculateTip();
    });

    peopleInputi.addEventListener('input', function() {
        numPeople = parseInt(this.value);
        calculateTip();
    });

    tipButtons.forEach(button => {
        button.addEventListener('click', function() {
            tipPercent = parseFloat(this.textContent) / 100;
            updateButtonSelection(this);
            calculateTip();
        });
    });

    resetButton.addEventListener('click', function() {
        billInputi.value = '';
        customTipInputi.value = '';
        peopleInputi.value = '1';
        bill = 0;
        tipPercent = 0;
        numPeople = 1;
        calculateTip();
    });

    function calculateTip() {
        const tipAmount = bill * tipPercent;
        const totalAmount = bill + tipAmount;
        const tipPerPerson = tipAmount / numPeople;
        const totalPerPerson = totalAmount / numPeople;

        tipAmountShch.textContent = tipPerPerson.toFixed(2);
        totalAmountShch.textContent = totalPerPerson.toFixed(2);
    }

    function updateButtonSelection(selectedElement) {
        if (!selectedElement.classList.contains('customtip')) {
            customTipInputi.value = '';
        }

        tipButtons.forEach(button => {
            if (button === selectedElement) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
