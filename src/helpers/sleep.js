module.exports = async function sleep(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}