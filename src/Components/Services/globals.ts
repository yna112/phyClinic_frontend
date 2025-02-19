class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        patient:"http://localhost:8080/api/patient",
        therapy:"http://localhost:8080/api/therapy",

    

      
          }
}

class ProductionGlobals extends Globals{
    public urls = {
       
        patient: "https://coppppppuponsbackendcloud-production.up.railway.app/api/therapy",
        therapy:"http://localcoppppppuponsbackdsendcloudhost:8080/api/home",

      
     
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;