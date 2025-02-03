// Add Device Functionality
function showAddDeviceModal() {
    document.getElementById('addDeviceModal').style.display = 'flex';
}

function hideAddDeviceModal() {
    document.getElementById('addDeviceModal').style.display = 'none';
}

function addDevice(event) {
    event.preventDefault();
    const name = document.getElementById('deviceName').value;
    const type = document.getElementById('deviceType').value;
    const room = document.getElementById('deviceRoom').value;

    const deviceCard = document.createElement('div');
    deviceCard.className = 'device-card';
    deviceCard.innerHTML = `
        <div>
            <h4>${name}</h4>
            <p>Type: ${type}</p>
            <p>Room: ${room}</p>
        </div>
        <button class="btn btn-danger" onclick="removeDevice(this)">Remove</button>
    `;

    document.getElementById('deviceList').appendChild(deviceCard);
    hideAddDeviceModal();
    document.getElementById('deviceName').value = '';
    document.getElementById('deviceRoom').value = '';
}

function removeDevice(button) {
    const deviceCard = button.parentElement;
    deviceCard.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        deviceCard.remove();
    }, 300);
}

// Dark Mode Toggle Functionality
function toggleMode() {
    const body = document.body;
    const modeButton = document.querySelector('.btn-mode');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeButton.textContent = 'Switch to Dark Mode';
    }
}

// Add fadeOut animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);