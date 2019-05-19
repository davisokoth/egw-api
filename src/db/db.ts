import * as elasticsearch from 'elasticsearch';
console.log(' ========> ' + process.env.HOST);
const esclient = new elasticsearch.Client({
    host: `http://${process.env.HOST}:${process.env.PORT}`,
    log: 'error'
});

export {esclient};