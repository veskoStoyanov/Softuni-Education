Front-End: React.
Back-end: NodeJs(Express).
Data-base: MongoDb(mongoose).
"nodemon": "npm install -g nodemon", "concurrently": "npm install -g concurrently", 
"npm run install-all" -> "npm run dev". runs on  http://localhost:3000.

1.Home - This page shows when the project is started for very first time or if we click Home in Header when we are logged in.

2.Footer - It depends on whether we are loggedIn or not and if we are an Admin or not. In any case it changes. After login if we are an user , we are able to click on  "Contact Us!"  and it refers us toward the page where we can send a message to the Admin. After refresh it does not change itself.

3. Header - It depends on whether we are logged In or not and if we are an Admin or not. In any case it changes.  Logged Out user sees:  Home, About, Login, Register, Games, Logged In user: :   Home(Catalog), Video, Add Moto, Mail, Welcome, ["username"], Profile! And an Admin :   Home(Catalog), Video, Add Video, Add Hotel, Hotels, Welcome, Admin, Profile. .  After refresh it does not change itself.
4. About: Here are all rulеs about Register, Login и Add-Moto.
5. Register: The fields are required, an username should be at least 2 symbols, a  password should be at least 6 symbols, a repeat-password should be the same as the password, the image is profile picture, which should be valid url , starts with "http",  there is link in About page where you can download valid pictures.  After successful register you will be redirect to Login page. An Admin register himself only with username: "Admin" and password : "1234567".
6.Login: If  you have  registration already, you can login with an username and a password,  you will receive a  JWT, which we put on a cookie and use for authentication  on the back-end and user`s data as well which we use for authorization on front-end. After successul login, redirect to the main page for logged in user  (Catalog) follows.
7. Logout:  After successful logout all data for the user will be erase. Header and Footer change for logged out user, redirect to About page follows.
8. Games:  Logged out user can play games. It is possible error occurs while new  game starts, if so please refresh the page.
9. Catalog: All motors are listed from base data, which are not banned from the Admin, sort by their creation. From drop menu it is possible  sort tby 4 ways. Highest  price, lowest price, alphabetically or the most liked. From Searchit is possible to looking for particular model, it is enоugh to write just first words insensitive case and all model starts with them will come back.
10. Moto-Details: Click on particular Motor sends us to Details page. Click on location["city"], google-maps helps us to find out where in Bulgaria the city is. If we ride a motorbike , we depend on the weather, so it is good idea with click on "See the weather in ["city"]   to see what the weather will be like according AccuWeather.  User who is not motor`s creator can like only once after click on button "like". If he is creator nothing will change. Admin has no like button, but "Ban it" button in order to ban any motor. From "See if there is a hotel available in ["city"]" , we can book any hotel to stay at.
11. Add Video : Only the  Admin can create Video. The fields are required. Model should be min 2 symbol, Video URL should be from "youtube". Example: "https://www.youtube.com/results?search_query=honda+moto".
12.Videos- All created videos are listed on the database. From the Play button, we enter the page where we can watch the video, if we are not Admin views increase every time. The admin from here can delete a video from the database.
13.Comments:  Button comments gets us in Comment page.  They create and list exactly for this video we've chosen. If the video is deleted all comment are deleted too. A comment cab be deleted from both a creator or the Admin.
13.Profile: Here we can see the profile picture.
14.Profile: Here is the profile picture.
User: All motors which we create are listed here. From "delete" we can delete any motor, details: see Details page, edit any motor,  the rules are the same as for create, can see all registration we've done and we are able to deny any.
Admin: All motors he's banned are listed, button "Unban",  lists the motor  in Catalog page again , message button sends us toward the messages from users . After the message is read  deletes itself.
15. Mail: User can send and receive messages to and from other users. In Search write username and it sends us to Create message page, all fields are required. If such user exist the message saves in Sent, and it will be send to the user we've chosen, as it arrives in Recently. When it is read, it goes to Box itself. If we want to write to the Admin it is possible from  Footer "Contact Us!".
15.User: Mail - From here you can send and receive messages to and from other users. In Search, we enter a username and direct us to a message creation page, all fields must be filled in. If such a user exists, a copy will be retained in Sent, will be sent to the corresponding one, which will arrive in Resently after reading it will automatically be transferred to the Box, if we want to send to Admin we can do it from Footer "Contact Us!".
16. Add Moto: User is able to create engine. Fields are required. City: We can choose between 27 districts in Bulgaria, Price: positive number, Model: at least 2 symbols, Image URL is a picture of the engine that should be a valid url, which starts with "http", there is a link in About page, Description: at least 10 symbols.
16. Add Hotels. It is the duty of the admin to add hotels, City: We can choose from 27 regions in Bulgaria, Price-Positive number, Name- at least 2 characters, Image URL is a photo of the hotel, which must be a valid url starting with http. All created hotels will be listed and can be rubbed, so all reservations to the hotel will be canceled.
17. Hotels: user can access it after selecting a model from moto-details, here he can search for hotels in a city and book them.
18. Page Not found -If you enter the wrong address this page appears.
Admin is available from Hotels in Header.

