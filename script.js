let all = document.createElement("h4");
let headerTable = document.createElement("table");
let checkbox = document.createElement("tr");
let checkboxImg = document.createElement("img");
let checkboxRow = document.createElement("th");
let line = document.createElement("div");
let contentTable = document.createElement("div");
let contentCheckboxRow = document.createElement("div");
let contentProfileRow = document.createElement("div");
let headerProfileImage = document.createElement("h4");
let headerTitle = document.createElement("h4");
let contentInputRow = document.createElement("div");
let arrow = document.createElement("img");
let userName = document.createElement("h4");
let contentUserNameRow = document.createElement("div");
let headerEmail = document.createElement("h4");
let emailRow = document.createElement("div");
let headerPhone = document.createElement("h4");
let phoneRow = document.createElement("div");
let headerStatus = document.createElement("h4");
let statusRow = document.createElement("div");
let headerAction = document.createElement("h4");
let actionRow = document.createElement("div");

const NameArr = [];
const UserNameArr = [];
const EmailArr = [];
const PhoneArr = [];

let fetchUser = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        NameArr.push(user.name);
        UserNameArr.push(user.username);
        EmailArr.push(user.email);
        PhoneArr.push(user.phone);
      });

      for (let i = 0; i < 7; i++) {
        createInput(NameArr[i]);
        createUserName(UserNameArr[i]);
        createEmail(EmailArr[i]);
        createPhone(PhoneArr[i]);
      }
    })
    .catch((error) => rej(error));
});

document.body.style.padding = "50px";

headerTable.style.display = "flex";

all.innerHTML = "All (56)";
all.style.fontSize = "18px";
all.style.fontWeight = "400";
all.style.color = "#343A40";
all.style.marginBottom = "32px";

checkboxImg.src = "./resorces/Heading.svg";

function headerText(x) {
  x.style.fontSize = "14px";
  x.style.color = "#343A40";
  x.style.margin = "auto 0";
}

headerText(headerProfileImage);
headerText(headerTitle);
headerText(userName);
headerText(headerEmail);
headerText(headerPhone);
headerText(headerStatus);
headerText(headerAction);

headerProfileImage.innerHTML = "Image";
headerProfileImage.style.marginLeft = "10px";

headerTitle.innerHTML = "Name";
headerTitle.style.marginLeft = "20px";

arrow.src = "./resorces/Group 206.svg";
arrow.style.marginLeft = "365px";

userName.innerHTML = "User Name";
userName.style.marginLeft = "30px";

headerEmail.innerHTML = "Email";
headerEmail.style.marginLeft = "190px";

headerPhone.innerHTML = "Phone Number";
headerPhone.style.marginLeft = "268px";

headerStatus.innerHTML = "Status";
headerStatus.style.marginLeft = "194px";

headerAction.innerHTML = "Action";
headerAction.style.marginLeft = "190px";

line.style.width = "100%";
line.style.height = "2px";
line.style.backgroundColor = "#DFDFDF";

//---------------------Table Content

contentTable.style.display = "flex";
contentTable.style.flexDirection = "row";

contentCheckboxRow.style.display = "flex";
contentCheckboxRow.style.flexDirection = "column";

contentProfileRow.style.display = "flex";
contentProfileRow.style.flexDirection = "column";

function createCheckboxRow() {
  let contentCheckboxImg = document.createElement("img");
  let contentCheckboxLine = document.createElement("div");

  contentCheckboxImg.src = "./resorces/Checkbox_value (1).svg";

  contentCheckboxLine.style.width = "100%";
  contentCheckboxLine.style.height = "1px";
  contentCheckboxLine.style.backgroundColor = "#DFDFDF";

  contentCheckboxRow.append(contentCheckboxImg);
  contentCheckboxRow.append(contentCheckboxLine);
}

createCheckboxRow();
createCheckboxRow();
createCheckboxRow();
createCheckboxRow();
createCheckboxRow();
createCheckboxRow();
createCheckboxRow();

function createProfileImg(a) {
  let contentProfleImg = document.createElement("img");
  let contentProfileLine = document.createElement("div");

  contentProfleImg.src = a;
  contentProfileLine.style.width = "100%";
  contentProfileLine.style.height = "1px";
  contentProfileLine.style.backgroundColor = "#DFDFDF";

  contentProfileRow.append(contentProfleImg);
  contentProfileRow.append(contentProfileLine);
}

createProfileImg("./resorces/Photo_value.svg");
createProfileImg("./resorces/Photo_value (1).svg");
createProfileImg("./resorces/Photo_value (2).svg");
createProfileImg("./resorces/Photo_value (3).svg");
createProfileImg("./resorces/Photo_value (4).svg");
createProfileImg("./resorces/Photo_value (5).svg");
createProfileImg("./resorces/Photo_value (6).svg");

