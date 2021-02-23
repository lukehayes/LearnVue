/**
 * Basic FORM Markup Generation
 */
function UIForm(method, action, parent)
{
    let element = document.createElement("FORM");
    element.method = method;
    element.action = action;
    parent.appendChild(element);
    return element;
}

function UIFormInput(type, value, parent)
{
    let element = document.createElement("INPUT");
    element.type = type;
    element.value = value || "";
    parent.appendChild(element);
    return element;
}
