import { Telegraf, Markup } from "telegraf-hardened";

const gameShortName = "your-game";
const gameUrl = "https://your-game.tld";

const markup = Markup.inlineKeyboard([
	Markup.button.game("🎮 Play now!"),
	Markup.button.url("Telegraf help", "https://github.com/telegraf-hardened/telegraf-docs"),
]);

const bot = new Telegraf(token);
bot.start(ctx => ctx.replyWithGame(gameShortName));
bot.command("foo", ctx => ctx.replyWithGame(gameShortName, markup));
bot.gameQuery(ctx => ctx.answerGameQuery(gameUrl));

bot.launch();
