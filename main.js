name_array=[];
function submit(){
        var name=document.getElementById("name_of_the_student_1").value;
        name_array.push(name);
}
function show(){
    name_array.sort();
    document.getElementById("display_name_with_commas").innerHTML=name_array;
}
function sorting(){
    guest=document.getElementById("guestname").value;
    document.getElementById("searchname").innerHTML=name_array.find(guest);
}