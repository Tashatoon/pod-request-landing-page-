function ValidateEmail(inputText)
      {
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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