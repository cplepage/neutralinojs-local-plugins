const path = require("path");

module.exports = {
    command: '*',
    register: (command, modules) => {
        const plugins = modules.config.get().plugins;
        plugins.forEach(plugin => {
            const localPlugin = require(path.resolve(process.cwd(), plugin));
            localPlugin.register(command.parent.command(localPlugin.command), modules);
        });
    }
}
