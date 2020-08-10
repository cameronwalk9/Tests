var empAsset = require('../testAssests/employeeV2Asset')
var V2Commands = {

    clearandenter: function (){
        this.clearValue('@namInput')
        this.setValue('@namInput', empAsset[0].name)
        this.clearValue('@phonInput')
        this.setValue('@phonInput', empAsset[0].phoneNumber)
        this.clearValue('@emaiInput')
        this.setValue('@emaiInput', empAsset[0].email)
        this.clearValue('@titlInput')
        this.setValue('@titlInput', empAsset[0].title)
        return this
    },
    //cannot figure out how to delete employee
    // delete: function (){
    //     this.click['@employeeDeleteBtn']
    //     this.keys(this.api.Keys.ENTER)
    //     return this
    // }
 
}

module.exports = {
    url:"https://devmountain-qa.github.io/employee-manager-v2/build/index.html",
    commands: [V2Commands],
    elements :{
        //Clicks
        clearSearch: {selector:'//*[contains(text(),"Clear")]',
            locateStrategy: 'xpath'},
        addEmployee:{selector:'//*[contains(text(),"+ Add Employee")]',
            locateStrategy: 'xpath'},
        saveBtn:{selector:'//button[@name="save"]',
            locateStrategy: 'xpath'},
        employeeCancelBtn:{selector:'//button[@name="cancel"]',
            locateStrategy: 'xpath'},
        employeeDeleteBtn:{selector:'//button[@name="delete"]',
            locateStrategy: 'xpath'},
        clickNewEmployee: {selector: '//li[text()="New Employee"]',
            locateStrategy:'xpath'},
        //input Fields
        namInput:{selector:'//input[@name="nameEntry"]',
            locateStrategy: 'xpath'},
        phonInput:{selector:'//input[@name="phoneEntry"]',
            locateStrategy: 'xpath'},
        emaiInput:{selector:'//input[@name="emailEntry"]',
            locateStrategy: 'xpath'},
        titlInput:{selector:'//input[@name="titleEntry"]',
            locateStrategy: 'xpath'},
        empSearch:{selector:'//input[@type="text"]',
            locateStrategy: 'xpath'},
        nameValue:{selector:'//p[@name="employeeName"]',
            locateStrategy: 'xpath'},
        alertBtn:{selector:'//*[contains(text(),"OK")]',
        locateStrategy: 'xpath'},    
            
        //verify Selectors
        nameVerif:{selector:'//p[@name="employeeName"]',
            locateStrategy: 'xpath'},
    //     phoneVerif:{selector:'',
    //         locateStrategy: 'xpath'},
    //     emailVerif:{selector:'',
    //         locateStrategy: 'xpath'},
    //     titleVerif:{selector:'',
    //         locateStrategy: 'xpath'},
    //     idVerif:{selector:'',
    //         locateStrategy: 'xpath'},
    }
}