#include <dpp/dpp.h>
#include <stdio.h>
#include <fstream>
#include <string>

int main() {
    /* Get token */
    std::ifstream dt_file("../private/d_token.toaster");
    std::string token;

    std::getline(dt_file, token);
    /*          */

    /* Bot Setup */
    dpp::cluster bot(token);

    bot.on_log(dpp::utility::cout_logger());

    bot.on_slashcommand([](const dpp::slashcommand_t &event) {
        if(event.command.get_command_name() == "test") {
            event.reply("hello there!");
        }
    });

    bot.on_ready([&bot](const dpp::ready_t &event) {
        if(dpp::run_once<struct register_bot_commands>()) {
            bot.global_command_create(
                dpp::slashcommand("test", "literally just a test", bot.me.id)
            );
        }
    });

    bot.start(false);
}