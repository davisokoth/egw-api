import dotenv from 'dotenv';
dotenv.config();
import { esclient } from './db/db';

function esresp(err: any, resp: any) {  
    if(err) {
        console.log(err);
        return;
    }
    console.log("-- Client Health --", resp);
};

esclient.cluster.health({}, esresp);

