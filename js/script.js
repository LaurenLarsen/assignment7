// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("form");
let table = document.querySelector("table");
   
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

table.getElementsByClassName("title mb-4").length


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION


    // GET THE VALUES FROM THE TEXT BOXES
    //let id = document.getElementById("id").value;
    //let name = document.getElementById("name").value;
   // let ext = document.getElementById("extension").value;
   // let email = document.getElementById("email").value;
   // let department = document.getElementById("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
      //  let table = document.getElementById('employees');
        //let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

     //  let cellID1 = row.insertCell();
     //  let cellID2 = row.insertCell();
     //  let cellID3 = row.insertCell();
     //  let cellID4 = row.insertCell();
      // let cellID5 = row.insertCell();

       
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
       // cellID1.innerHTML = document.getElementById(id);
      //  row.appendChild(cellID1);
      //  row.appendChild(cellID2);
      //  row.appendChild(cellID3);
       // row.appendChild(cellID4);
       // row.appendChild(cellID5);
       // table.children[0].appendChild(row);

        


    // CREATE THE DELETE BUTTON

            let table = document.getElementById('employees');
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
           let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let td6 = document.createElement('td');
           let td7 = document.createElement('td');
            td1.innerHTML = document.getElementsByTagName('tr').length;
            td2.innerHTML = document.getElementById('id').value;
            td3.innerHTML = document.getElementById('name').value;
           td4.innerHTML = document.getElementById('extension').value;
            td5.innerHTML = document.getElementById('email').value;
           td6.innerHTML = document.getElementById('department').value;
            td7.innerHTML = document.getElementById('delete').value;
            row.appendChild(td1);
           row.appendChild(td2);
           row.appendChild(td3);
           row.appendChild(td4);
           row.appendChild(td5);
            row.appendChild(td6);
            row.appendChild(td7);
          table.children[0].appendChild(row);

    // RESET THE FORM
    document.getElementById("addForm").reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    let x = 1000;
    y = x++; 
    

});


// DELETE EMPLOYEE
