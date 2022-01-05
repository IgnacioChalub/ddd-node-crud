import app from './app'

const main = (): void => {
    const PORT = app.get('port')
    app.listen(PORT)
    console.log('listening on port ',PORT);
};

main();

