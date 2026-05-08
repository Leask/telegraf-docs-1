import { FetchClient } from "@telegraf-hardened/fetch";
import { Telegraf } from "telegraf-hardened";

const { BOT_TOKEN, PROXY_URL } = process.env;

if (!BOT_TOKEN) throw new Error('"BOT_TOKEN" env var is required!');
if (!PROXY_URL) throw new Error('"PROXY_URL" env var is required!');

const bot = new Telegraf(BOT_TOKEN, {
	telegram: {
		proxy: {
			proxy: PROXY_URL,
			FetchClient,
		},
	},
});

bot.start(ctx => ctx.reply("Hello"));
bot.help(ctx => ctx.reply("Help message"));
bot.command("photo", ctx =>
	ctx.replyWithPhoto({ url: "https://picsum.photos/200/300/?random" }),
);

bot.launch();
