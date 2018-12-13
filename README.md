# typescript-debug

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Current File",
            "program": "${file}",
            "console": "integratedTerminal",
            "outFiles": [
                "${fileDirname}/*.js"
            ]
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch current file w/ ts-node",
            "protocol": "inspector",
            "args": [
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "internalConsoleOptions": "openOnSessionStart"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch current file w/ mocha",
            "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
            "env": {
                "TS_NODE_PROJECT": "src/tsconfig.specs.json"
            },
            "args": [
                "--ui",
                "tdd",
                "--timeout",
                "4000",
                "--colors",
                "--require",
                "ts-node/register",
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "internalConsoleOptions": "openOnSessionStart"
        }
    ]
}
