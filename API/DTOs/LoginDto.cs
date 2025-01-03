using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class LoginDto
    {
        [Required]
        [MaxLength(100)]
        public required string username { get; set; }

        [Required]
        public required string password { get; set; }
    }
}