Additional:

All requests are executed through Redux thus and the data is stored in the store, with every request there is a Loading which disappears as soon as the data is received.
 --Higher order components ensure that logged-in users cannot access directly the url by entering relevant pages that are not authorized at Front-end. When you try, it will be transferred to another page. As well as back-end protection with middleware. Input validation with "yup". Checks on the type of data submitted through components with PropsTypes.
- If any of the conditions is not met, a red error message will appear in the red with the corresponding toastr error.
- After a successful Register, Login or Logout, Create will appear in green with the corresponding message.

Back-end - REST API NODE JS: node index or nodemon index.
Front-End - React JS: npm install, npm start

1.Home -страницата се показва само когато стартираме проекта за пръв път или ако кликнем върху Home в Header когато не сме логнати.

2.Footer- Променя се в зависимост дали сме логнати или дали сме Admin или user.  Ако не сме логнати не изпълнява никаква функция. След логин ако сме user с клик върху 
текста "Contact Us!" ни препраща към страница, от която можем да изпратим съобщение на Admin. При refresh не се променя

3. Header - Променя се в зависимост дали сме логнати, дали сме user или Admin.При не-логнат потребител показва: Home, About, Login, Register. При логнат:
Home(Catalog), Video, Add Moto, Mail, Welcome, ["username"], Profile! При Admin :   Home(Catalog), Video, Add Video, Add Hotel, Hotels, Welcome, Admin, Profile. 
При refresh не се променя. 

4. About - Тук са описани правилата за Register, Login и Add-Moto.

5.Register:  Полетата са задължитени username трябва да е от поне 2 знака, password трябва да е от най-малко 6 знака, repeat-password трябва да съвпада с password, 
image е профилна снимка , която трябва да е валиден url който започва с http има даден линк в About от където може да се теглят валидни images. След успешен Register 
 ще последва redirect към Login. Admin се регестрирва само с username: "Admin" и password: "1234567".

6. Login- Ако вече сме регестрирани можем да се логнем със username и password,  връща ни се JWT , който слагаме във cookie и ползваме за authentication  на back-end ,
 както и данните за самия user които пазим за да използваме за authentication  и authorization на front-end. След успешен login  ще последва redirect към Catalog- 
главната страница за регистрирани потребители. 

7. Logout - след успешен logout всички данни за потребителя ще бъдат изтрити, Header Footer , ще се променят съответно за нерегестририран и ще последва redirect към 
About.

-- Games- не регистриран Потребител може да играе от игрите. Възможно е да се случи грешка при стартирване на нова игра трябва да се решрешне страницата.


8. Catalog - Тук се листват всички мотори от базата данни , които не са забранени от Админа, по реда на създаване, от падащото меню "Sort-By" могат да се подредят по 
4 начина: най-висока цена, най-ниска цена, по азбучен ред на модела или най-харесвани. От Search може да се търси по даден модел, като стига да се напишат само първите
 букви insensitive case и ще се върнат всички модели започващи с тях.

