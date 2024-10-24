// update table rows
function update_row(no) {
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var name=document.getElementById("name_row"+no);
    var country=document.getElementById("country_row"+no);
    var age=document.getElementById("age_row"+no);

    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;

    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"'value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value'"+age_data+"'>";
}

// store table rows
function save_row(no) {
    var name_val=document.getElementById("name_text"+no).value;
    var country=document.getElementById("country_text"+no).value;
    var age_val=document.getElementById("age_text"+no).value;

    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("country_row"+no).innerHTML=country_val;
    document.getElementById("age_row"+no).innerHTML=age_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

// delete table rows
function delete_row(no) {
    document.getElementById("row"+no+"").outerHTML="";
}

// insert new table rows
function insert_row() {
    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_age=document.getElementById("new_age").value;

    var table=document.getElementById("data_table");
    var table_len=(table.ariaRowSpan.length)-1;
    var row =table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+
    table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row'
}