import { Database } from "../database/databaseConnection";


class HardSkillsRepository{

    private db = new Database()

    async add(data: any){
       
       await this.db.tables().hardskills.create({
            data
        });

    }

    async getAll(){
        
        return await this.db.tables().hardskills.findMany();

    }

}

export default HardSkillsRepository