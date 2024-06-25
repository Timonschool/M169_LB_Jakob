async function fetchContacts() {
    const response = await fetch('/contacts');
    const contacts = await response.json();
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const button = document.createElement('button');
        button.textContent = `${contact.firstname} ${contact.lastname}`;
        button.addEventListener('click', () => openContactModal(contact));
        contactList.appendChild(button);
    });
}

async function addContact() {
    const contactFirstNameInput = document.getElementById('contact-firstname');
    const contactLastNameInput = document.getElementById('contact-lastname');
    const contactPhoneInput = document.getElementById('contact-phone');
    const contactEmailInput = document.getElementById('contact-email');
    const firstname = contactFirstNameInput.value.trim();
    const lastname = contactLastNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();
    const email = contactEmailInput.value.trim();
    if (firstname && lastname && phone && email) {
        const response = await fetch('/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, phone, email })
        });
        if (response.ok) {
            fetchContacts();
            contactFirstNameInput.value = '';
            contactLastNameInput.value = '';
            contactPhoneInput.value = '';
            contactEmailInput.value = '';
        } else {
            console.error('Failed to add contact');
        }
    }
}

async function deleteContact(id) {
    const response = await fetch(`/contacts/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        closeContactModal();
        fetchContacts();
    } else {
        console.error('Failed to delete contact');
    }
}

function openContactModal(contact) {
    const modal = document.getElementById('contact-modal');
    const modalContactName = document.getElementById('modal-contact-name');
    const modalContactPhone = document.getElementById('modal-contact-phone');
    const modalContactEmail = document.getElementById('modal-contact-email');
    const deleteButton = document.getElementById('delete-contact');

    modalContactName.textContent = `${contact.firstname} ${contact.lastname}`;
    modalContactPhone.textContent = `Phone: ${contact.phone}`;
    modalContactEmail.textContent = `Email: ${contact.email}`;

    deleteButton.addEventListener('click', () => deleteContact(contact._id));

    modal.style.display = 'block'; 
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = 'none'; 
}

document.getElementsByClassName('close')[0].addEventListener('click', closeContactModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target === modal) {
        closeContactModal();
    }
});

document.getElementById('add-contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

fetchContacts();
