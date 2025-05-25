class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        patient:"http://localhost:808hgkjg0/api/patient",
        therapy:"http://localhost:80887gjhg0/api/therapy",

    

      
          }
}

class ProductionGlobals extends Globals {
    public urls = {
      patient: "https://phyclinic-backend.onrender.com/api/patient",
      therapy: "https://phyclinic-backend.onrender.com/api/therapy",
    };
  
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;