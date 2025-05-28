
function setValue(key, event) {
    event.preventDefault();
    const keyEl = document.getElementById(key);
    const keyInput = document.getElementById(`${key}-input`);
    keyEl.innerText = keyInput.value;
}
function setName(event) {
    setValue("name", event);
}
function setAddress(event) {
    setValue("address", event);
}
function setPhone(event) {
    setValue("phone", event);
}
function setMail(event) {
    setValue("mail", event);
}
function setSocial(event) {
    setValue("social", event);
}
function setObjective(event) {
    setValue("objective", event);
}


function takeList(event, key){
    event.preventDefault();
    const fieldNum = document.getElementById(`num-of-${key}-txt-fd-input`).value;
    const inputField = document.getElementById(`${key}-input`);
    let str = "";
    for (let i = 1; i <= fieldNum; i++)
    {
        str += `<input type="text" id="${key}-${i}"></input>`;
    }
    str += `<br><button onclick='setList(event, "${key}")' class="submit" type="submit">Submit</button><br><br>`
    inputField.innerHTML = str;
}
function setList(event, key) {
    event.preventDefault();
    const fieldNum = document.getElementById(`num-of-${key}-txt-fd-input`).value;
    const listUl = document.getElementById(key);
    listUl.innerHTML = "";
    for (let i = 1; i <= fieldNum; i++)
    {
        const text = document.getElementById(`${key}-${i}`).value;
        if (text !== "")
        {
            const list = document.createElement("li");
            list.innerText = text;
            listUl.appendChild(list);
        }
    }
}
function takeExperiences(event) {
    takeList(event, "experiences");
}
function takeEducation(event) {
    takeList(event, "education");
}
function takeSkills(event) {
    takeList(event, "skills");
}
function takeAchievements(event) {
    takeList(event, "achievements");
}
function takeCertifications(event) {
    takeList(event, "certifications");
}


function openSlide(event) {
    event.preventDefault();
    const slidePanelEl = document.querySelector(".slide-panel");
    slidePanelEl.classList.add("open-slide");
}
function closePanel(event) {
    event.preventDefault();
    const slidePanelEl = document.querySelector(".slide-panel");
    slidePanelEl.classList.remove("open-slide");
}
