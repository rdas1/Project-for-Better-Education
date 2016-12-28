var SmoochCore = Meteor.npmRequire('smooch-core');

var smooch = new SmoochCore({
    keyId: 'app_57fba7bed150e442016d387f',
    secret: 'ZaA-8ZjFEabK-p15V6v8dmWm',
    scope: 'app', // app or appUser
});


const bodyParser = Meteor.npmRequire( 'body-parser');

Picker.middleware( bodyParser.json() );

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});

postRoutes.route('/api/accounts/create_user/', function(params, req, res, next) {

  //DEBUG
  console.log("req.body: " + JSON.stringify(req.body));

  smooch.appUsers.create(req.body.username, {
    givenName: req.body.first_name,
    surname: req.body.last_name,
    properties: {
      password: req.body.password,
      courses: ""
    }
  }).then((response) => {
    console.log("Smooch response: " + JSON.stringify(response));
    console.log("Smooch statusCode: " + response.statusCode);
    res.statusCode = 201;
    res.end("Account created.");
  }, function(error) {
    console.log('rejection');
    res.statusCode = 400;
    res.end("Sorry, something went wrong on our end when creating your account. You can contact us at any time by typing 'feedback'.");
  });

  console.log( 'EXITED SMOOCH POST ROUTE' );
}); // end postRoutes

postRoutes.route('/api/accounts/username_available', function(params, req, res, next) {

  console.log("INSIDE username_available, given username: " + req.body.username);
  //DEBUG
  console.log("req.body: " + JSON.stringify(req.body));

  smooch.appUsers.get(req.body.username).then((response) => {
    console.log("Smooch .get response: " + JSON.stringify(response));
    res.statusCode = 400;
    res.end("A user with that username already exists.")
  }, function(error) {
      res.statusCode = 200;
      res.end("Awesome, that username is available.")
  });

  console.log( 'EXITED SMOOCH POST ROUTE' );
});

postRoutes.route('/api/accounts/authorize_user/', function(params, req, res, next) {


  var pfbeResponse = {};

  smooch.appUsers.get(req.body.username).then((response) => {
    console.log("response: " + JSON.stringify(response));
    console.log("Password: " + response["appUser"]["properties"]["password"]);
    console.log("Courses type: " + typeof response["appUser"]["properties"]["courses"])
    let givenPassword = req.body.password;
    let actualPassword = response["appUser"]["properties"]["password"];
    // check if credentials match
    if (givenPassword==actualPassword) {
        res.statusCode = 200;
        pfbeResponse.text = "Successfully logged in";
        pfbeResponse.first_name = response["appUser"]["givenName"]
        pfbeResponse.last_name = response["appUser"]["surname"];
        pfbeResponse.courses = response["appUser"]["properties"]["courses"];
        res.end(JSON.stringify(pfbeResponse));
    }
    else {
      res.statusCode = 401;
      pfbeResponse.text = "Your username or password is incorrect.";
      res.end(JSON.stringify(pfbeResponse));
    }
    //res.end("Parsed UserId: ");
  }, function(error) {
      res.statusCode = 400;
      pfbeResponse.text = "No user with that username exists.";
      res.end(JSON.stringify(pfbeResponse));

  });

}); // end postRoutes

postRoutes.route('/api/contact_us/', function(params, req, res, next) {
  res.statusCode = 200;
  res.end("this is the contact_us endpoint");
  // DEBUG
  console.log( 'EXITED SMOOCH POST ROUTE' );
}); // end postRoutes


// COURSE DATA

postRoutes.route('/api/courses/start_session', function(params, req, res, next) {

  var testCourse = {
    miniLessons: ["LESSON 1 TEXT", "LESSON 2 TEXT", "LESSON 3 TEXT"],
    quizData: ["QUIZ 1","QUIZ 2","QUIZ 3"]
  }

  res.statusCode = 200;
  res.end(JSON.stringify(testCourse));
  // DEBUG
  console.log( 'EXITED POST ROUTE' );
}); // end postRoutes
