/*

const smoochBot = Meteor.npmRequire('smooch-bot');
const MemoryLock = smoochBot.MemoryLock;
const SmoochApiStore = smoochBot.SmoochApiStore;
const SmoochApiBot = smoochBot.SmoochApiBot;
const StateMachine = smoochBot.StateMachine;
const script = require('/server/smooch/script.js');
const jwt = {
  keyId: 'app_57fba7bed150e442016d387f',
  secret: 'ZaA-8ZjFEabK-p15V6v8dmWm',
  scope: 'app', // app or appUser
};
const SmoochCore = Meteor.npmRequire( 'smooch-core');
const name = 'PFBE';
const avatarUrl = 'https://s.gravatar.com/avatar/f91b04087e0125153623a3778e819c0a?s=80';
const store = new SmoochApiStore({
    jwt
});
const lock = new MemoryLock();
const webhookTriggers = ['message:appUser', 'postback'];

const bodyParser = Meteor.npmRequire( 'body-parser');

// using JWT components
// Only available server-side. NEVER put your keyId and secret
// in you client-side code.


/*smooch.webhooks.list().then((response) => {
    console.log(response);
});
*/

/*function createWebhook(smoochCore, target) {
    return smoochCore.webhooks.create({
        target,
        triggers: webhookTriggers
    })
        .then((res) => {
            console.log('Smooch webhook created with target', res.webhook.target);
        })
        .catch((err) => {
            console.error('Error creating Smooch webhook:', err);
            console.error(err.stack);
        });
}

function updateWebhook(smoochCore, existingWebhook) {
    return smoochCore.webhooks.update(existingWebhook._id, {
        triggers: webhookTriggers
    })
        .then((res) => {
            console.log('Smooch webhook updated with missing triggers', res.webhook.target);
        })
        .catch((err) => {
            console.error('Error updating Smooch webhook:', err);
            console.error(err.stack);
        });
}

/*SmoochCore.webhooks.get('57c8cff21b14ac4600e11fd3').then((response) => {
    console.log(response);
});

console.log("server-side!!!");


// Create a webhook if one doesn't already exist
/*if (process.env.SERVICE_URL) {
    const target = process.env.SERVICE_URL.replace(/\/$/, '') + '/messages';
    const smoochCore = new SmoochCore({
        jwt
    });
    smoochCore.webhooks.list()
        .then((res) => {
            const existingWebhook = res.webhooks.find((w) => w.target === target);

            if (!existingWebhook) {
                return createWebhook(smoochCore, target);
            }

            const hasAllTriggers = webhookTriggers.every((t) => {
                return existingWebhook.triggers.indexOf(t) !== -1;
            });

            if (!hasAllTriggers) {
                updateWebhook(smoochCore, existingWebhook);
            }
        });
}*/

/*function createBot(appUser) {
    const userId = appUser.userId || appUser._id;
    return new SmoochApiBot({
        name,
        avatarUrl,
        lock,
        store,
        userId
    });
}

function handleMessages(req, res) {
    const messages = req.body.messages.reduce((prev, current) => {
        if (current.role === 'appUser') {
            prev.push(current);
        }
        return prev;
    }, []);

    if (messages.length === 0) {
        return res.end();
    }

    const stateMachine = new StateMachine({
        script,
        bot: createBot(req.body.appUser)
    });

    stateMachine.receiveMessage(messages[0])
        .then(() => res.end())
        .catch((err) => {
            console.error('SmoochBot error:', err);
            console.error(err.stack);
            res.end();
        });
}

function handlePostback(req, res) {
    const postback = req.body.postbacks[0];
    if (!postback || !postback.action) {
        res.end();
    }

    createBot(req.body.appUser).say(`You said: ${postback.action.text} (payload was: ${postback.action.payload})`)
        .then(() => res.end());
}
/*
app.post('/webhook', function(req, res, next) {
    const trigger = req.body.trigger;

    switch (trigger) {
        case 'message:appUser':
            handleMessages(req, res);
            break;

        case 'postback':
            handlePostback(req, res);
            break;

        default:
            console.log('Ignoring unknown webhook trigger:', trigger);
    }
});
*/


// ...

// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.

/*

Picker.middleware( bodyParser.json() );

var postRoutes = Picker.filter(function(req, res) {
  // you can write any logic you want.
  // but this callback does not run inside a fiber
  // at the end, you must return either true or false
  return req.method == "POST";
});

loopCount = 0;

postRoutes.route('/messages', function(params, req, res, next) {

  const trigger = req.body.trigger;

  switch (trigger) {
      case 'message:appUser':
          handleMessages(req, res);
          break;

      case 'postback':
          handlePostback(req, res);
          break;

      default:
          console.log('Ignoring unknown webhook trigger:', trigger);
  }
*/
  /*loopCount++;
  // DEBUG
  console.log( 'INSIDE SMOOCH POST ROUTE, loop: ' + loopCount );

  console.log(req.body);

  parsedBody(req.body);

  //console.log("USER IS " + )

  //reply();
  res.statusCode = 201;
  res.end();
  // DEBUG
  console.log( 'EXITED SMOOCH POST ROUTE' );
}); // end postRoutes

/*
function reply (id) {
  SmoochCore.conversations.sendMessage('5e01df13f59b865b580ada6f', {
      text: 'This is from webhook',
      role: 'appMaker'
  }).then(() => {
      console.log("Sent message from server");
  });
}
*/
