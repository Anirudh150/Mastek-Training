function validate(){
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const cityName=document.getElementById("cityName").value;
    
    if (firstName.trim() == null || firstName.trim() == "") {
      alert("Name can not be blank");
      return false;
    } else if (lastName.trim() == null || lastName.trim() == "") {
      alert("last name can not be blank");
      return false;
    }
    else if (cityName.trim() == null || cityName.trim() == "") {
      alert("city name can not be blank");
      return false;
    } else {
  
      return true;
    }
  }