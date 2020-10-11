function init(){
    document.getElementById("btnSignIn").addEventListener("click", signIn_btnClick);

    document.getElementById("inpEmployeeID").addEventListener("keyup", checkEnterPress);
    document.getElementById("inpPassword").addEventListener("keyup", checkEnterPress);
}

function signIn_btnClick(){
    var empID = document.getElementById("inpEmployeeID").value;
    var empPass = document.getElementById("inpPassword").value;

    if(empID == ""){
        var errorID = document.getElementById("dispErrorEmp");
        errorID.innerHTML = "***Please Enter Employee ID***";
        document.getElementById("dispErrorPass").innerHTML = "";
    }
    else if(empPass == ""){
        document.getElementById("dispErrorEmp").innerHTML = "";
        var errorPass = document.getElementById("dispErrorPass");
        errorPass.innerHTML = "***Please Enter Password***";
    }
    else{
        document.getElementById("dispErrorEmp").innerHTML = "";
        document.getElementById("dispErrorPass").innerHTML = "";

        if(processSignIn(empID, empPass)){
            takeMeInside(empID);
        }
        else{
            alert("Username or Password Entered is Incorrect!");
        }
    }
}

function processSignIn(empID, empPass){
    var emp_found = false;
    for(var i=0;i<employeeData.length;i++){
        if(empID.toUpperCase() === employeeData[i].Employee_ID){
            if(empPass === employeeData[i].Password){
                emp_found = true;
                break;
            }
        }
    }
    return emp_found;
}

function takeMeInside(empID){
    window.location.href = "POSDataEntry.htm?EmployeeID=" + empID.toUpperCase();
}

function checkEnterPress(event){
    if(event.keyCode == 13){
        signIn_btnClick();
    }
}