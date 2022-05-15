
const colors = require('colors/safe');
client.commands = new Discord.Collection(); //command collection init
client.aliases = new Discord.Collection(); //command alias collection init

fs.readdir("./dsc/", (err, files) => { //This block of code reads each .js file in the commands folder and loads it into the commands collection
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js"); //makes sure each file it loads ends with .js
    if(jsfile.length <= 0){
        return console.log(colors.red("no commands found")); //if no commands, it will log this in console. You should never see this
    }

    jsfile.forEach((f) => {
        let props = require(`./dsc/${f}`); 
        console.log(colors.brightBlue(`${f} loaded!`)); //Logs this for each file successfully loaded
        client.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        })
    })
})