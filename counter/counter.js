module.exports = function (RED) {
    "use strict";
     function CounterNode(n) {
        RED.nodes.createNode(this, n);
        let node = this;

        node.name = n.name;
        node.count = 0 ; 

        node.on("input", function (msg, send, done) {
            node.count= node.count+1;
            node.status({fill:"blue",shape:"dot",text: node.count+ " msg"})
            node.send(msg)
            done()
        })
    }
    
    RED.nodes.registerType("counter", CounterNode);

};