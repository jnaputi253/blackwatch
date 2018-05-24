using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace BlackWatch.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ValuesController : Controller
    {
        private readonly IAmazonS3 _s3Client;

        public ValuesController(IAmazonS3 s3Client)
        {
            _s3Client = s3Client;
        }

        [HttpGet]
        public async Task<ListBucketsResponse> Buckets()
        {
            return await _s3Client.ListBucketsAsync();
        }
    }
}
