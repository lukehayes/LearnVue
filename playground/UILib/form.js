/**
 * UILibForm
 *
 * HTML form creation library.
 */

/**
 * Create an HTML Form.
 *
 * @param {string}  method    The type of input field('text', 'email' etc).
 * @param {string}  action    The input fields attribute value.
 * @param {Element} parent    The parent element it should be appended to.
 *
 * @return {Element} The newly created HTML form.
 */
function UIForm(method, action, parent)
{
    let element = document.createElement("FORM");
    element.method = method;
    element.action = action;
    parent.appendChild(element);
    return element;
}

/**
 * Create an input field for a form.
 *
 * @param {string}  The type of input field('text', 'email' etc).
 * @param {string}  The input fields attribute value.
 * @param {Element} The parent element it should be appended to.
 *
 * @return {Element} The newly created input field
 */
function UIFormInput(type, value, parent)
{
    let element = document.createElement("INPUT");
    element.type = type;
    element.value = value || "";
    parent.appendChild(element);
    return element;
}

/**
 * Attact an event to a form element.
 *
 * @param {string}  formInput    Element to attach the event to.
 * @param {string}  event        The name of the event.
 * @param {Element} callback     The callback to run when the event occurs.
 *
 * @return {Element} The newly created input field
 */
function UIFormEvent(formInput, event, callback)
{
    formInput.addEventListener(event, callback);
}
