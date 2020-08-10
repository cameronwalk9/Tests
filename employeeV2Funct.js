module.exports = (browser, info) => {
    browser
    //adding new employee
    .click('@addEmployee')
    .click('@clickNewEmployee')
    .clearValue('@namInput')
    .setValue('@namInput', info.name)
    .clearValue('@phonInput')
    .setValue('@phonInput', info.phoneNumber)
    .clearValue('@emaiInput')
    .setValue('@emaiInput', info.email)
    .clearValue('@titlInput')
        .setValue('@titlInput', info.title)
        //checking Cancel function

 
 
    .waitForElementVisible('@nameValue')
    .getText('@nameValue', function(gitit){
        
        console.log(gitit.value)
    })
    //re enter information to check Save Function
    .clearValue('@namInput')
    .setValue('@namInput', info.name)
    .clearValue('@phonInput')
    .setValue('@phonInput', info.phoneNumber)
    .clearValue('@emaiInput')
    .setValue('@emaiInput', info.email)
    .clearValue('@titlInput')
    .setValue('@titlInput', info.title)
    .click('@saveBtn')
    .pause(2000)
    .waitForElementVisible('@nameValue')
    .getText('@nameValue', function(gitit){
        
        console.log(gitit.value)

    })
    // .click('@employeeDeleteBtn')
    // .accept_Alert()
.pause(2000)
}



    // }
    //Delete employee Function......Tried interacting with pop up window but could not figure out how....
    // .click('@employeeDeleteBtn')
    // .pause(2000)
    // .switchWindow('newWindow'[2])
    // .click('@alertBtn')
    


    
   
