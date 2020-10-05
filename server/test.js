var models = require('./server.js').models;
/*
models.Profile.create({name: 'Nick'}, (err, profile)=>{
    console.log("data?", err, profile);
})

models.Profile.upsert({id: '5f7ada7c5b518f4d50a947c5', name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
})
*/
models.Profile.findOrCreate({name: 'Nick2'}, (err, profile)=>{
    console.log("data?", err, profile);
    if(err){
        console.log("There is an error", err);
    }else if(profile){
        /*profile.updateAttributes({
            email: "nick@nick.com"
        }, (updateError, updated) => {
            console.log("Saved?", updateError, updated);
        });*/
        profile.email = 'nick@nick2.com';
        profile.save((ue, updated)=>{
            console.log("Updated?", ue, updated);
        });
    }
})