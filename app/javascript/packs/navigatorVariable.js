const navVar = () => {
  if(navigator.userAgent.indexOf("Chrome") != -1 ) 
  {
       const fontsize = "<style>body{font-size: 125%;}</style>";
  }
  else if(navigator.userAgent.indexOf("Opera") != -1 )
  {
       const fontsize = "<style>body{font-size: 100%;}</style>";
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
  {
       const fontsize = "<style>body{font-size: 100%;}</style>";
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {
       const fontsize = "<style>body {font-size: 100%;}</style>";
  }  
  else 
  {
       const fontsize = "<style>body {font-size: 100%;}</style>";
  }
}
