/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Simona';
document.getElementById('fav-food').textContent = 'Fish';
document.getElementById('hometown').textContent = 'Orel';
let elemLi = document.getElementsByTagName('li');
for (let i = 0; i < elemLi.length; i++) {
  elemLi[i].className = 'list-item';
}
let myImage = document.createElement('img');
myImage.src = 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/73515696_1295094394005199_1832419926795616256_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=hdabeeh0ErsAX8zVRUI&_nc_ht=scontent-cdt1-1.xx&oh=f0abb610b35242c93cf7dccf0298e0a0&oe=5F50BA22';
myImage.style.width = '250px';
myImage.style.height = '250px';
document.body.appendChild(myImage);
