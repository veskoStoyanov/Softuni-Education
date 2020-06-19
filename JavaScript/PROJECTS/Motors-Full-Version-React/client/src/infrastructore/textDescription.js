let obj = {
    home: `This is Home Page it shows when the project is started for very first time or if we click Home in 
    Header when we are logged out. Header depends on whether we are logged In or not and if we are the Admin or not. In any case it 
    changes.  Logged Out user sees:  Home, About, Login, Register, Games, Logged In user: Home(Catalog), Video, Add Moto, 
    Mail, Profile! And the Admin: Home(Catalog), Video, Add Video, Add Hotel, Hotels, Welcome, Admin, Profile. 
    After refresh it does not change itself. Footer  depends on whether we are loggedIn or not and if we are an Admin or not. In any case it 
    changes. After login if we are an user , we are able to click on  "Contact Us!"  and it refers us toward the page where
     we can send a message to the Admin. After refresh it does not change itself. `,
    about: `About: Here are all rulеs about Register, Login и Add-Moto.`,
    login: `Login: If you have a registration already, you can login with an username and a
     password, you will receive a JWT, which we put on a cookie and use for authentication on the server and user's
     data as well which we use for authorization on front-end. After successul login, redirect to the main page for logged in user 
     (Catalog) follows.`,
    register: `Register: The fields are required, the username should be at least 2 symbols, the password should
    be at least 6 symbols, a repeat-password should be the same as the password, the image is profile picture,
     which should be valid url , starts with "http", there is link in About page where you can download valid
      pictures. After successful register you will be redirect to Login page. The Admin register himself only with 
      username: "Admin" and password : "1234567".`,
    games: `Games:  Logged out user can play games.`,
    catalog: `Catalog: All motors are listed from base data, which are not banned from the Admin, sort by their
      creation. From drop menu it is possible  sort by 4 ways. Highest  price, lowest price, alphabetically or 
      the most liked. From Search is possible to looking for particular model, it is enоugh to write just first 
      words insensitive case and all model starts with them will come back.`,
    logout: `Logout:  After successful logout all data for the user will be erase. Header and Footer change for
      logged out user, redirect to About page follows.`,
    motoDetails: `Moto-Details: Click on location["city"], google-maps helps us to find out where in Bulgaria the city is. If we ride a motorbike, we depend on the weather,
      so it is good idea to "See the weather in ["city"] according
       AccuWeather. User who is not motor's creator can like only once. If he is creator 
       nothing will change. Admin has no like button, but "Ban it" button in order to ban any motor. From "See if there
        is a hotel available in ["city"]", we can book any hotel to stay at.`,
    videoCreate: `Add Video : Only the  Admin can create Video. The fields are required. Model should be min 2 symbol,
         Video URL should be from "youtube". Example: "https://www.youtube.com/results?search_query=honda+moto".`,
    videos: `All videos from data base are listed. From button Play enter in the where can watch the particular video
         if we are not the Admin views increase every time`,
    comments: `Comments are created and listed exactly for this video
          we've chosen. If the video is deleted all comment are deleted too. A comment can be deleted from both a
           creator or the Admin.`,
    profile: `Profile: Here is the profile picture.
           User: All motors which we create are listed here. From "delete" we can delete any motor, details: see Details 
           page, edit any motor,  the rules are the same as for create, can see all registration we've done and we are 
           able to deny any.
           Admin: All motors he's banned are listed, button "Unban",  lists the motor  in Catalog page again , message 
           button sends us toward the messages from users . After the message is read  deletes itself.`,
    mail: `Mail: User can send and receive messages to and from other users. In Search write username and it sends us to
            Create message page, all fields are required. If such user exist the message saves in Sent, and it will be send to
             the user we've chosen, as it arrives in Recently. When it is read, it goes to Box itself. If we want to write to 
             the Admin it is possible from  Footer "Contact Us!".`,
    addMoto: `Add Moto: User is able to create motor. Fields are required. City: We can choose between 27
              districts in Bulgaria, Price: positive number, Model: at least 2 symbols, Image URL is picture of the motor which
            should be valid url, which starts with "http", there is link in About page, Description: at least 10 symbols.`,
    addHotel: `	The Admin adds hotels, City choise from 27 destricts in Bulgaria, Price: positive number, Name at least 2 
    symbols, Image Url should be valid url address which starts with "https". All hotel are listed ad he can delete from
     there so any reservation toward this hotel will be deny.`,
     hotels: `Here are all hotels from which an user can make reservations.`,
     noPage: `Page Not found: When wrong address is written this page appears.`,
     adminMail: `Here all messages from users are listed after read it detele itself.`,







}

export default obj;

