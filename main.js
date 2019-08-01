$(document).ready(function (){
  
     
    $name = $('input[name="item-name"'); 
    $amount = $('input[name="amount"'); 
    
    $date = $('input[name="date"');
    
    var formatDate = function(d) {
      
      var d = d.split('-');
      
      var dt = new Date(d[0],d[1],d[2]); 
      
      var formattedDate = '';
      
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      formattedDate += months[ dt.getMonth()-1 ]; 
  
      var formattedDay;
      
      switch( d[2].substring(1) ) {
        case '1':
          formattedDay = parseInt(d[2]) + "st"; 
          break;        
        case '2':
          formattedDay = parseInt(d[2]) + "nd"; 
          break;        
        case '3':
          formattedDay = parseInt(d[2]) + "rd"; 
          break;  
        default:
          formattedDay = parseInt(d[2]) + "th";
      }
      
      formattedDate += ' ' + formattedDay;
      
      return formattedDate;
    }
    
    
    
    $('#button').click(function () {

      $('.table').show();
     
     
      
      var form_validated = true;
      
      
      if(form_validated) {
       
        $("table").append('<tr><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount">$'+$amount.val()+'</td></br></tr>');
        $date.val(null);
        $amount.val(null);
        $name.val(null);
        $("#if-empty").remove();
      };
    });
    $name = $('input[name="item-name1"'); 
    $amount = $('input[name="amount1"'); 
    
    $date = $('input[name="date1"');
    
    var formatDate = function(d) {
      
      var d = d.split('-');
      
      var dt = new Date(d[0],d[1],d[2]); 
      
      var formattedDate = '';
      
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      formattedDate += months[ dt.getMonth()-1 ]; 
  
      var formattedDay;
      
      switch( d[2].substring(1) ) {
        case '1':
          formattedDay = parseInt(d[2]) + "st"; 
          break;        
        case '2':
          formattedDay = parseInt(d[2]) + "nd"; 
          break;        
        case '3':
          formattedDay = parseInt(d[2]) + "rd"; 
          break;  
        default:
          formattedDay = parseInt(d[2]) + "th";
      }
      
      formattedDate += ' ' + formattedDay;
      
      return formattedDate;
    }
    
    
    
    $('#button1').click(function () {

      $('.table1').show();
     
     
      
      var form_validated = true;
      
      
      if(form_validated) {
       
        $(".table1").append('<tr><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount1">$'+$amount.val()+'</td></br></tr>');
        $date.val(null);
        $amount.val(null);
        $name.val(null);
        $("#if-empty1").remove();
      };
    });
  });