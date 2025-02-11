import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ctx) => {
    ctx.cancel;
    world.sendMessage(
        `\u00A7e${ctx.sender.name} \u00A78| \u00A77${ctx.message}`,
    );
});
