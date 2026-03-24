module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Ntask API - port ${app.get('port')}`);
    });
};