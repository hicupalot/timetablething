function getWeek() {
    var weekData = Utilities.formatDate(new Date(), "GMT+1","w"	)
    var weekChecker = weekData%2 //Remember to reset this after holidays!!
    var day = Utilities.formatDate(new Date(), "GMT+1","u")
    var time = Utilities.formatDate(new Date(), "GMT+1","h:mm a")
    if (weekChecker!==0){ //Checks if week 1 or 2
        if (day==1){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B2");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C2");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D2");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E2");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F2");
            }
        }
        else if (day==2){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B3");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C3");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D3");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E3");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F3");
            }
        }
        else if (day==3){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B4");
            }
            else if (time>= "9:45 AM" && time<"10:5 AM"){
                SpreadsheetApp.setActiveRange("C4");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D4");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E4");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F4");
            }
        }
        else if (day==4){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B5");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C5");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D5");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E5");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F5");
            }
        }
        else if (day==5){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B6");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C6");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D6");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E6");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F6");
            }       }
        else if (day==6 || day==7){
            SpreadsheetApp.getUi().alert("It's the weekend!");
        }
    }
    else{
        if (day==1){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B9");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C9");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D9");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E9");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F9");
            }
        }
        else if (day==2){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B10");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C10");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D10");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E10");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F10");
            }
        }
        else if (day==3){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B11");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C11");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D11");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E11");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("E11");
            }
        }
        else if (day==4){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B12");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C12");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D12");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E12");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F12");
            }
        }
        else if (day==5){
            if (time>= "8:45 AM" && time<"9:45 AM"){
                SpreadsheetApp.setActiveRange("B13");
            }
            else if (time>= "9:45 AM" && time<"10:50 AM"){
                SpreadsheetApp.setActiveRange("C13");
            }
            else if (time>= "11:10 AM" && time<"12:15 PM"){
                SpreadsheetApp.setActiveRange("D13");
            }
            else if (time>= "12:15 AM" && time<"1:15 AM"){
                SpreadsheetApp.setActiveRange("E13");
            }
            else if (time>= "1:50 PM" && time<"2:50 PM"){
                SpreadsheetApp.setActiveRange("F13");
            }       }
        else if (day==6 || day==7){
            SpreadsheetApp.getUi().alert("It's the weekend!");
        }
    }
}