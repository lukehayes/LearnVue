/**
 * Basic HTML Markup Generation
 */

function basicElement(type, value, parent)
{
    let element = document.createElement(type);
    element.innerText = value;
    parent.appendChild(element);
    return parent;
}
