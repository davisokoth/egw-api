import { injectable } from 'tsyringe';
import * as elasticsearch from 'elasticsearch';

@injectable()
class ESService {

    dbPath = process.env.HOST;
    dbPort = process.env.PORT;

    getConnection() {
        let esclient: any;
        if(this.dbPath === undefined || this.dbPort === undefined) {
            // don't proceed!
        } else {
            esclient = new elasticsearch.Client({
                host: `http://${this.dbPath}:${this.dbPort}/`,
                log: 'error'
            });
        }
        return esclient;
    }

    dbHealth() {
        const session = this.getConnection();
        session.cluster.health({}, (err: any, resp: any) => {  
            if(err) {
                console.log(err);
                return;
            }
            return '-- Client Health: ' + resp;
        });
    }

    getData() {}

    addUser() {}
}

export {ESService};