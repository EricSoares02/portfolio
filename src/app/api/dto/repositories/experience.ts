import { Database } from "../database/databaseConnection";


class ExperienceRepository{

    private db = new Database()

    async up(data: any){
        await this.db.connect();
        this.db.tables().experience.create({
            data
        }).finally(()=>{
            this.db.disconnect();
        });

    }

    async getAll(){
        
        await this.db.connect();
        return this.db.tables().experience.findMany({
            orderBy: {
                period: "desc"
            }}).finally(()=>{
            this.db.disconnect();
        });

    }

}

export default ExperienceRepository