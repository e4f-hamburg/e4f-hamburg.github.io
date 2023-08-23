---
---
function contact_me() {

      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      message += "\n\nFreundliche Grüße, " + name + "\n" + email + "\n" + phone;

      // send message through href in button
      document.location.href = "mailto:info@e4f-hamburg.de?subject=Kontaktanfrage an E4F&body=" + message;

      return false;
    }
