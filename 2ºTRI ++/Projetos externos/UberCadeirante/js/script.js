document.addEventListener('DOMContentLoaded', () => {
    const requestRideBtn = document.getElementById('request-ride-btn');
    const rideRequestSection = document.getElementById('ride-request');
    const mapViewSection = document.getElementById('map-view');
    const paymentOptionsSection = document.getElementById('payment-options');
    const cancelRideBtn = document.getElementById('cancel-ride-btn');
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
    const rideInfoDiv = document.getElementById('ride-info');
    const driverNameSpan = document.getElementById('driver-name');
    const driverPlateSpan = document.getElementById('driver-plate');
    const arrivalTimeSpan = document.getElementById('arrival-time');

    requestRideBtn.addEventListener('click', () => {
        // Simulação de solicitação de viagem
        alert('Buscando motoristas...');
        // Simula a transição para a tela do mapa
        rideRequestSection.classList.add('hidden');
        mapViewSection.classList.remove('hidden');

        // Simula a chegada de um motorista
        setTimeout(() => {
            driverNameSpan.textContent = 'Carlos Silva';
            driverPlateSpan.textContent = 'ABC-1234';
            arrivalTimeSpan.textContent = '5 minutos';
            rideInfoDiv.classList.remove('hidden');
            cancelRideBtn.classList.remove('hidden');
        }, 3000);
    });

    cancelRideBtn.addEventListener('click', () => {
        alert('Viagem cancelada.');
        mapViewSection.classList.add('hidden');
        rideRequestSection.classList.remove('hidden');
        rideInfoDiv.classList.add('hidden');
        cancelRideBtn.classList.add('hidden');
    });

    // Simulação de confirmação de pagamento
    if (confirmPaymentBtn) {
        confirmPaymentBtn.addEventListener('click', () => {
            alert('Pagamento confirmado! O motorista está a caminho.');
            paymentOptionsSection.classList.add('hidden');
            // Aqui você poderia voltar para a tela do mapa com informações da viagem
        });
    }

    // Adiciona funcionalidade para avançar para a tela de pagamento (simulada)
    const mapPlaceholder = document.getElementById('map');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', () => {
            if (!mapViewSection.classList.contains('hidden')) {
                alert('Selecionando forma de pagamento...');
                mapViewSection.classList.add('hidden');
                paymentOptionsSection.classList.remove('hidden');
            }
        });
    }
});