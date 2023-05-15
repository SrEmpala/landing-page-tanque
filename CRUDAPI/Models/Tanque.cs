namespace CRUDAPI.Models
{
    public class Tanque
    {
        public int TanqueId {get; set;}
        public string? Nome {get; set;}
        public string? Modelo {get; set;}
        public string? Nacao {get; set;}
        public int AnoProducao {get; set;}
    }
}