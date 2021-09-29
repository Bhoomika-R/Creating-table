function createTable(r,c)
{
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    for(let i = 0; i < r; i++) {
        let row = document.createElement('tr');
        for(let j =0 ; j< c; j++)  {
            let col = document.createElement('td');
            row.appendChild(col);
        } 
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    return table;
}

function create() {
    var tableContainer = document.querySelector('#tableContainer');
    var rows = document.querySelector('#rows').value;
    var columns = document.querySelector('#columns').value;
    let table = createTable(parseInt(rows),parseInt(columns));
    table.classList.add('table');  //create class 
    table.classList.add('table-bordered')

    //to create table
   
    tableContainer.appendChild(table);
}