9. Moto-Details: Клик върху даден мотор ни праща към страницата с подробностоте за обявата. Клик location: ["city"], с помоща на google-maps ни показва къде върху 
картата се намира града. С мотор сме зависими от време , затова е добра идея   с клик  на"See the weather in ["city"] да се проверим прогнозата според  AccuWeather. 
User: Ако не е създател на обявата може да хареса само веднъж. Ако вече е харесал или е създател при натискане на "палеца" няма да се промени нищо.Ако е Admin няма да 
вижда "палец",  същия от тук може за забранява обяви чрез бутона Ban It!

10.Add Video: Само Админ може да създава видео! Полетата са задължителни. Model- мин 2 знака, Video URL трябва да е от youtube, валидни от тук : 
"https://www.youtube.com/results?search_query=honda+moto".

11.Videos- Всички създадени видеа се листват от базата данни. От бутон Play влизаме в страницата където можем да гледаме съответното видео, ако не сме Admin views се 
увеличават всеки път.  Админ от тук може да изтрие дадено видео от базата данни.

12. Comments:  От бутон Comments влизаме в страницата за коментари, като те се създават и листват само за съответното видео, ако видео бъде изтрито всички коментари 
към него също се изтриват от базата данни. Коментар може да бъде изтрит от създателя си или от Админ.

13.Profile: Тук можем да видим профилната снимка.
User: Тук се листват всички обяви на мотори, които сме създали , от бутона Detele можем да изтрием от базата данни  даден мотор, да видим страницата с подробностите 
за него , от Edit да го променим, като изискванията за промяна са същите, като за създаване. И да видим всички регистрации за хотели които сме направили или да 
откажем някоя. 
Admin: Тук се листват всички обяви на мотори, които сме забранили, от бутона Unban можем  отблокираме и той пак ще се листва в Catalog. Бутона Messages ни препраща 
към страница, където са всички съобщения от потребители. След прочитане на съобщението и връщане към страницата съобщението ще се изтрие автоматично.

14.User: Mail -От тук може да се пращат и приемат съобщения към и от други потребители. В Search въвеждаме username и ни препраща към страница за създаване на 
съощение, всички полета трябва да са попълнени.  Ако такъв user съществува , ще се запази копие в Sent, ще бъде изпратено на съоветния , което ще пристигне в Resently 
след прочитане автоматично ще се прехвърли в Box, aко искаме да пратим към Admin можем да го направим от Footer "Contact Us!".

15. Add Moto: Можем да създадем обява. Полетата са задължитени!  City: Можем да избираме между 27 области в България, Price-Позитивно число,  Model- най малко 2 знака
 , Image URL е снимка на мотора , която трябва да е валиден url, който започва с http, има даден линк в About от където може да се теглят валидни images.  Description:
 най-малко 10 знака. 

16. Add Hotels. Задължение на админа е да добавя хотели, City: Можем да избираме между 27 области в България, Price-Позитивно число,  Name- най малко 2 знака , Image 
URL е снимка на хотела , която трябва да е валиден url, който започва с http. Всички създадени хотели ще се листнат и може да ги трие, като така и всички резервации 
към дадения хотел ще отпаднат.

17. Hotels: user може да го достъпи след като е избрал даден модел от moto-details, тук може да търси хотели по даден град и да ги резервира .

18. Page not Found - При въведен грешен адрес Тази страница се появява.

Админ достъпва от Hotels във Header.
Additional:

Всички заявки се изпълняват чрез thus на Redux и данните се пазат в store, при всяка заявка има Loading които изчезва веднага след получаване на данните .
 --Higher order components се грижат логнат user да не може да достъпят директно с въвеждане на url съответните сраници  за които не са ауторизирани на Front-end.
 При опит ще бъде прехвърлен на друга страница .Както и защита на back-end със middleware. Валидации на входящите данни с "yup". Проверки на типа данни които се 
подават през компонентите със PropsTypes.
-- При неизпълнение на някое от условията ще се появи известие в червено със съответната грешка с toastr.
--След успешен Register ,  Login или Logout, Create  ще се появи известие в зелено със съответното съобщение. 
линкове :
