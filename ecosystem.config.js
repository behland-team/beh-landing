module.exports = {
    apps: [
        {
            name: "beh-landing",             // 👈 your app’s name in PM2
            script: "npm",                  // run with npm
            args: "start",                  // run "npm start"
            cwd: "/home/USER/htdocs/behsite.hiteck.ir/beh-landing",                 // current working directory = project root
            env: {
                NODE_ENV: "production",
                PORT: 3000                    // change this if you want another port
            }
        }
    ]
};





