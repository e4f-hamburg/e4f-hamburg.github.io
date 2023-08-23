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

      message += "%0D%0A%0D%0AFreundliche Grüße,%0D%0A" + name + "%0D%0A" + email + "%0D%0A" + phone;

      // send message through href in button
      document.location.href = "mailto:info@e4f-hamburg.de?subject=Kontaktanfrage an E4F&body=" + message;

      // clear form fields
      $("#contactForm").reset()

      return false;
    }
