var models = require('./server.js').models;

var filter = {
    where: {
        name: {like: 'Nick'}
    },
    order: 'id ASC',
    limit: 3,
    skip: 4,
    fields: {
        email: true
    }
}

models.Profile.find(filter, (err, found)=>{
console.log("Found?", err, found);
});


/*var toSave = [
    {name: 'Nick1', email: 'nick1@nick.com'},
    {name: 'NickA', email: 'nickA@nick.com'},
    {name: 'Nick2', email: 'nick2@nick.com'},
    {name: 'NickB', email: 'nickB@nick.com'},
    {name: 'Nick3', email: 'nick3@nick.com'},
    {name: 'NickC', email: 'nickC@nick.com'},
    {name: 'Nick4', email: 'nick4@nick.com'},
    {name: 'NickD', email: 'nickD@nick.com'}
]

toSave.map(obj=>{
    models.Profile.create(obj, (err, created)=>{
        console.log("Created?", err, created);
    });
});
*/
/*
models.Profile.create({name: 'Nick'}, (err, profile)=>{
    console.log("data?", err, profile);
})

models.Profile.upsert({id: '5f7ada7c5b518f4d50a947c5', name: 'Nick1'}, (err, profile)=>{
    console.log("data?", err, profile);
})
*/
/*
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
/*        profile.email = 'nick@nick2.com';
        profile.save((ue, updated)=>{
            console.log("Updated?", ue, updated);
        });
    }
})
*/