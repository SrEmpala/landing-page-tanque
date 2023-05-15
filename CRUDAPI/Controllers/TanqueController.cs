using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TanqueController : ControllerBase
    {
        private readonly Contexto _context;

        public TanqueController(Contexto contexto)
        {
            _context = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tanque>>> PegarTodosAsync(){
            return await _context.Tanques.ToListAsync();
        }

        [HttpGet("{tanqueId}")]
        public async Task<ActionResult<Tanque>> PegarPorIdAsync(int tanqueId){
            Tanque tanque = await _context.Tanques.FindAsync(tanqueId);
            
            if(tanque == null){
                return NotFound();
            }

            return tanque;
        }

        [HttpPost]
        public async Task<ActionResult<Tanque>> SalvarTanqueAsync(Tanque tanque){
            await _context.Tanques.AddAsync(tanque);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarTanqueAsync(Tanque tanque){
            _context.Tanques.Update(tanque);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("tanqueId")]
        public async Task<ActionResult> DeletarTanqueAsync(int tanqueId){
            Tanque tanque = await _context.Tanques.FindAsync(tanqueId);

            if(tanqueId == null){
                return NotFound();
            }
            _context.Remove(tanque);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}