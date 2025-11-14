function insert_Row() {
    //Write your code here
	const table = document.querySelector('#sampleTable');
	const tbody = table.querySelector('tbody') || table;

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = 'New Cell1';

    const td2 = document.createElement('td');
    td2.textContent = 'New Cell2';

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.insertBefore(tr, tbody.firstElementChild);

}
