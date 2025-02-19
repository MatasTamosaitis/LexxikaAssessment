using DocumentWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DocumentWebsite.Server.Controllers
{
    [Route("api/document")]
    public class DocumentController : Controller
    {
        [HttpPost("createDocument")]
        public IActionResult CreateDocument([FromBody] FileUpdateModel fileUpdate)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "TextFiles");

            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            string filePath = Path.Combine(directoryPath, fileUpdate.FileName);

            if (System.IO.File.Exists(filePath))
            {
                return Conflict("File already exists.");
            }

            System.IO.File.WriteAllText(filePath, fileUpdate.Content);
            return Ok("File created successfully.");
        }


        [HttpGet("getdocuments")]
        public IActionResult GetDocuments()
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "TextFiles");

            if (!Directory.Exists(directoryPath))
            {
                return NotFound("No text files found.");
            }

            var fileData = new List<object>();

            var filePaths = Directory.GetFiles(directoryPath, "*.txt");
            foreach (var filePath in filePaths)
            {
                fileData.Add(new
                {
                    FileName = Path.GetFileName(filePath),  // ✅ Ensure filename is included
                    Content = System.IO.File.ReadAllText(filePath)
                });
            }

            return Ok(fileData);
        }


        [HttpPost("updatedocuments")]
        public IActionResult UpdateDocuments([FromBody] FileUpdateModel fileUpdate)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "TextFiles");
            string filePath = Path.Combine(directoryPath, fileUpdate.FileName);

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("File not found.");
            }

            System.IO.File.WriteAllText(filePath, fileUpdate.Content);
            return Ok("File updated successfully.");
        }

        [HttpDelete("deleteDocument/{fileName}")]
        public IActionResult DeleteDocument(string fileName)
        {
            string directoryPath = Path.Combine(Directory.GetCurrentDirectory(), "TextFiles");
            string filePath = Path.Combine(directoryPath, fileName);

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("File not found.");
            }

            System.IO.File.Delete(filePath);
            return Ok("File deleted successfully.");
        }

    }
}
