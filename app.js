    const billInput = document.querySelector('.numinput');
    const customTipInput = document.querySelector('.customtip');
    const peopleInput = document.querySelector('.nopcl');
    const tipAmountDisplay = document.getElementById('tipamount');
    const totalAmountDisplay = document.getElementById('tipamount2');
    const tipButtons = document.querySelectorAll('.tipebi');
    const resetButton = document.querySelector('.reset');

    let bill = 0;
    let tipPercent = 0;
    let numPeople = 1;

    billInput.addEventListener('input', function() {
        bill = parseFloat(this.value);
        calculateTip();
    });

    customTipInput.addEventListener('input', function() {
        tipPercent = parseFloat(this.value) / 100;
        updateButtonSelection(this);
        calculateTip();
    });

    peopleInput.addEventListener('input', function() {
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
        billInput.value = '';
        customTipInput.value = '';
        peopleInput.value = '1';
        bill = 0;
        tipPercent = 0;
        numPeople = 1;
        calculateTip();
    });

    function calculateTip() {
        if (numPeople < 1 || isNaN(numPeople)) {
            alert('Number of people must be at least 1 and more');
            return;
        }
        const tipAmount = bill * tipPercent;
        const totalAmount = bill + tipAmount;
        const tipPerPerson = tipAmount / numPeople;
        const totalPerPerson = totalAmount / numPeople;

        tipAmountDisplay.textContent = tipPerPerson.toFixed(2);
        totalAmountDisplay.textContent = totalPerPerson.toFixed(2);
    }

    function updateButtonSelection(selectedElement) {
        if (!selectedElement.classList.contains('customtip')) {
            customTipInput.value = '';
        }

        tipButtons.forEach(button => {
            if (button === selectedElement) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
