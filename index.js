document.getElementById('submit').onclick = function calculateCost() {
    const quantity = parseInt(document.getElementById('calculator__intput').value);
    const basePrice = parseInt(document.getElementById('calculator__select').value);
    const deliveryCost = calculateDeliveryCost();
    const totalCost = quantity * (basePrice + deliveryCost);

    if (isNaN(quantity) || isNaN(basePrice) || quantity <= 0 || basePrice <= 0) {
        document.getElementById('result').textContent = "Пожалуйста выберите товар или укажите положительное количество";
        return;
    }

    document.getElementById('result').textContent = `Стоимость заказа: ${totalCost} руб.`;
}

function calculateDeliveryCost() {
    const deliveryTypeSelect = document.getElementById('deliveryType');
    let deliveryCost = 0;

    switch (deliveryTypeSelect.value) {
        case 'noDelivery':
            deliveryCost = 0;
            break;
        case 'withinRUS':
            deliveryCost = 1000;
            break;
        case 'abroad':
            deliveryCost = 0;
            break;
    }

    const selectedServiceType = document.querySelector('input[name="serviceType"]:checked');
    if (selectedServiceType) {
        switch (selectedServiceType.value) {
            case 'europe':
                deliveryCost += 3000;
                break;
            case 'china':
                deliveryCost += 2500;
                break;
            case 'america':
                deliveryCost += 5000;
                break;
            case 'none':
                deliveryCost += 0;
                break;
        }
    }

    return deliveryCost;
}

document.getElementById('deliveryType').onchange = function() {
    const deliveryTypeSelect = document.getElementById('deliveryType');
    const serviceTypeContainer = document.getElementById('radios');

    if (deliveryTypeSelect.value == 'abroad') {
        serviceTypeContainer.style.display = 'block';
    } else {
        serviceTypeContainer.style.display = 'none';
    }
}
 