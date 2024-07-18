import { Database } from "../database/databaseConnection";


class HardSkillsRepository{

    private db = new Database()

    async add(data: any){
        await this.db.connect();
        this.db.tables().hardskills.create({
            data
        }).finally(()=>{
            this.db.disconnect();
        });

    }

    async getAll(){
        
        await this.db.connect();
        return this.db.tables().hardskills.findMany().finally(()=>{
            this.db.disconnect();
        });

    }

}

export default HardSkillsRepository