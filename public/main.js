const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Maximus',
            quote: 'Are You Not Entertained? Are You Not Entertained? Is This Not Why You Are Here?',
        }),
    })
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(response => {
            if (response === 'No quote to replace') {
                messageDiv.textContent = 'No more Commodus quotes to replace!';
            } else {
                window.location.reload(true);
            }
        })
        .catch(error => console.error(error));
})

const deleteButton = document.querySelector('#delete-button');
const messageDiv = document.querySelector('#message');

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Maximus'
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No more Maximus quotes to delete!';
            } else {
                window.location.reload(true);
            }
        })
        .catch(error => console.error(error));
})