function createInput(x) {
  let input = document.createElement("input");
  let inputLine = document.createElement("div");

  input.placeholder = "Enter Title...";
  input.style.height = "50px";
  input.style.width = "432px";
  input.style.backgroundColor = "#EAEAEA";
  input.style.border = "none";
  input.style.paddingLeft = "16px";
  input.value = x;

  inputLine.style.width = "100%";
  inputLine.style.height = "1px";
  inputLine.style.backgroundColor = "#DFDFDF";

  contentInputRow.append(input);
  contentInputRow.append(inputLine);
}

function createUserName(x) {
  let userName = document.createElement("p");
  let userLine = document.createElement("div");

  userName.innerHTML = x;
  userName.style.height = "50px";
  userName.style.width = "236px";
  userName.style.display = "flex";
  userName.style.justifyContent = "start";
  userName.style.alignItems = "center";
  userName.style.marginLeft = "20px";
  userName.style.fontSize = "14px";
  userName.style.color = "#6C757D";

  userLine.style.width = "100%";
  userLine.style.height = "1px";
  userLine.style.backgroundColor = "#DFDFDF";

  contentUserNameRow.append(userName);
  contentUserNameRow.append(userLine);
}

function createEmail(x) {
  let email = document.createElement("p");
  let emailLine = document.createElement("div");

  email.innerHTML = x;
  email.style.height = "50px";
  email.style.width = "200px";
  email.style.display = "flex";
  email.style.justifyContent = "start";
  email.style.alignItems = "center";
  email.style.marginLeft = "20px";
  email.style.fontSize = "14px";
  email.style.color = "#6C757D";

  emailLine.style.width = "100%";
  emailLine.style.height = "1px";
  emailLine.style.backgroundColor = "#DFDFDF";

  emailRow.append(email);
  emailRow.append(emailLine);
}

function createPhone(x) {
  let phone = document.createElement("p");
  let phoneLine = document.createElement("div");

  phone.innerHTML = x;
  phone.style.height = "50px";
  phone.style.width = "300px";
  phone.style.display = "flex";
  phone.style.justifyContent = "center";
  phone.style.alignItems = "center";
  phone.style.fontSize = "14px";
  phone.style.color = "#6C757D";
  phone.style.textAlign = "center";

  phoneLine.style.width = "100%";
  phoneLine.style.height = "1px";
  phoneLine.style.backgroundColor = "#DFDFDF";

  phoneRow.append(phone);
  phoneRow.append(phoneLine);
}

function createStatus() {
  let imgDiv = document.createElement("div");
  let status = document.createElement("img");
  let statusLine = document.createElement("div");

  imgDiv.style.height = "50px";
  imgDiv.style.width = "230px";
  imgDiv.style.display = "flex";
  imgDiv.style.justifyContent = "center";
  imgDiv.style.alignItems = "center";
  imgDiv.style.textAlign = "center";

  status.src = "./resorces/Danger.svg";

  statusLine.style.width = "100%";
  statusLine.style.height = "1px";
  statusLine.style.backgroundColor = "#DFDFDF";

  imgDiv.append(status);
  statusRow.append(imgDiv);
  statusRow.append(statusLine);
}

createStatus();
createStatus();
createStatus();
createStatus();
createStatus();
createStatus();
createStatus();

function createAction() {
  let actionDiv = document.createElement("div");
  let action = document.createElement("img");
  let actionLine = document.createElement("div");

  actionDiv.style.height = "50px";
  actionDiv.style.width = "230px";
  actionDiv.style.display = "flex";
  actionDiv.style.justifyContent = "center";
  actionDiv.style.alignItems = "center";
  actionDiv.style.textAlign = "center";

  action.src = "./resorces/Action_value.svg";

  actionLine.style.width = "100%";
  actionLine.style.height = "1px";
  actionLine.style.backgroundColor = "#DFDFDF";

  actionDiv.append(action);
  actionRow.append(actionDiv);
  actionRow.append(actionLine);
}

createAction();
createAction();
createAction();
createAction();
createAction();
createAction();
createAction();

//----------------------------APPEND

contentTable.append(contentCheckboxRow);
contentTable.append(contentProfileRow);
contentTable.append(contentInputRow);
contentTable.append(contentUserNameRow);
contentTable.append(emailRow);
contentTable.append(phoneRow);
contentTable.append(statusRow);
contentTable.append(actionRow);

checkboxRow.append(checkboxImg);

checkbox.append(checkboxRow);

headerTable.append(checkbox);
headerTable.append(headerProfileImage);
headerTable.append(headerTitle);
headerTable.append(arrow);
headerTable.append(userName);
headerTable.append(headerEmail);
headerTable.append(headerPhone);
headerTable.append(headerStatus);
headerTable.append(headerAction);

document.body.append(all);
document.body.append(headerTable);
document.body.append(line);
document.body.append(contentTable);
