module.exports = {
    apps: [
        {
            name: "beh-landing",
            script: "npm",
            args: "start",
            cwd: "/home/hiteck-behsite/htdocs/behsite.hiteck.ir/beh-landing",
            env: { NODE_ENV: "production", PORT: 3000 }
        }
    ]
};