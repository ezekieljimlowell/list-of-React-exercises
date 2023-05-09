console.log(window)
console.log(window.document)
console.log(this)
console.log(this.document)

function withStrict() {
    "use strict";
    console.log(window)
    console.log(this)
}
withStrict()
function withoutStrict() {
    console.log(window)
    console.log(this)
    console.log(window.document, this.document)
}
withoutStrict()
if(true) {
    console.log(window)
    console.log(this)
    console.log(window.document, this.document)
}
if(true) {
    "use strict"
    console.log(window)
    console.log(this)
    console.log(window.document, this.document)
}

const employeeInfo = {
    name: "paul",
    age: 23,
    id: 123456,
    salary: 12000,
    display: function() {
        "use strict"
        console.log(window)
        console.log(this)
        console.log(window.document, this.document)
        return `id of ${this.name} is ${this.id}`;
    }
}
employeeInfo.display()

const employeeInfo1 = {
    name: "paul",
    age: 23,
    id: 123456,
    salary: 12000,
    display: function () {
        "use strict"
        return () => {
            console.log(window)
            console.log(this)
            console.log(window.document, this.document)
            return `id of ${this.name} is ${this.id}`;
        }
    }
}
employeeInfo1.display()()

const employeeInfo2 = {
    name: "paul",
    age: 23,
    id: 123456,
    salary: 12000,
    display: () => {
        //"use strict"
        function a() {
                console.log(window)
                console.log(this)
                //console.log(window.document, this.document)
                //return `id of ${this.name} is ${this.id}`;
        }
        a()
    }
}

employeeInfo2.display();

(() => {
    console.log(window)
    console.log(this)
})()