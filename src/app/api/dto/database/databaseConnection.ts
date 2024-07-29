import { PrismaClient } from "@prisma/client";

class Database{


    private databaseConnection = new PrismaClient() 


    tables(){
        return this.databaseConnection
    }

}

export {Database}