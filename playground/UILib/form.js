/**
 * Basic FORM Markup Generation
 */
function basicForm(method, action, parent)
{
    let element = document.createElement("FORM");
    element.method = method;
    element.action = method;
    parent.appendChild(element);
    return parent;
}
