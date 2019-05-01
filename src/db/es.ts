import * as elasticsearch from 'elasticsearch';

export const esclient = new elasticsearch.Client({
    host: 'http://localhost:9200/',
    log: 'error'
});
