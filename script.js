function ValidateEmail(inputText)
      {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(inputText.value.match(mailformat))
      {
      alert("Thank you for the valid email address");
      document.form1.text1.focus();
      return true;
      }
      else
      {
      alert("Oops! Please add your email!");
      document.form1.text1.focus();
      return false;
      }
      }