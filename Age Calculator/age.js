
// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");

// function calculateAge() {
//   const birthdayValue = birthdayEl.value;
//   if (birthdayValue === "") {
//     alert("Please enter your birthday");
//   } else {
    
//     const age = getAge(birthdayValue);
//     resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//   }
// }

// function getAge(birthdayValue) {
//   const currentDate = new Date();
//   const birthdayDate = new Date(birthdayValue);
//   let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//   const month = currentDate.getMonth() - birthdayDate.getMonth();

//   if (
//     month < 0 ||
//     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// }

// btnEl.addEventListener("click", calculateAge);

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age.years} ${age.years > 1 ? "years" : "year"}, ${age.months} ${age.months > 1 ? "months" : "month"}, and ${age.days} ${age.days > 1 ? "days" : "day"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
