// @author Sudheer

// To find out whether values should be compared directly (use the === operator for that) 
// or have their properties compared, you can use the typeof operator. If it produces an "object" 
// for both values, you should do a deep comparison. But you have to take one 
// silly exception into account: because of a historical accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare 
// them.



function deepEqual(thing1, thing2) {
    if ((typeof thing1 === "object") && (thing2 === "object")) {
        let bool = false
        for (let prop in thing1) {
            let bool2 = false
            for (let prop2 in thing2) {
                if (prop === prop2) {
                    bool2 = deepEqual(thing1[prop],thing2[prop2])
                }
                if (bool2) {
                    break
                }
            }
            bool = bool2
            if (!bool) {
                break
            }
        }
        return bool
    }
    else {
        return thing1 === thing2
    }
}

// Test Cases:
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual('an',2))
console.log(deepEqual(obj,obj))
console.log(deepEqual(obj,null))
console.log(deepEqual(obj,{object: 2, here: {is: "an"}}))
console.log(deepEqual(obj.object,2))