import { esclient } from './db/es';

function esresp(err: any, resp: any) {  
    if(err) {
        console.log(err);
        return;
    }
    console.log("-- Client Health --", resp);
};

esclient.cluster.health({}, esresp);

