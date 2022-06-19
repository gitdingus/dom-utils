// Returns an html element from an object.
// Object has the form of: {
//     //Required
//     tag = validHtmlTag, 
//
//     //All tags below this are optional
//     classes = [ strings ],
//     properties {
//         key : value,
//         key2: value2
//     },
//     attributes = {
//         key : value,
//         key2 : value2
//     },
//     children : [ HtmlElements ],
// }
//
// returns the newly created element

function createHtmlElement(elementObject){
    //Must at least have a tag.
    if (typeof elementObject.tag !== 'string'){
        return
    }

    const newElement = document.createElement(elementObject.tag);
    const classes = elementObject.classes || [];
    const children = elementObject.children || [];
    const properties = elementObject.properties || {};
    const attributes = elementObject.attributes || {};

    if (classes.length >= 1){
        classes.forEach( cls => newElement.classList.add(cls));
    }

    for (let property in properties){
        newElement[property] = properties[property];
    }

    for (let attribute in attributes){
        newElement.setAttribute(attribute, attributes[attribute]);
    }

    appendChildren(newElement, children); 
    
    return newElement;
}

// Accepts a parent HTMLElement and an array of children HTMLElements
// Adds children to parent AND
// Returns the parent element
function appendChildren(parent, children){
    children.forEach (child => parent.appendChild(child));

    return parent;
};


export {createHtmlElement, appendChildren };