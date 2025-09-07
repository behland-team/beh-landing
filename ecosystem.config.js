module.exports = {
    apps: [
        {
            name: "beh-landing",             // 👈 your app’s name in PM2
            script: "npm",                  // run with npm
            args: "start",                  // run "npm start"
            cwd: __dirname,                 // current working directory = project root
            env: {
                NODE_ENV: "production",
                PORT: 3000                    // change this if you want another port
            }
        }
    ]
};
