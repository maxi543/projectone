const EventEmmiter= require("node:events")
const emitter = new EventEmmiter()
emitter.on("order pizza", 
(quantity, size, type)=>{
    if (quantity ===1) {
        console.log("order receive for 1 pizza");
    }else(quantity ===2);{
        console.log("order received for 2 pizza");
    }
    if (size == "big") {
        console.log("complimentary drink added")
    }else(size ==="medium");{
        console.log("no complimentary drink added");
    }
    if (type =="pepperonipizza") {
        console.log("order receive for 1 ");
    }else(type =="cheese");{
        console.log("order received for 1 ");}
    }
);
emitter.emit("order pizza",2, "big","cheese");